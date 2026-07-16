import scssSyntax from 'postcss-scss'
import {
  rewriteSemanticColors,
  type ConvertedToken,
  type SemanticColorResult,
  type SkippedToken,
} from './semanticColorPostcss'

export type { ConvertedToken, SkippedToken }

export type ScssTransformResult = SemanticColorResult & { code: string }

/**
 * Rewrites hard-coded primitive colours to the new semantic tokens in **SCSS**,
 * covering both reference styles a `.scss` file can use and selecting the
 * semantic group from the declaration property:
 *   - SCSS variable (Kaizen sass): `color: $color-gray-700` → `$text-secondary`
 *   - CSS custom property:         `background-color: var(--color-blue-500)` → `var(--bg-brand-solid)`
 *
 * When a semantic `$*` variable is introduced, the
 * `@kaizen/design-tokens/sass/semantic-color` import is added (matching the
 * file's existing import style) so the output still compiles. Only confident
 * 1:1 mappings within a group are rewritten; unmapped colours and
 * alpha/`rgb()`/`rgba()` usages such as `rgba($color-gray-600-rgb, 0.1)` are
 * left untouched and returned in `skipped` for the stage-2 fallback. Nested
 * rules, `@layer`, and other SCSS constructs are preserved by the SCSS parser.
 */
export const transformScssSemanticColors = (source: string): ScssTransformResult => {
  const root = scssSyntax.parse(source)
  const { converted, skipped } = rewriteSemanticColors(root, { scss: true })
  return { code: root.toString(), converted, skipped }
}
