/**
 * Confident primitive → semantic colour-token mappings for the four semantic
 * groups (`background`, `text`, `foreground`, `border`).
 *
 * Source of truth: `packages/design-tokens/src/js/semanticColorTokens.ts`. That
 * file maps a semantic token → the primitive it paints with; here we mirror the
 * *mapped* (non-`null`) entries per group and **invert** them (primitive →
 * semantic) because the codemod rewrites hard-coded primitives to the new
 * semantic token.
 *
 * The mirror is duplicated here (rather than imported) so the codemod has no
 * runtime dependency on `@kaizen/design-tokens` when run in a consumer repo —
 * matching the sibling `migrateBorderColorsToSemanticTokens` codemod.
 * `semanticTokenMap.spec.ts` asserts this mirror never drifts from the source.
 *
 * ### Why some primitives are intentionally absent
 * A primitive is only a *confident* migration target if it maps to exactly ONE
 * semantic token within its group. When a primitive backs several tokens in the
 * same group (e.g. `gray-200` → both `bg-secondary` and `bg-secondary_hover`,
 * `white` → both `bg-primary` and `bg-overlay`, `purple-800` → four `fg-*`
 * tokens) there is no 1:1 mapping, so it is dropped by {@link invertGroup} and
 * the codemod skips + reports it for the `/semantic-colours-migration` stage-2
 * fallback rather than guessing. `null` (unmapped) tokens are omitted entirely.
 */

export type SemanticGroup = 'background' | 'text' | 'foreground' | 'border'

/**
 * semantic token name → primitive colour-token name, mirrored verbatim from the
 * non-`null` entries of `semanticColorTokens.ts` (values reduced to the bare
 * primitive, e.g. `var(--color-gray-600)` → `gray-600`).
 */
export const SEMANTIC_TO_PRIMITIVE: Record<SemanticGroup, Record<string, string>> = {
  background: {
    'bg-primary': 'white',
    'bg-secondary': 'gray-200',
    'bg-secondary_hover': 'gray-200',
    'bg-tertiary': 'gray-300',
    'bg-primary-solid': 'purple-800',
    'bg-secondary-solid': 'gray-600',
    'bg-overlay': 'white',
    'bg-brand-primary': 'blue-100',
    'bg-brand-secondary': 'blue-200',
    'bg-brand-solid': 'blue-500',
    'bg-brand-solid_hover': 'blue-700',
    'bg-error-primary': 'red-100',
    'bg-error-secondary': 'red-300',
    'bg-error-solid': 'red-400',
    'bg-success-primary': 'green-100',
    'bg-success-secondary': 'green-300',
    'bg-success-solid': 'green-600',
    'bg-warning-primary': 'yellow-100',
    'bg-warning-secondary': 'yellow-400',
    'bg-warning-solid': 'yellow-400',
  },
  text: {
    'text-primary': 'purple-800',
    'text-secondary': 'gray-700',
    'text-tertiary': 'gray-600',
    'text-quaternary': 'gray-550',
    'text-placeholder': 'gray-550',
    'text-secondary_on-brand': 'white',
    'text-quaternary_on-brand': 'white',
    'text-brand-primary': 'blue-500',
    'text-brand-secondary': 'blue-700',
    'text-brand-secondary_hover': 'blue-600',
    'text-error-primary': 'red-600',
    'text-success-primary': 'green-600',
  },
  foreground: {
    'fg-primary': 'purple-800',
    'fg-secondary': 'purple-800',
    'fg-secondary_hover': 'purple-800',
    'fg-tertiary': 'gray-500',
    'fg-quaternary': 'purple-800',
    'fg-white': 'white',
    'fg-brand-primary': 'blue-500',
    'fg-error-primary': 'red-500',
    'fg-success-primary': 'green-500',
    'fg-success-secondary': 'green-400',
    'fg-warning-primary': 'yellow-700',
  },
  border: {
    'border-primary': 'gray-600',
    'border-secondary': 'gray-500',
    'border-secondary_alt': 'gray-200',
    'border-tertiary': 'gray-300',
    'border-brand': 'blue-500',
    'border-brand_alt': 'blue-300',
    'border-error': 'red-500',
    'border-error_subtle': 'red-300',
  },
}

/**
 * Inverts one group's `semantic → primitive` table into `primitive → semantic`,
 * dropping any primitive that backs more than one semantic token in the group
 * (no confident 1:1 mapping). Those collisions are handled by stage 2.
 */
const invertGroup = (entries: Record<string, string>): Record<string, string> => {
  const primitiveCounts = new Map<string, number>()
  for (const primitive of Object.values(entries)) {
    primitiveCounts.set(primitive, (primitiveCounts.get(primitive) ?? 0) + 1)
  }

  const inverted: Record<string, string> = {}
  for (const [semantic, primitive] of Object.entries(entries)) {
    if (primitiveCounts.get(primitive) === 1) inverted[primitive] = semantic
  }
  return inverted
}

/**
 * Confident `primitive → semantic token name` map per group, derived from
 * {@link SEMANTIC_TO_PRIMITIVE}. The semantic token name already carries its
 * group prefix (`bg-`, `text-`, `fg-`, `border-`) so it doubles as the CSS var
 * name, the SCSS variable, and the Tailwind utility.
 */
export const PRIMITIVE_TO_SEMANTIC: Record<SemanticGroup, Record<string, string>> = {
  background: invertGroup(SEMANTIC_TO_PRIMITIVE.background),
  text: invertGroup(SEMANTIC_TO_PRIMITIVE.text),
  foreground: invertGroup(SEMANTIC_TO_PRIMITIVE.foreground),
  border: invertGroup(SEMANTIC_TO_PRIMITIVE.border),
}

/**
 * Matches CSS properties that can carry a border *color*: the `border`
 * shorthand, per-side/logical shorthands, and the explicit `*-color` longhands.
 * Excludes `border-width`/`border-style`/`border-radius`/`border-image`, which
 * never hold a color.
 */
const BORDER_COLOR_PROPERTY =
  /^border(-(top|right|bottom|left|block|inline)(-(start|end))?)?(-color)?$/

/**
 * Resolves the semantic group a *custom property* (`--foo`) targets from a
 * keyword in its name (e.g. `--icon-fill-color` → foreground). Returns `null`
 * when no group can be inferred, so the codemod leaves it for stage 2 rather
 * than guessing.
 */
const groupForCustomProperty = (prop: string): SemanticGroup | null => {
  if (prop.includes('border')) return 'border'
  if (prop.includes('background') || /(^|--|-)bg(-|$)/.test(prop)) return 'background'
  if (prop.includes('text')) return 'text'
  if (
    prop.includes('icon') ||
    prop.includes('fill') ||
    prop.includes('stroke') ||
    /(^|--|-)fg(-|$)/.test(prop)
  ) {
    return 'foreground'
  }
  return null
}

/**
 * Resolves which semantic group a CSS/SCSS declaration property targets:
 *   - `color` → text
 *   - `background` / `background-color` → background
 *   - `fill` / `stroke` → foreground (icons / glyphs)
 *   - border color properties → border
 *   - custom properties → inferred from the name (see {@link groupForCustomProperty})
 *
 * Returns `null` for properties with no confident group (e.g. `box-shadow`,
 * `outline-color`); the codemod then leaves the declaration untouched.
 */
export const groupForProperty = (property: string): SemanticGroup | null => {
  const prop = property.trim().toLowerCase()
  if (prop.startsWith('--')) return groupForCustomProperty(prop)
  if (BORDER_COLOR_PROPERTY.test(prop)) return 'border'
  if (prop === 'color') return 'text'
  if (prop === 'background' || prop === 'background-color') return 'background'
  if (prop === 'fill' || prop === 'stroke') return 'foreground'
  return null
}

/** Matches a `var(--color-<name>)` reference and captures the primitive name. */
export const COLOR_VAR_REFERENCE = /var\(\s*--color-([a-z0-9-]+)\s*\)/gi

/**
 * Matches a solid `$color-<name>` SCSS variable reference (the form consumers
 * get from `@import '@kaizen/design-tokens/sass/color'`) and captures the
 * primitive name. Matches shade-less primitives (`$color-white`) as well as
 * `$color-gray-600`. Deliberately does NOT match the `-rgb`/`-id` companions
 * (`$color-gray-600-rgb`) — the trailing `(?![\w-])` stops before the `-rgb`.
 * A leading `\w`/`.`/`-` is disallowed so namespaced (`color.$color-…`) refs are
 * left for stage 2 rather than mis-rewritten.
 */
export const SCSS_COLOR_VAR_REFERENCE = /(?<![\w.-])\$color-([a-z]+(?:-\d+)?)(?![\w-])/gi

/** True when a value references a primitive color (CSS var or SCSS var). */
export const referencesPrimitiveColor = (value: string): boolean =>
  /var\(\s*--color-/i.test(value) || /(?<![\w.-])\$color-/i.test(value)

/**
 * True when a value paints with alpha/`rgb()`/`rgba()` (e.g.
 * `rgba($color-gray-600-rgb, 0.1)`). Semantic tokens are solid colors, so these
 * have no confident 1:1 mapping and must be reported for a design decision
 * (stage 2) rather than auto-converted.
 */
export const hasAlphaColorUsage = (value: string): boolean =>
  /\brgba?\(/i.test(value) || /\$color-[a-z0-9-]+-rgb\b/i.test(value)

/** Tailwind utility roots and the semantic group each targets. */
export const UTILITY_ROOT_GROUP: Record<string, SemanticGroup> = {
  bg: 'background',
  text: 'text',
  fill: 'foreground',
  stroke: 'foreground',
  border: 'border',
}

/** Primitive colour families used to recognise a Tailwind *color* utility. */
const COLOR_FAMILIES = 'gray|blue|red|green|yellow|orange|purple|teal|pink|white|black'

/** Tailwind utility roots, alternation-ready. */
const UTILITY_ROOTS = Object.keys(UTILITY_ROOT_GROUP).join('|')

/**
 * Matches a named color utility and captures `[root, primitive]`, e.g.
 * `bg-gray-600` → `['bg', 'gray-600']`, `fill-white` → `['fill', 'white']`.
 */
export const NAMED_COLOR_UTILITY = new RegExp(
  `^(${UTILITY_ROOTS})-((?:${COLOR_FAMILIES})(?:-\\d+)?)$`,
  'i',
)

/**
 * Matches an arbitrary-value color utility and captures `[root, primitive]`,
 * e.g. `bg-[var(--color-gray-600)]` → `['bg', 'gray-600']`.
 */
export const ARBITRARY_COLOR_UTILITY = new RegExp(
  `^(${UTILITY_ROOTS})-\\[var\\(\\s*--color-([a-z0-9-]+)\\s*\\)\\]$`,
  'i',
)

/**
 * Heuristic for *any* Tailwind color utility (named or arbitrary) so unmapped
 * ones can be reported (skipped) rather than silently ignored. Excludes
 * structural utilities (`border-2`, `bg-cover`, `text-sm`, `stroke-2`) and
 * already-semantic classes (`bg-secondary-solid`).
 */
export const COLOR_UTILITY = new RegExp(
  `^(${UTILITY_ROOTS})-(?:${COLOR_FAMILIES})(?:-\\d+)?$|^(${UTILITY_ROOTS})-\\[.+\\]$`,
  'i',
)
