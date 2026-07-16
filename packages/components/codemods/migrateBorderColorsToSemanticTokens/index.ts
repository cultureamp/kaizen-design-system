import fs from 'fs'
import path from 'path'
import ts from 'typescript'
import { transformCssBorderColors } from './transformCssBorderColors'
import { transformScssBorderColors } from './transformScssBorderColors'
import { transformTailwindBorderClasses } from './transformTailwindBorderClasses'

type SkipReport = { file: string; line: number; detail: string }

/**
 * Resolves the consumer's Tailwind prefix.
 *
 * The `kaizen-codemod` wrapper only forwards the target dir, so the prefix is
 * taken from (in priority order): a `--prefix=` CLI arg (when run directly via
 * tsx), the `KAIZEN_TW_PREFIX` env var, or a best-effort read of a
 * `tailwind.config.*` in the current working directory.
 */
const resolveTailwindPrefix = (): string => {
  const argPrefix = process.argv.find((arg) => arg.startsWith('--prefix='))
  if (argPrefix) return argPrefix.slice('--prefix='.length)
  if (process.env.KAIZEN_TW_PREFIX) return process.env.KAIZEN_TW_PREFIX

  const configName = [
    'tailwind.config.ts',
    'tailwind.config.js',
    'tailwind.config.cjs',
    'tailwind.config.mjs',
  ].find((name) => fs.existsSync(path.join(process.cwd(), name)))
  if (configName) {
    try {
      const contents = fs.readFileSync(path.join(process.cwd(), configName), 'utf8')
      const match = /prefix:\s*['"`]([^'"`]+)['"`]/.exec(contents)
      if (match) return match[1]
    } catch {
      // best effort only — fall through to no prefix
    }
  }
  return ''
}

const traverseDir = (dir: string, onFile: (filePath: string) => void): void => {
  if (dir.includes('node_modules')) return
  for (const entry of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, entry)
    if (fs.statSync(fullPath).isDirectory()) {
      traverseDir(fullPath, onFile)
    } else {
      onFile(fullPath)
    }
  }
}

const run = (): void => {
  console.log(' ~(-_- ~) Running border colors → semantic tokens transformer (~ -_-)~')
  const targetDir = process.argv[2]
  if (!targetDir || targetDir.startsWith('--')) {
    console.error('Usage: kaizen-codemod <dir> migrateBorderColorsToSemanticTokens')
    process.exit(1)
  }

  const prefix = resolveTailwindPrefix()
  if (prefix) console.log(`Using Tailwind prefix: "${prefix}"`)

  let convertedCount = 0
  const skips: SkipReport[] = []

  traverseDir(targetDir, (filePath) => {
    const relative = path.relative(process.cwd(), filePath)

    if (filePath.endsWith('.scss') || filePath.endsWith('.css')) {
      const source = fs.readFileSync(filePath, 'utf8')
      const { code, converted, skipped } = filePath.endsWith('.scss')
        ? transformScssBorderColors(source)
        : transformCssBorderColors(source)
      if (converted.length > 0) fs.writeFileSync(filePath, code, 'utf8')
      convertedCount += converted.length
      skipped.forEach((s) =>
        skips.push({ file: relative, line: s.line, detail: `${s.property}: ${s.value}` }),
      )
      return
    }

    if (/\.(tsx|jsx|ts)$/.test(filePath)) {
      const source = fs.readFileSync(filePath, 'utf8')
      const scriptKind = filePath.endsWith('.ts') ? ts.ScriptKind.TS : ts.ScriptKind.TSX
      const { code, converted, skipped } = transformTailwindBorderClasses(source, {
        prefix,
        scriptKind,
      })
      if (converted.length > 0) fs.writeFileSync(filePath, code, 'utf8')
      convertedCount += converted.length
      skipped.forEach((s) => skips.push({ file: relative, line: s.line, detail: s.token }))
    }
  })

  console.log('')
  console.log(`✅ Converted ${convertedCount} border color token(s) to semantic tokens.`)

  if (skips.length > 0) {
    console.log('')
    console.log(`⚠️  SKIPPED ${skips.length} border color(s) with no confident semantic mapping.`)
    console.log('   Resolve these with the /semantic-border-migration skill (stage 2):')
    skips.forEach((s) => console.log(`   - ${s.file}:${s.line} — ${s.detail}`))
  } else {
    console.log('No ambiguous border colors detected — stage 2 may not be needed.')
  }
}

run()
