import postcss from 'postcss'
import {
  rewriteBorderColors,
  type BorderColorResult,
  type ConvertedToken,
  type SkippedToken,
} from './borderColorPostcss'

export type { ConvertedToken, SkippedToken }

export type CssTransformResult = BorderColorResult & { code: string }

/**
 * Rewrites hard-coded primitive border colors to the new semantic border tokens
 * in plain **CSS**, matching CSS custom property references:
 *   `border-color: var(--color-gray-500)` → `border-color: var(--border-secondary)`
 *
 * SCSS `$variable` references are handled by {@link transformScssBorderColors}.
 * Only confident 1:1 mappings in a border context are rewritten; unmapped and
 * alpha/`rgb()` border colors are left untouched and returned in `skipped` for
 * the stage-2 fallback.
 */
export const transformCssBorderColors = (source: string): CssTransformResult => {
  const root = postcss.parse(source)
  const { converted, skipped } = rewriteBorderColors(root, { scss: false })
  return { code: root.toString(), converted, skipped }
}
