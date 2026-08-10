/**
 * check-package-output.ts
 *
 * Advisory check: does the tarball we'd publish differ from the one already on npm,
 * for packages with no changeset?
 *
 * Usage: npx tsx scripts/check-package-output.ts
 *
 * Exit codes:
 *   0 - all packages match or are covered by changesets
 *   1 - reportable packages found (drift without changeset)
 *   2 - infrastructure error
 */

/* eslint-disable no-console */

import { execSync } from 'node:child_process'
import { createHash } from 'node:crypto'
import {
  existsSync,
  mkdtempSync,
  readFileSync,
  readdirSync,
  rmSync,
  statSync,
  writeFileSync,
} from 'node:fs'
import { tmpdir } from 'node:os'
import { join, relative } from 'node:path'

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function exec(cmd: string, opts?: { cwd?: string }): string {
  return execSync(cmd, {
    encoding: 'utf-8',
    cwd: opts?.cwd,
    maxBuffer: 50 * 1024 * 1024,
  }).trim()
}

function execSafe(cmd: string, opts?: { cwd?: string }): { ok: boolean; stdout: string } {
  try {
    return { ok: true, stdout: exec(cmd, opts) }
  } catch {
    return { ok: false, stdout: '' }
  }
}

function sha256(data: Buffer | string): string {
  return createHash('sha256').update(data).digest('hex')
}

/** Recursively list all files under dir, returning relative paths sorted. */
function listFiles(dir: string, base = dir): string[] {
  const results: string[] = []
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) {
      results.push(...listFiles(full, base))
    } else if (entry.isFile()) {
      results.push(relative(base, full))
    }
  }
  return results.sort()
}

/** Build a fingerprint manifest: "sha256  relative/path" per file, then hash the manifest. */
function fingerprint(dir: string): { hash: string; manifest: string[] } {
  const files = listFiles(dir)
  const manifest = files.map((f) => {
    const content = readFileSync(join(dir, f))
    return `${sha256(content)}  ${f}`
  })
  const hash = sha256(manifest.join('\n'))
  return { hash, manifest }
}

/** Compare two manifests and return diff info. */
function diffManifests(
  localManifest: string[],
  publishedManifest: string[],
): { added: string[]; removed: string[]; modified: string[] } {
  const localMap = new Map(
    localManifest.map((line) => {
      const [hash, ...rest] = line.split('  ')
      return [rest.join('  '), hash] as [string, string]
    }),
  )
  const publishedMap = new Map(
    publishedManifest.map((line) => {
      const [hash, ...rest] = line.split('  ')
      return [rest.join('  '), hash] as [string, string]
    }),
  )

  const added: string[] = []
  const removed: string[] = []
  const modified: string[] = []

  for (const [path] of localMap) {
    if (!publishedMap.has(path)) {
      added.push(path)
    } else if (localMap.get(path) !== publishedMap.get(path)) {
      modified.push(path)
    }
  }
  for (const [path] of publishedMap) {
    if (!localMap.has(path)) {
      removed.push(path)
    }
  }

  return { added, removed, modified }
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

interface PackageResult {
  name: string
  status: 'identical' | 'changed' | 'skipped'
  reason?: string
  diff?: { added: string[]; removed: string[]; modified: string[] }
}

async function main(): Promise<void> {
  const repoRoot = exec('git rev-parse --show-toplevel')
  const packagesDir = join(repoRoot, 'packages')

  // Step 1 is expected to have been run already (pnpm turbo build) - we don't build here
  // The workflow runs the build step separately before invoking this script

  // Find public packages
  const packageDirs = readdirSync(packagesDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => join(packagesDir, d.name))
    .filter((dir) => {
      const pkgPath = join(dir, 'package.json')
      if (!existsSync(pkgPath)) return false
      const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8'))
      return pkg.private !== true
    })

  console.log(`Found ${packageDirs.length} public packages`)

  const results: PackageResult[] = []
  const tmpBase = mkdtempSync(join(tmpdir(), 'pkg-output-'))

  try {
    for (const pkgDir of packageDirs) {
      const pkgJson = JSON.parse(readFileSync(join(pkgDir, 'package.json'), 'utf-8'))
      const { name, version } = pkgJson
      console.log(`\nChecking ${name}@${version}...`)

      // Local side: pnpm pack
      const localTmp = join(tmpBase, `local-${name.replace(/\//g, '__')}`)
      const localPackDest = join(tmpBase, `pack-${name.replace(/\//g, '__')}`)
      execSync(`mkdir -p "${localPackDest}"`)

      let tarball: string
      try {
        tarball = exec(`pnpm pack --pack-destination "${localPackDest}"`, {
          cwd: pkgDir,
        })
      } catch {
        console.log(`  SKIP: pnpm pack failed for ${name}`)
        results.push({ name, status: 'skipped', reason: 'pnpm pack failed' })
        continue
      }

      // Extract local tarball
      const tarballPath = join(localPackDest, tarball.split('\n').pop()!)
      execSync(`mkdir -p "${localTmp}"`)
      execSync(`tar -xf "${tarballPath}" -C "${localTmp}" --strip-components=1`)

      // Published side: get tarball URL from registry
      const viewResult = execSafe(`npm view "${name}@${version}" dist.tarball 2>/dev/null`)
      if (!viewResult.ok || !viewResult.stdout) {
        console.log(
          `  SKIP: ${name}@${version} not on registry (first release or version bump in flight)`,
        )
        results.push({
          name,
          status: 'skipped',
          reason: `${version} not on registry`,
        })
        continue
      }

      const tarballUrl = viewResult.stdout
      const publishedTmp = join(tmpBase, `published-${name.replace(/\//g, '__')}`)
      const publishedTarball = join(tmpBase, `published-${name.replace(/\//g, '__')}.tgz`)

      try {
        execSync(`curl -sL "${tarballUrl}" -o "${publishedTarball}"`)
        execSync(`mkdir -p "${publishedTmp}"`)
        execSync(`tar -xf "${publishedTarball}" -C "${publishedTmp}" --strip-components=1`)
      } catch {
        console.log(`  SKIP: failed to download published tarball for ${name}`)
        results.push({
          name,
          status: 'skipped',
          reason: 'failed to download published tarball',
        })
        continue
      }

      // Fingerprint both
      const localFp = fingerprint(localTmp)
      const publishedFp = fingerprint(publishedTmp)

      if (localFp.hash === publishedFp.hash) {
        console.log(`  IDENTICAL`)
        results.push({ name, status: 'identical' })
      } else {
        const diff = diffManifests(localFp.manifest, publishedFp.manifest)
        console.log(
          `  CHANGED: +${diff.added.length} -${diff.removed.length} ~${diff.modified.length}`,
        )
        results.push({ name, status: 'changed', diff })
      }
    }

    // Step 3: read declared releases from changeset status
    const changesetOutputFile = join(tmpBase, 'changeset-status.json')
    const changesetResult = execSafe(
      `pnpm changeset status --since=origin/main --output="${changesetOutputFile}"`,
    )

    let declaredReleases: string[] = []
    if (
      changesetResult.ok &&
      existsSync(changesetOutputFile) &&
      statSync(changesetOutputFile).size > 0
    ) {
      try {
        const status = JSON.parse(readFileSync(changesetOutputFile, 'utf-8'))
        declaredReleases = ((status.releases ?? []) as { name: string }[]).map((r) => r.name)
      } catch {
        // changeset status output may be empty or invalid - that's ok
      }
    }

    console.log(`\nDeclared releases: ${declaredReleases.join(', ') || '(none)'}`)

    // Determine reportable packages
    const reportable = results.filter(
      (r) => r.status === 'changed' && !declaredReleases.includes(r.name),
    )

    // Generate report
    const report = generateReport(results, reportable, declaredReleases)
    console.log('\n' + report)

    // Write to GITHUB_STEP_SUMMARY if available
    const summaryPath = process.env.GITHUB_STEP_SUMMARY
    if (summaryPath) {
      writeFileSync(summaryPath, report, { flag: 'a' })
    }

    if (reportable.length > 0) {
      console.log(`\n${reportable.length} package(s) have tarball drift without a changeset.`)
      process.exit(1)
    }

    console.log('\nAll packages are either identical or covered by changesets.')
    process.exit(0)
  } finally {
    rmSync(tmpBase, { recursive: true, force: true })
  }
}

function generateReport(
  results: PackageResult[],
  reportable: PackageResult[],
  declaredReleases: string[],
): string {
  const lines: string[] = []

  lines.push('## Package Output Check\n')

  if (reportable.length === 0) {
    lines.push('All packages either match their published version or are covered by a changeset.\n')
  } else {
    lines.push(
      `**${reportable.length} package(s) have published tarball drift without a changeset:**\n`,
    )

    for (const pkg of reportable) {
      lines.push(`### \`${pkg.name}\`\n`)
      if (pkg.diff) {
        const examples: string[] = []
        const allDiffs = [
          ...pkg.diff.modified.map((f) => `modified: ${f}`),
          ...pkg.diff.added.map((f) => `added: ${f}`),
          ...pkg.diff.removed.map((f) => `removed: ${f}`),
        ]

        // Special case: only package.json changed
        if (
          pkg.diff.modified.length === 1 &&
          pkg.diff.modified[0] === 'package.json' &&
          pkg.diff.added.length === 0 &&
          pkg.diff.removed.length === 0
        ) {
          lines.push(
            'Difference is only in `package.json` — likely an internal dependency version change.\n',
          )
        }

        // Special case: dist/styles.css or CSS changes
        const cssChanges = [...pkg.diff.modified, ...pkg.diff.added].filter(
          (f) => f.endsWith('.css') && (f.startsWith('dist/') || f.includes('/dist/')),
        )
        if (cssChanges.length > 0) {
          lines.push(
            'Built CSS files differ — likely cause is a design-token value change propagating from `@kaizen/design-tokens`.\n',
          )
        }

        // Show up to 5 examples
        for (const diff of allDiffs.slice(0, 5)) {
          examples.push(`- \`${diff}\``)
        }
        if (allDiffs.length > 5) {
          examples.push(`- ... and ${allDiffs.length - 5} more`)
        }
        lines.push(examples.join('\n') + '\n')
      }
    }
  }

  // Summary table
  lines.push('\n### Summary\n')
  lines.push('| Package | Status |')
  lines.push('|---------|--------|')
  for (const r of results) {
    const statusEmoji =
      r.status === 'identical'
        ? 'identical'
        : r.status === 'skipped'
          ? `skipped (${r.reason})`
          : declaredReleases.includes(r.name)
            ? 'changed (has changeset)'
            : '**DRIFT - no changeset**'
    lines.push(`| \`${r.name}\` | ${statusEmoji} |`)
  }

  return lines.join('\n')
}

main().catch((err) => {
  console.error('Fatal error:', err)
  process.exit(2)
})
