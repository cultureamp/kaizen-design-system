/**
 * Advisory: does the tarball we'd publish differ from the one already on npm?
 *
 * Assumes `pnpm turbo build` has already run. Exits 1 if any package's output
 * differs with no changeset covering it — a human decides whether that warrants
 * a release.
 */

/* eslint-disable no-console */

import { execFileSync } from 'node:child_process'
import { createHash } from 'node:crypto'
import { mkdirSync, mkdtempSync, readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const run = (cmd: string, args: string[], cwd?: string): string =>
  execFileSync(cmd, args, { encoding: 'utf-8', cwd, maxBuffer: 64 * 1024 * 1024 }).trim()

const sha = (data: Buffer | string): string => createHash('sha256').update(data).digest('hex')

const fingerprint = (dir: string): string => {
  const files = readdirSync(dir, { recursive: true, withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => join(entry.parentPath, entry.name).slice(dir.length + 1))
    .sort()
  return sha(files.map((f) => `${sha(readFileSync(join(dir, f)))}  ${f}`).join('\n'))
}

/** Extract into a directory of its own, so the tarball file never lands in the fingerprint. */
const extractedFingerprint = (tarball: string, dest: string): string => {
  const contents = join(dest, 'contents')
  mkdirSync(contents)
  run('tar', ['-xf', tarball, '-C', contents, '--strip-components=1'])
  return fingerprint(contents)
}

const packedFingerprint = (pkgDir: string, tmp: string): string => {
  const dest = mkdtempSync(join(tmp, 'local-'))
  const tarball = run('pnpm', ['pack', '--pack-destination', dest], pkgDir).split('\n').pop()!
  return extractedFingerprint(tarball, dest)
}

/** Null means this version was never published, which is a skip rather than a failure. */
const publishedFingerprint = async (
  name: string,
  version: string,
  tmp: string,
): Promise<string | null> => {
  const metadata = await fetch(`https://registry.npmjs.org/${name}/${version}`)
  if (metadata.status === 404) return null
  if (!metadata.ok) throw new Error(`registry returned ${metadata.status} for ${name}@${version}`)

  const { dist } = (await metadata.json()) as { dist: { tarball: string } }
  const download = await fetch(dist.tarball)
  if (!download.ok) throw new Error(`tarball download failed for ${name}@${version}`)

  const dest = mkdtempSync(join(tmp, 'published-'))
  const tarball = join(dest, 'published.tgz')
  writeFileSync(tarball, Buffer.from(await download.arrayBuffer()))
  return extractedFingerprint(tarball, dest)
}

const releasedPackages = (): Set<string> => {
  const out = join(mkdtempSync(join(tmpdir(), 'changeset-')), 'status.json')
  try {
    execFileSync('pnpm', ['changeset', 'status', '--since=origin/main', `--output=${out}`], {
      stdio: 'ignore',
    })
  } catch {
    // Non-zero simply means uncovered changes; the status file is still written.
  }
  try {
    const status = JSON.parse(readFileSync(out, 'utf-8'))
    return new Set<string>(status.releases.map((r: { name: string }) => r.name))
  } catch {
    return new Set()
  }
}

const root = run('git', ['rev-parse', '--show-toplevel'])
const tmp = mkdtempSync(join(tmpdir(), 'package-output-'))
const released = releasedPackages()

const packages = readdirSync(join(root, 'packages'), { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => join(root, 'packages', entry.name))
  .flatMap((dir) => {
    try {
      const pkg = JSON.parse(readFileSync(join(dir, 'package.json'), 'utf-8'))
      return pkg.private === true ? [] : [{ dir, name: pkg.name, version: pkg.version }]
    } catch {
      return []
    }
  })

const drifted: string[] = []

for (const { dir, name, version } of packages) {
  const published = await publishedFingerprint(name, version, tmp)
  if (published === null) {
    console.log(`? ${name} — ${version} not on registry, skipped`)
    continue
  }
  if (packedFingerprint(dir, tmp) === published) {
    console.log(`= ${name} — matches ${version}`)
  } else if (released.has(name)) {
    console.log(`~ ${name} — differs, changeset present`)
  } else {
    console.log(`! ${name} — differs from ${version}, no changeset`)
    drifted.push(name)
  }
}

if (drifted.length > 0) {
  console.log(
    `\nOutput differs from the published version with no changeset: ${drifted.join(', ')}.\n` +
      `Advisory only — add a changeset if these changes should ship.`,
  )
  process.exit(1)
}
