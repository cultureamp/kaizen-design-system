import scssSyntax from 'postcss-scss'
import {
  rewriteBorderColors,
  type BorderColorResult,
  type ConvertedToken,
  type SkippedToken,
} from './borderColorPostcss'

export type { ConvertedToken, SkippedToken }

export type ScssTransformResult = BorderColorResult & { code: string }

/**
 * Rewrites hard-coded primitive border colors to the new semantic border tokens
 * in **SCSS**, covering both reference styles a `.scss` file can use:
 *   - SCSS variable (Kaizen sass): `border: 1px solid $color-gray-500` → `$border-secondary`
 *   - CSS custom property:         `border-color: var(--color-gray-500)` → `var(--border-secondary)`
 *
 * When a `$border-*` variable is introduced, the `@kaizen/design-tokens/sass/semantic`
 * import is added (matching the file's existing import style) so the output still
 * compiles. Only confident 1:1 mappings in a border context are rewritten;
 * unmapped border colors and alpha/`rgb()`/`rgba()` usages such as
 * `rgba($color-gray-600-rgb, 0.1)` are left untouched and returned in `skipped`
 * for the stage-2 fallback. Nested rules, `@layer`, and other SCSS constructs
 * are preserved by the SCSS parser.
 */
export const transformScssBorderColors = (source: string): ScssTransformResult => {
  const root = scssSyntax.parse(source)
  const { converted, skipped } = rewriteBorderColors(root, { scss: true })
  return { code: root.toString(), converted, skipped }
}
