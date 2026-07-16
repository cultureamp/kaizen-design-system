import postcss from 'postcss'
import {
  COLOR_VAR_REFERENCE,
  PRIMITIVE_TO_SEMANTIC,
  SCSS_COLOR_VAR_REFERENCE,
  groupForProperty,
  hasAlphaColorUsage,
  referencesPrimitiveColor,
} from './semanticTokenMap'

/**
 * Shared postcss engine for the CSS and SCSS semantic-colour transformers. Both
 * public transformers ({@link transformCssSemanticColors},
 * {@link transformScssSemanticColors}) parse with their own syntax and delegate
 * declaration rewriting here so the group-context rules, confident mapping, and
 * skip/report behaviour stay identical across CSS and SCSS.
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

export type SemanticColorResult = {
  converted: ConvertedToken[]
  skipped: SkippedToken[]
}

/** Path to the semantic sass partial that defines the `$bg-*`/`$text-*`/`$fg-*`/`$border-*` variables. */
const SEMANTIC_SASS_MODULE = '@kaizen/design-tokens/sass/semantic-color'

/**
 * Ensures the semantic sass partial is imported once a semantic variable has
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
    if (atRule.params.includes('design-tokens/sass/semantic-color')) alreadyImported = true
    if (!kaizenImport && atRule.params.includes('design-tokens/sass/')) kaizenImport = atRule
  })

  if (alreadyImported) return

  if (kaizenImport) {
    const params = kaizenImport.params.replace(
      /(design-tokens\/sass\/)[a-z-]+/i,
      `$1semantic-color`,
    )
    // Clone the existing import's own-line formatting so the addition sits on its
    // own line rather than being appended to the source import.
    kaizenImport.cloneAfter({ params, raws: { ...kaizenImport.raws, before: '\n' } })
    return
  }

  root.prepend(postcss.atRule({ name: 'import', params: `'${SEMANTIC_SASS_MODULE}'` }))
}

/**
 * Walks every declaration in `root`, rewriting hard-coded primitive colours to
 * the new semantic tokens for the group the declaration's property targets
 * (background / text / foreground / border — see {@link groupForProperty}).
 * When `scss` is true, SCSS `$color-*` variables are also rewritten and the
 * semantic sass import is injected if needed.
 *
 * Only confident 1:1 mappings within a group are rewritten (see
 * {@link PRIMITIVE_TO_SEMANTIC}). Unmapped primitives *within a recognised
 * group*, and alpha/`rgb()`/`rgba()` usages, are left untouched and returned in
 * `skipped` for the stage-2 fallback. Colour references in properties with no
 * confident group (e.g. `box-shadow`, `outline-color`) are left untouched and
 * NOT reported — they are out of scope for this codemod.
 */
export const rewriteSemanticColors = (
  root: postcss.Root,
  { scss = false }: { scss?: boolean } = {},
): SemanticColorResult => {
  const converted: ConvertedToken[] = []
  const skipped: SkippedToken[] = []
  let introducedScssSemantic = false

  root.walkDecls((decl) => {
    if (!referencesPrimitiveColor(decl.value)) return

    const group = groupForProperty(decl.prop)
    if (!group) return // property has no confident semantic group — out of scope

    const line = decl.source?.start?.line ?? 0
    const map = PRIMITIVE_TO_SEMANTIC[group]

    // Alpha / rgb() usages are solid-color-only in the semantic set — flag for a
    // design decision (stage 2) instead of guessing, and don't touch the value.
    if (hasAlphaColorUsage(decl.value)) {
      skipped.push({ line, property: decl.prop, value: decl.value.trim() })
      return
    }

    // CSS custom property references: var(--color-X) → var(--<semantic>).
    let value = decl.value.replace(COLOR_VAR_REFERENCE, (match, primitive: string) => {
      const semantic = map[primitive]
      if (semantic) {
        const replacement = `var(--${semantic})`
        converted.push({ line, property: decl.prop, from: match, to: replacement })
        return replacement
      }
      skipped.push({ line, property: decl.prop, value: match })
      return match
    })

    // SCSS variable references: $color-X → $<semantic> (SCSS files only).
    if (scss) {
      value = value.replace(SCSS_COLOR_VAR_REFERENCE, (match, primitive: string) => {
        const semantic = map[primitive]
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
