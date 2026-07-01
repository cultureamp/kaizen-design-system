/**
 * Transforms Untitled UI (UUI) Tailwind colour classes into Kaizen's clean
 * semantic class form, so UUI components can be dropped into a Kaizen-preset app.
 *
 * WHY: UUI declares its semantic tokens as `--color-bg-primary`,
 * `--color-text-primary`, `--color-fg-primary`, `--color-border-primary` inside a
 * TW4 `@theme` block. Tailwind 4 reads the colour *name* as the whole string after
 * `--color-`, so it generates DOUBLED utilities — `bg-bg-primary`,
 * `text-text-primary`, `border-border-primary` — and there is no `fg-*` utility
 * (foreground colour is applied via `text-fg-*`).
 *
 * Kaizen ships the CLEAN form instead: `bg-primary`, `text-primary`,
 * `border-primary`, and a real `fg-*` utility. This script strips the doubling:
 *
 *   bg-bg-<x>         -> bg-<x>
 *   text-text-<x>     -> text-<x>
 *   border-border-<x> -> border-<x>
 *   text-fg-<x>       -> fg-<x>          (category shift)
 *
 * It is colour-classes only (single responsibility). Variant prefixes (`hover:`,
 * `md:`, `group-hover/x:`), an optional Tailwind prefix, and `!important` are
 * preserved; already-clean classes, spacing/layout classes, primitive utilities
 * (`text-purple-600`) and arbitrary values (`bg-[var(--x)]`) are left untouched.
 *
 * Usage:
 *   node transform-untitled-ui-classes.mjs <file-or-dir...> [--prefix <p>] [--write]
 *   (dry run by default; pass --write to apply changes)
 */

import fs from "node:fs"
import path from "node:path"

const DOUBLED_PREFIX_RE = /(^|:)(bg-bg-|text-text-|border-border-|text-fg-)/

function parseImportant(token) {
  if (!token) return { token, important: false }
  // TW3 important: `!class`.
  if (token.startsWith("!")) return { token: token.slice(1), important: true }
  // Variant important like `hover:!bg-red`.
  if (token.includes(":!")) return { token: token.replaceAll(":!", ":"), important: true }
  // TW4 important: `class!`.
  if (token.endsWith("!")) return { token: token.slice(0, -1), important: true }
  return { token, important: false }
}

function parseExistingPrefix(token, prefix) {
  if (!prefix) return { token, hadPrefix: false }
  const prefixMarker = `${prefix}:`
  if (!token.startsWith(prefixMarker)) return { token, hadPrefix: false }
  return { token: token.slice(prefixMarker.length), hadPrefix: true }
}

/**
 * Strip the UUI doubling on the utility segment. The `(^|:)` anchor means variant
 * prefixes (e.g. `hover:bg-bg-primary`) are handled inline.
 */
function applyColourMapping(base) {
  if (!base) return base
  // Leave arbitrary values intact (e.g. text-fg-[#fff], bg-[var(--x)]).
  if (base.includes("-[")) return base

  return base
    .replace(/(^|:)bg-bg-/g, "$1bg-")
    .replace(/(^|:)text-text-/g, "$1text-")
    .replace(/(^|:)border-border-/g, "$1border-")
    .replace(/(^|:)text-fg-/g, "$1fg-")
}

export function transformClassToken(token, { prefix } = {}) {
  if (!token) return token
  if (token === "{" || token === "}" || token === "(" || token === ")") return token
  // Don't touch arbitrary selector blocks like `[&>*]:...`.
  if (token.startsWith("[&")) return token

  const { token: withoutImportant, important } = parseImportant(token)
  const { token: withoutPrefix } = parseExistingPrefix(withoutImportant, prefix)

  const mapped = applyColourMapping(withoutPrefix)
  const finalToken = prefix ? `${prefix}:${mapped}` : mapped

  return important ? `${finalToken}!` : finalToken
}

export function transformClassString(classList, { prefix } = {}) {
  return classList.replace(/[\S]+/g, (tok) => transformClassToken(tok, { prefix }))
}

export function transformSource(source, { prefix } = {}) {
  return source.replace(/"([^"\\]*(?:\\.[^"\\]*)*)"/g, (match, inner, offset) => {
    const before = source.slice(Math.max(0, offset - 80), offset)

    // Avoid transforming import/module specifiers.
    if (
      /\bfrom\s*$/.test(before) ||
      /\bimport\s*$/.test(before) ||
      /\bimport\s*\(\s*$/.test(before) ||
      /\brequire\s*\(\s*$/.test(before)
    ) {
      return match
    }

    const trimmed = inner.trim()
    if (!trimmed) return match
    if (!/[a-z0-9]/i.test(trimmed)) return match

    // Obvious non-class strings.
    if (
      trimmed.startsWith("./") ||
      trimmed.startsWith("../") ||
      trimmed.startsWith("/") ||
      /^[a-zA-Z][a-zA-Z0-9+.-]*:\/\//.test(trimmed)
    ) {
      return match
    }

    const hasWhitespace = /\s/.test(trimmed)

    // Attribute / event names (only for single-token strings).
    if (!hasWhitespace) {
      if (/^(data|aria)-[a-z0-9-]+$/.test(trimmed)) return match
      if (/^on[A-Z]/.test(trimmed)) return match
    }

    const tokens = hasWhitespace ? trimmed.split(/\s+/).filter(Boolean) : [trimmed]

    const hasStrongSignal = tokens.some((token) => {
      const { token: withoutImportant } = parseImportant(token)
      if (prefix && withoutImportant.startsWith(`${prefix}:`)) return true
      // A UUI doubled colour class is itself a strong signal.
      if (DOUBLED_PREFIX_RE.test(withoutImportant)) return true
      if (withoutImportant.includes("[")) return true
      if (withoutImportant.includes(":")) return true
      return /(^|:)-?[a-z-]+-\d+(?:\.\d+)?$/.test(withoutImportant)
    })

    const looksTailwind = hasWhitespace
      ? hasStrongSignal
      : DOUBLED_PREFIX_RE.test(trimmed) || /[-[]/.test(trimmed)

    if (!looksTailwind) return match

    return `"${transformClassString(inner, { prefix })}"`
  })
}

export function transformFile(filePath, { prefix, write = false, fsModule = fs } = {}) {
  const src = fsModule.readFileSync(filePath, "utf8")
  const out = transformSource(src, { prefix })
  const changed = out !== src
  if (changed && write) fsModule.writeFileSync(filePath, out)
  return changed
}

const DEFAULT_DIR_IGNORES = new Set([".git", "build", "coverage", "dist", "node_modules", ".next"])
const DEFAULT_FILE_EXTS = new Set([".tsx", ".jsx", ".ts", ".js"])

function collectFiles(targets, { cwd, fsModule, logger }) {
  const out = []
  for (const target of targets) {
    const abs = path.resolve(cwd, target)
    let stat
    try {
      stat = fsModule.statSync(abs)
    } catch {
      logger.error(`Path not found: ${target}`)
      throw new Error(`Path not found: ${target}`)
    }
    if (stat.isFile()) {
      out.push(abs)
      continue
    }
    if (stat.isDirectory()) {
      const stack = [abs]
      while (stack.length > 0) {
        const dir = stack.pop()
        for (const entry of fsModule.readdirSync(dir, { withFileTypes: true })) {
          if (entry.isDirectory()) {
            if (!DEFAULT_DIR_IGNORES.has(entry.name)) stack.push(path.join(dir, entry.name))
            continue
          }
          if (entry.isFile() && DEFAULT_FILE_EXTS.has(path.extname(entry.name))) {
            out.push(path.join(dir, entry.name))
          }
        }
      }
      continue
    }
    logger.error(`Unsupported path type: ${target}`)
    throw new Error(`Unsupported path type: ${target}`)
  }
  return out
}

export function runCli({ argv = process.argv, cwd = process.cwd(), fsModule = fs, logger = console } = {}) {
  const scriptName = path.basename(argv[1] ?? "transform-untitled-ui-classes.mjs")
  const rest = argv.slice(2)

  let prefix
  let write = false
  const targets = []
  for (let i = 0; i < rest.length; i++) {
    const arg = rest[i]
    if (arg === "--write") write = true
    else if (arg === "--prefix") prefix = rest[++i]
    else if (arg.startsWith("--prefix=")) prefix = arg.slice("--prefix=".length)
    else targets.push(arg)
  }

  if (targets.length === 0) {
    logger.error(`Usage: ${scriptName} <file-or-dir...> [--prefix <p>] [--write]`)
    return 1
  }

  let files
  try {
    files = collectFiles(targets, { cwd, fsModule, logger })
  } catch {
    return 1
  }
  if (files.length === 0) {
    logger.log("No matching files found.")
    return 0
  }

  let changed = 0
  for (const filePath of files) {
    if (transformFile(filePath, { prefix, write, fsModule })) changed++
  }

  if (write) {
    logger.log(`Transformed Untitled UI colour classes in ${changed}/${files.length} file(s).`)
  } else {
    logger.log(`Dry run: ${changed}/${files.length} file(s) would change. Pass --write to apply.`)
  }
  return 0
}

// Run as CLI when invoked directly (not when imported by tests).
if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(new URL(import.meta.url).pathname)) {
  process.exit(runCli())
}
