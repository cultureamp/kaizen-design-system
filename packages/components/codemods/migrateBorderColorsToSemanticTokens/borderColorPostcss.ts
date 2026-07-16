import postcss from 'postcss'
import {
  BORDER_COLOR_MAP,
  COLOR_VAR_REFERENCE,
  SCSS_COLOR_VAR_REFERENCE,
  hasAlphaColorUsage,
  isBorderColorProperty,
  referencesPrimitiveColor,
} from './borderTokenMap'

/**
 * Shared postcss engine for the CSS and SCSS border-color transformers. Both
 * public transformers ({@link transformCssBorderColors},
 * {@link transformScssBorderColors}) parse with their own syntax and delegate
 * the declaration rewriting here so the border-context rules, confident mapping,
 * and skip/report behaviour stay identical across CSS and SCSS.
 */

export type ConvertedToken = {
  line: number
  property: string
  from: string
  to: string
}

export type SkippedToken = {
  line: number
  property: string
  value: string
}

export type BorderColorResult = {
  converted: ConvertedToken[]
  skipped: SkippedToken[]
}

/** Path to the semantic sass partial that defines the `$border-*` variables. */
const SEMANTIC_SASS_MODULE = '@kaizen/design-tokens/sass/semantic'

/**
 * Ensures the semantic sass partial is imported once a `$border-*` variable has
 * been introduced, otherwise the rewritten SCSS would reference an undefined
 * variable and fail to compile. Clones the style (quote + `~` prefix) of an
 * existing `@kaizen/design-tokens/sass/*` import so the added line matches the
 * file's convention; falls back to a plain `@import` when no kaizen import
 * exists. No-op when the semantic partial is already imported/used.
 */
const ensureSemanticImport = (root: postcss.Root): void => {
  let kaizenImport: postcss.AtRule | undefined
  let alreadyImported = false

  root.walkAtRules((atRule) => {
    if (atRule.name !== 'import' && atRule.name !== 'use') return
    if (atRule.params.includes('design-tokens/sass/semantic')) alreadyImported = true
    if (!kaizenImport && atRule.params.includes('design-tokens/sass/')) kaizenImport = atRule
  })

  if (alreadyImported) return

  if (kaizenImport) {
    const params = kaizenImport.params.replace(/(design-tokens\/sass\/)[a-z-]+/i, `$1semantic`)
    // Clone the existing import's own-line formatting so the addition sits on its
    // own line rather than being appended to the source import.
    kaizenImport.cloneAfter({ params, raws: { ...kaizenImport.raws, before: '\n' } })
    return
  }

  root.prepend(postcss.atRule({ name: 'import', params: `'${SEMANTIC_SASS_MODULE}'` }))
}

/**
 * Walks every declaration in `root`, rewriting hard-coded primitive border
 * colors to the new semantic border tokens. When `scss` is true, SCSS
 * `$color-*` variables are also rewritten (to `$border-*`) and the semantic sass
 * import is injected if needed.
 *
 * Only confident 1:1 mappings in a border context are rewritten (see
 * {@link BORDER_COLOR_MAP}). Unmapped border colors, and alpha/`rgb()`/`rgba()`
 * usages such as `rgba($color-gray-600-rgb, 0.1)`, are left untouched and
 * returned in `skipped` for the stage-2 fallback. Non-border usages of the same
 * primitives (e.g. `background: var(--color-gray-500)`) are never touched.
 */
export const rewriteBorderColors = (
  root: postcss.Root,
  { scss = false }: { scss?: boolean } = {},
): BorderColorResult => {
  const converted: ConvertedToken[] = []
  const skipped: SkippedToken[] = []
  let introducedScssSemantic = false

  root.walkDecls((decl) => {
    if (!isBorderColorProperty(decl.prop)) return
    if (!referencesPrimitiveColor(decl.value)) return

    const line = decl.source?.start?.line ?? 0

    // Alpha / rgb() usages are solid-color-only in the semantic set — flag for a
    // design decision (stage 2) instead of guessing, and don't touch the value.
    if (hasAlphaColorUsage(decl.value)) {
      skipped.push({ line, property: decl.prop, value: decl.value.trim() })
      return
    }

    // CSS custom property references: var(--color-X) → var(--border-Y).
    let value = decl.value.replace(COLOR_VAR_REFERENCE, (match, primitive: string) => {
      const semantic = BORDER_COLOR_MAP[primitive]
      if (semantic) {
        const replacement = `var(--${semantic})`
        converted.push({ line, property: decl.prop, from: match, to: replacement })
        return replacement
      }
      skipped.push({ line, property: decl.prop, value: match })
      return match
    })

    // SCSS variable references: $color-X → $border-Y (SCSS files only).
    if (scss) {
      value = value.replace(SCSS_COLOR_VAR_REFERENCE, (match, primitive: string) => {
        const semantic = BORDER_COLOR_MAP[primitive]
        if (semantic) {
          const replacement = `$${semantic}`
          converted.push({ line, property: decl.prop, from: match, to: replacement })
          introducedScssSemantic = true
          return replacement
        }
        skipped.push({ line, property: decl.prop, value: match })
        return match
      })
    }

    decl.value = value
  })

  if (introducedScssSemantic) ensureSemanticImport(root)

  return { converted, skipped }
}
