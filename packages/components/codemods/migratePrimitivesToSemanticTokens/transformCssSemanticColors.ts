import postcss from 'postcss'
import {
  rewriteSemanticColors,
  type ConvertedToken,
  type SemanticColorResult,
  type SkippedToken,
} from './semanticColorPostcss'

export type { ConvertedToken, SkippedToken }

export type CssTransformResult = SemanticColorResult & { code: string }

/**
 * Rewrites hard-coded primitive colours to the new semantic tokens in plain
 * **CSS**, matching CSS custom property references and selecting the semantic
 * group from the declaration property:
 *   `color: var(--color-gray-700)`            → `color: var(--text-secondary)`
 *   `background-color: var(--color-blue-500)` → `background-color: var(--bg-brand-solid)`
 *   `fill: var(--color-red-500)`              → `fill: var(--fg-error-primary)`
 *   `border-color: var(--color-gray-500)`     → `border-color: var(--border-secondary)`
 *
 * SCSS `$variable` references are handled by {@link transformScssSemanticColors}.
 * Only confident 1:1 mappings within a group are rewritten; unmapped and
 * alpha/`rgb()` colours are left untouched and returned in `skipped` for the
 * stage-2 fallback.
 */
export const transformCssSemanticColors = (source: string): CssTransformResult => {
  const root = postcss.parse(source)
  const { converted, skipped } = rewriteSemanticColors(root, { scss: false })
  return { code: root.toString(), converted, skipped }
}
