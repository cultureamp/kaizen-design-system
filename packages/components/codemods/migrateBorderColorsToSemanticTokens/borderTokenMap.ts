/**
 * Confident primitive → semantic border-token mappings for the border codemod.
 *
 * Source of truth: `packages/design-tokens/src/js/semanticColorTokens.ts` (the
 * `border` group). That file maps a semantic token → the primitive it paints
 * with; here we invert it (primitive → semantic) because the codemod rewrites
 * hard-coded primitives to the new semantic token.
 *
 * We ONLY include mappings that are safe to apply automatically in a border
 * context. Ambiguous or unmapped primitives (e.g. `gray-400`, `blue-400`,
 * `white`, and any `yellow`/`orange`/`green`/`purple` used on a border) have no
 * confident 1:1 semantic border token, so they are intentionally omitted — the
 * codemod skips and reports them for the `/semantic-border-migration` stage-2
 * fallback rather than guessing.
 */

/** primitive color-token name (e.g. `gray-500`) → semantic border-token name (e.g. `border-secondary`) */
export const BORDER_COLOR_MAP: Record<string, string> = {
  'gray-600': 'border-primary',
  'gray-500': 'border-secondary',
  'gray-200': 'border-secondary_alt',
  'gray-300': 'border-tertiary',
  'blue-500': 'border-brand',
  'blue-300': 'border-brand_alt',
  'red-500': 'border-error',
  'red-300': 'border-error_subtle',
}

/**
 * Tailwind border utility (e.g. `border-gray-500`) → semantic border utility
 * (e.g. `border-secondary`). Derived from {@link BORDER_COLOR_MAP}; the semantic
 * token name already starts with `border-`, so it doubles as the utility class.
 */
export const TAILWIND_BORDER_MAP: Record<string, string> = Object.fromEntries(
  Object.entries(BORDER_COLOR_MAP).map(([primitive, semantic]) => [
    `border-${primitive}`,
    semantic,
  ]),
)

/**
 * Matches CSS properties that can carry a border *color*: the `border`
 * shorthand, per-side/logical shorthands, and the explicit `*-color` longhands.
 * Deliberately excludes `border-width`/`border-style`/`border-radius`/
 * `border-image`/`border-spacing`/`border-collapse`, which never hold a color.
 */
const BORDER_COLOR_PROPERTY =
  /^border(-(top|right|bottom|left|block|inline)(-(start|end))?)?(-color)?$/

/**
 * True when a declaration property can hold a border color — either a standard
 * border color property, or a custom property whose name mentions `border`
 * (e.g. `--border-color`, `--border-hover-color`).
 */
export const isBorderColorProperty = (property: string): boolean => {
  const prop = property.trim().toLowerCase()
  if (prop.startsWith('--')) return prop.includes('border')
  return BORDER_COLOR_PROPERTY.test(prop)
}

/** Matches a `var(--color-<name>)` reference and captures the primitive name. */
export const COLOR_VAR_REFERENCE = /var\(\s*--color-([a-z0-9-]+)\s*\)/gi

/**
 * Matches a solid `$color-<family>-<shade>` SCSS variable reference (the form
 * consumers get from `@import '@kaizen/design-tokens/sass/color'`) and captures
 * the primitive name. Deliberately does NOT match the `-rgb`/`-id` companions
 * (`$color-gray-600-rgb`) — those are alpha/identifier helpers with no solid
 * semantic border equivalent. A leading `\w`/`.`/`-` is disallowed so namespaced
 * (`color.$color-…`) refs are left for stage 2 rather than mis-rewritten.
 */
export const SCSS_COLOR_VAR_REFERENCE = /(?<![\w.-])\$color-([a-z]+-\d+)(?![\w-])/gi

/** True when a border value references a primitive color (CSS var or SCSS var). */
export const referencesPrimitiveColor = (value: string): boolean =>
  /var\(\s*--color-/i.test(value) || /(?<![\w.-])\$color-/i.test(value)

/**
 * True when a border value paints with alpha/`rgb()`/`rgba()` (e.g.
 * `rgba($color-gray-600-rgb, 0.1)`). Semantic border tokens are solid colors, so
 * these have no confident 1:1 mapping and must be reported for a design decision
 * (stage 2) rather than auto-converted.
 */
export const hasAlphaColorUsage = (value: string): boolean =>
  /\brgba?\(/i.test(value) || /\$color-[a-z0-9-]+-rgb\b/i.test(value)

/**
 * Heuristic for a Tailwind border-*color* utility so unmapped ones can be
 * reported (skipped) rather than silently ignored. Matches
 * `border-<family>-<shade>` and arbitrary values like `border-[var(--color-…)]`.
 * Excludes structural utilities (`border-2`, `border-t`, `border-solid`) and
 * already-semantic classes (`border-primary`).
 */
export const TAILWIND_BORDER_COLOR_UTILITY =
  /^border-(gray|blue|red|green|yellow|orange|purple|teal|pink|white|black)(-\d+)?$|^border-\[.+\]$/i
