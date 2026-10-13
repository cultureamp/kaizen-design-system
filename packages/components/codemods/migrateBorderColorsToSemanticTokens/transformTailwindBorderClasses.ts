import ts from 'typescript'
import {
  BORDER_COLOR_MAP,
  TAILWIND_BORDER_COLOR_UTILITY,
  TAILWIND_BORDER_MAP,
} from './borderTokenMap'

export type ConvertedClass = { line: number; from: string; to: string }
export type SkippedClass = { line: number; token: string }

export type TailwindTransformResult = {
  code: string
  converted: ConvertedClass[]
  skipped: SkippedClass[]
}

/** JSX attributes whose string value is a class list. */
const CLASSNAME_ATTRIBUTES = new Set(['className', 'class'])
/** Call expressions whose string arguments are class names. */
const CLASSNAME_FUNCTIONS = new Set(['clsx', 'classnames', 'classNames', 'cx', 'cn'])
/** Matches an arbitrary-value border utility: `border-[var(--color-<name>)]`. */
const ARBITRARY_BORDER_VALUE = /^border-\[var\(\s*--color-([a-z0-9-]+)\s*\)\]$/i

type TokenResult =
  | { status: 'converted'; token: string }
  | { status: 'skipped' }
  | { status: 'unchanged' }

/**
 * Transforms a single class token, preserving any variant chain (`hover:`,
 * `md:`, or a namespace prefix like `EP:`) and any configured utility prefix
 * (Tailwind `prefix`, like `goals-`). Only the utility portion is matched
 * against the border maps; the prefix/variant is re-attached verbatim.
 */
const transformToken = (token: string, prefix: string): TokenResult => {
  // Split off the variant chain: everything up to and including the last colon.
  // This handles stacked variants (`hover:md:`) and colon-style prefixes (`EP:`).
  const lastColon = token.lastIndexOf(':')
  const variant = lastColon >= 0 ? token.slice(0, lastColon + 1) : ''
  let utility = lastColon >= 0 ? token.slice(lastColon + 1) : token

  // Strip a configured dash-style utility prefix (e.g. `goals-`) so we can match
  // the bare utility, then re-apply it. Colon-style prefixes are already handled
  // by the variant split above.
  let utilityPrefix = ''
  if (prefix && !prefix.endsWith(':') && utility.startsWith(prefix)) {
    utilityPrefix = prefix
    utility = utility.slice(prefix.length)
  }

  const rebuild = (mapped: string): string => `${variant}${utilityPrefix}${mapped}`

  // Named utility, e.g. `border-gray-500` → `border-secondary`.
  const mapped = TAILWIND_BORDER_MAP[utility]
  if (mapped) return { status: 'converted', token: rebuild(mapped) }

  // Arbitrary value, e.g. `border-[var(--color-gray-500)]` → `border-secondary`.
  const arbitrary = ARBITRARY_BORDER_VALUE.exec(utility)
  if (arbitrary) {
    const semantic = BORDER_COLOR_MAP[arbitrary[1]]
    if (semantic) return { status: 'converted', token: rebuild(semantic) }
    return { status: 'skipped' }
  }

  // A border color utility we can't confidently map — report for stage 2.
  if (TAILWIND_BORDER_COLOR_UTILITY.test(utility)) return { status: 'skipped' }

  return { status: 'unchanged' }
}

const transformClassValue = (
  text: string,
  prefix: string,
  line: number,
  converted: ConvertedClass[],
  skipped: SkippedClass[],
): { value: string; changed: boolean } => {
  let changed = false
  const value = text
    .split(/(\s+)/) // keep whitespace separators so spacing is preserved
    .map((part) => {
      if (part.trim() === '') return part
      const result = transformToken(part, prefix)
      if (result.status === 'converted') {
        converted.push({ line, from: part, to: result.token })
        changed = true
        return result.token
      }
      if (result.status === 'skipped') skipped.push({ line, token: part })
      return part
    })
    .join('')
  return { value, changed }
}

/**
 * Rewrites Tailwind border color utilities in `className`/`class` attributes and
 * `clsx`-style calls to the new semantic border utilities, honouring a consumer
 * Tailwind `prefix` (e.g. `goals-` or `EP:`).
 *
 * Edits are spliced back into the original source by node position, so file
 * formatting is otherwise preserved (run prettier afterwards regardless).
 * Dynamic/computed class names and unmapped border colors are left untouched;
 * unmapped border colors are returned in `skipped` for the stage-2 fallback.
 */
export const transformTailwindBorderClasses = (
  source: string,
  {
    prefix = '',
    scriptKind = ts.ScriptKind.TSX,
  }: { prefix?: string; scriptKind?: ts.ScriptKind } = {},
): TailwindTransformResult => {
  const sourceFile = ts.createSourceFile(
    'temp.tsx',
    source,
    ts.ScriptTarget.Latest,
    true,
    scriptKind,
  )

  const converted: ConvertedClass[] = []
  const skipped: SkippedClass[] = []
  // Inner-text edits keyed by start position to avoid processing a literal twice
  // (e.g. a clsx call that also lives inside a className attribute).
  const edits = new Map<number, { start: number; end: number; text: string }>()

  const collectFromStringLiteral = (node: ts.StringLiteralLike): void => {
    const start = node.getStart(sourceFile)
    if (edits.has(start)) return
    const line = sourceFile.getLineAndCharacterOfPosition(start).line + 1
    const { value, changed } = transformClassValue(node.text, prefix, line, converted, skipped)
    if (changed) {
      // Replace the inner text only, leaving the surrounding quotes/backticks intact.
      edits.set(start, { start: start + 1, end: node.getEnd() - 1, text: value })
    } else {
      edits.set(start, { start, end: start, text: '' }) // mark as seen, no-op
    }
  }

  const collectStrings = (node: ts.Node): void => {
    if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
      collectFromStringLiteral(node)
      return
    }
    ts.forEachChild(node, collectStrings)
  }

  const visit = (node: ts.Node): void => {
    if (ts.isJsxAttribute(node) && CLASSNAME_ATTRIBUTES.has(node.name.getText(sourceFile))) {
      if (node.initializer) collectStrings(node.initializer)
    }
    if (ts.isCallExpression(node) && CLASSNAME_FUNCTIONS.has(node.expression.getText(sourceFile))) {
      node.arguments.forEach(collectStrings)
    }
    ts.forEachChild(node, visit)
  }
  visit(sourceFile)

  // Apply edits back-to-front so earlier offsets stay valid.
  const realEdits = Array.from(edits.values())
    .filter((edit) => edit.end > edit.start)
    .sort((a, b) => b.start - a.start)

  let code = source
  for (const edit of realEdits) {
    code = code.slice(0, edit.start) + edit.text + code.slice(edit.end)
  }

  return { code, converted, skipped }
}
