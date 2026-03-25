#!/usr/bin/env node
/* eslint-disable no-console */
/**
 * Color Palette Migration Script
 *
 * Migrates color references from legacy names to new names as part of the
 * OKLCH color palette update. Handles multiple syntax patterns:
 * - Tailwind classes (bg-purple-800 -> bg-purple-950)
 * - Sass variables ($color-purple-800 -> $color-purple-950)
 * - CSS custom properties (--color-purple-800 -> --color-purple-950)
 * - rgba() to oklch() conversion for -rgb variants
 *
 * Usage:
 *   node scripts/migrate-colors.mjs [--dry-run] [path]
 */

import * as fs from 'node:fs'
import * as path from 'node:path'

// Color name mappings from legacy to new (from CSV)
// Only includes colors where the name changes
const COLOR_MAPPINGS = {
  // Blue
  'blue-100': 'blue-050',
  'blue-400': 'blue-500',
  'blue-500': 'blue-600',
  'blue-600': 'blue-800',
  'blue-700': 'blue-900',

  // Green
  'green-100': 'green-050',
  'green-200': 'green-100',
  'green-300': 'green-200',
  'green-400': 'green-300',

  // Purple
  'purple-100': 'purple-050',
  'purple-400': 'purple-500',
  'purple-500': 'purple-600',
  'purple-600': 'purple-800',
  'purple-700': 'purple-900',
  'purple-800': 'purple-950',

  // Red
  'red-100': 'red-050',
  'red-500': 'red-600',
  'red-600': 'red-700',
  'red-700': 'red-800',

  // Yellow
  'yellow-100': 'yellow-010',
  'yellow-200': 'yellow-050',
  'yellow-300': 'yellow-100',
  'yellow-400': 'yellow-200',
  'yellow-500': 'yellow-200', // Note: same target as yellow-400
  'yellow-600': 'yellow-400',
  'yellow-700': 'yellow-600',

  // Orange
  'orange-100': 'orange-050',

  // Gray -> gray-warm/gray-cool split
  'gray-100': 'gray-warm-010',
  'gray-200': 'gray-warm-050',
  'gray-300': 'gray-warm-100',
  'gray-400': 'gray-warm-200',
  'gray-500': 'gray-cool-500',
  'gray-600': 'gray-cool-700',
}

/**
 * @param {string} content
 * @param {string} filePath
 * @returns {{ content: string, changes: Array<{line: number, before: string, after: string}> }}
 */
function migrateContent(content, filePath) {
  const changes = []
  const lines = content.split('\n')
  const ext = path.extname(filePath)

  const isSass = ext === '.scss' || ext === '.sass'
  const isCss = ext === '.css'
  const isTsx = ext === '.tsx' || ext === '.ts' || ext === '.jsx' || ext === '.js'

  // Sort mappings by length (longest first) to avoid partial matches
  const sortedMappings = Object.entries(COLOR_MAPPINGS).sort((a, b) => b[0].length - a[0].length)

  // Use placeholders to avoid double-replacement issues
  // e.g., blue-500 -> blue-600 -> blue-800 (wrong!)
  // Instead: blue-500 -> __PLACEHOLDER_blue-600__ -> blue-600 (correct)
  const PLACEHOLDER_PREFIX = '__COLOR_MIGRATE_'
  const PLACEHOLDER_SUFFIX = '__'

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i]
    const originalLine = line

    // Handle rgba($color-*-rgb, alpha) and rgb($color-*-rgb, alpha) -> oklch(from $color-* l c h / alpha)
    // Also handles Sass module syntax: rgba(color.$color-*-rgb, alpha)
    if (isSass) {
      // Pattern: rgba($color-NAME-rgb, ALPHA) or rgb($color-NAME-rgb, ALPHA)
      // Also matches: rgba(color.$color-NAME-rgb, ALPHA) for Sass module imports
      const rgbaPattern = /rgba?\((color\.)?\$color-([a-zA-Z]+-\d+)-rgb,\s*([^)]+)\)/g
      line = line.replace(rgbaPattern, (match, namespace, colorName, alpha) => {
        const newColorName = COLOR_MAPPINGS[colorName] || colorName
        const prefix = namespace || ''
        return `oklch(from ${prefix}$color-${PLACEHOLDER_PREFIX}${newColorName}${PLACEHOLDER_SUFFIX} l c h / ${alpha.trim()})`
      })

      // Pattern for white: rgba($color-white-rgb, ALPHA) or rgb($color-white-rgb, ALPHA)
      // Also matches: rgba(color.$color-white-rgb, ALPHA) for Sass module imports
      const rgbaWhitePattern = /rgba?\((color\.)?\$color-white-rgb,\s*([^)]+)\)/g
      line = line.replace(rgbaWhitePattern, (match, namespace, alpha) => {
        const prefix = namespace || ''
        return `oklch(from ${prefix}$color-white l c h / ${alpha.trim()})`
      })
    }

    // Handle CSS var rgba: rgba(var(--color-*-rgb), alpha) -> oklch(from var(--color-*) l c h / alpha)
    if (isSass || isCss) {
      const cssVarRgbaPattern = /rgba\(var\(--color-([a-zA-Z]+-\d+)-rgb\),\s*([^)]+)\)/g
      line = line.replace(cssVarRgbaPattern, (match, colorName, alpha) => {
        const newColorName = COLOR_MAPPINGS[colorName] || colorName
        return `oklch(from var(--color-${PLACEHOLDER_PREFIX}${newColorName}${PLACEHOLDER_SUFFIX}) l c h / ${alpha.trim()})`
      })
    }

    // Migrate Sass variables: $color-NAME -> $color-NEW_NAME
    if (isSass) {
      for (const [legacy, newName] of sortedMappings) {
        // Match $color-NAME but not $color-NAME-rgb (already handled above)
        const sassPattern = new RegExp(`\\$color-${legacy}(?!-rgb)\\b`, 'g')
        line = line.replace(
          sassPattern,
          `$color-${PLACEHOLDER_PREFIX}${newName}${PLACEHOLDER_SUFFIX}`,
        )
      }
    }

    // Migrate CSS custom properties: --color-NAME -> --color-NEW_NAME
    if (isSass || isCss) {
      for (const [legacy, newName] of sortedMappings) {
        // Match --color-NAME but not --color-NAME-rgb
        const cssVarPattern = new RegExp(`--color-${legacy}(?!-rgb)\\b`, 'g')
        line = line.replace(
          cssVarPattern,
          `--color-${PLACEHOLDER_PREFIX}${newName}${PLACEHOLDER_SUFFIX}`,
        )
      }
    }

    // Migrate Tailwind classes in TSX/JSX files
    if (isTsx) {
      for (const [legacy, newName] of sortedMappings) {
        // Match color names in Tailwind context:
        // - bg-NAME, text-NAME, border-NAME, ring-NAME, etc.
        // - With optional prefixes like prc:, cui:, hover:, focus:, prc:hover:, etc.
        // - With optional opacity suffix like /70
        const tailwindPattern = new RegExp(
          `(?<=[\\s"'\`{])((?:[a-zA-Z-]+:)*)(bg|text|border|ring|outline|fill|stroke|shadow|decoration|accent|caret|divide|from|via|to)-${legacy}(!?)(?=/|[\\s"'\`}]|$)`,
          'g',
        )
        line = line.replace(
          tailwindPattern,
          `$1$2-${PLACEHOLDER_PREFIX}${newName}${PLACEHOLDER_SUFFIX}$3`,
        )
      }
    }

    // Replace all placeholders with actual values
    // Matches color names like: blue-050, gray-warm-010, purple-950
    const placeholderPattern = new RegExp(
      `${PLACEHOLDER_PREFIX}([a-zA-Z-]+-\\d+)${PLACEHOLDER_SUFFIX}`,
      'g',
    )
    line = line.replace(placeholderPattern, '$1')

    if (line !== originalLine) {
      changes.push({
        line: i + 1,
        before: originalLine,
        after: line,
      })
      lines[i] = line
    }
  }

  return { content: lines.join('\n'), changes }
}

/**
 * @param {string} dir
 * @param {string[]} extensions
 * @returns {string[]}
 */
function findFiles(dir, extensions) {
  const files = []

  function walk(currentDir) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true })

    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name)

      // Skip node_modules, dist, .git, build artifacts, etc.
      if (
        entry.isDirectory() &&
        ![
          'node_modules',
          'dist',
          '.git',
          '.turbo',
          'coverage',
          'storybook-static',
          '.next',
          'build',
          'out',
        ].includes(entry.name)
      ) {
        walk(fullPath)
      } else if (entry.isFile() && extensions.some((ext) => entry.name.endsWith(ext))) {
        files.push(fullPath)
      }
    }
  }

  walk(dir)
  return files
}

/**
 * @param {string} targetPath
 * @param {boolean} dryRun
 * @returns {{ results: Array<{file: string, changes: Array<{line: number, before: string, after: string}>}>, totalChanges: number }}
 */
function migrate(targetPath, dryRun) {
  const extensions = ['.scss', '.sass', '.css', '.tsx', '.ts', '.jsx', '.js']
  const files = fs.statSync(targetPath).isDirectory()
    ? findFiles(targetPath, extensions)
    : [targetPath]

  const results = []
  let totalChanges = 0

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf-8')
    const { content: newContent, changes } = migrateContent(content, file)

    if (changes.length > 0) {
      results.push({ file, changes })
      totalChanges += changes.length

      if (!dryRun) {
        fs.writeFileSync(file, newContent)
      }
    }
  }

  return { results, totalChanges }
}

// CLI
const args = process.argv.slice(2)
const dryRun = args.includes('--dry-run')
const targetPath = args.find((arg) => !arg.startsWith('--')) || process.cwd()

console.log(`Color Migration Script`)
console.log(`Mode: ${dryRun ? 'DRY RUN' : 'LIVE'}`)
console.log(`Target: ${targetPath}`)
console.log('')

const { results, totalChanges } = migrate(targetPath, dryRun)

for (const result of results) {
  console.log(`\n${result.file}:`)
  for (const change of result.changes) {
    console.log(`  Line ${change.line}:`)
    console.log(`    - ${change.before.trim()}`)
    console.log(`    + ${change.after.trim()}`)
  }
}

console.log(`\n${'='.repeat(60)}`)
console.log(`Total: ${totalChanges} changes in ${results.length} files`)

if (dryRun && totalChanges > 0) {
  console.log(`\nRun without --dry-run to apply changes.`)
}
