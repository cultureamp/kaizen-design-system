/**
 * Semantic colour tokens — Untitled UI (UUI) aligned naming.
 *
 * Naming follows UUI verbatim (`bg-brand-solid`, `text-primary_on-brand`,
 * `border-error_subtle`) so Figma and code share one vocabulary. The `_hover` /
 * `_alt` / `_on-brand` suffixes use underscores intentionally — part of the UUI
 * name, not separators. Grouped by the surface a token paints: `background`,
 * `text`, `foreground` (icons / glyphs), `border`. When wired to CSS these emit
 * as `--<token>` variables verbatim — no prefix — so the CSS var, Tailwind
 * class, and JS key are the same string (e.g. `bg-brand-solid` →
 * `--bg-brand-solid`, the `bg-brand-solid` Tailwind class, and the
 * `bg-brand-solid` JS key all refer to one thing).
 *
 * VALUES are DRAFT mappings derived from the UUI→Kaizen usage audit (dominant
 * primitive per token). Most reference existing `--color-*` primitives. The
 * `text-*` hierarchy was signed off by Lua Cortes (2026-06-29): it now maps to
 * solid `gray-550`/`gray-600`/`gray-700` primitives instead of the old
 * `purple-800` alpha hacks (chosen to land close to the future greycool OKLCH
 * lightness). Caveats:
 *
 *  - `null` = no usage data yet / no confident mapping. Left for design sign-off.
 *  - Tokens marked `ALPHA` in a trailing comment are used in the source at
 *    reduced opacity (e.g. `rgb(--color-purple-800-rgb 0.7)`). Collapsed here to
 *    the BASE primitive; the alpha treatment must be reapplied when wired to CSS.
 *  - Tokens marked `CONFLICT` had split votes — the dominant choice is used; the
 *    runner-up is noted for review.
 *
 * Mappings are not final until signed off with the designer (Lua Cortes).
 */

/** A semantic token value: a primitive reference once mapped, `null` while unmapped. */
export type SemanticColorTokenValue = string | null

export type SemanticColorTokenGroup = Record<string, SemanticColorTokenValue>

export interface SemanticColorTokens {
  background: SemanticColorTokenGroup
  text: SemanticColorTokenGroup
  foreground: SemanticColorTokenGroup
  border: SemanticColorTokenGroup
}

export const semanticColorTokens: SemanticColorTokens = {
  background: {
    'bg-primary': 'var(--color-white)',
    'bg-primary_alt': null,
    'bg-primary_hover': null,
    'bg-secondary': 'var(--color-gray-200)', // CONFLICT: gray-100 also seen; ordering vs bg-secondary_hover (gray-200) needs review
    'bg-secondary_alt': null,
    'bg-secondary_hover': 'var(--color-gray-200)',
    'bg-tertiary': 'var(--color-gray-300)',
    'bg-quaternary': null,
    'bg-primary-solid': 'var(--color-purple-800)', // CONFLICT: purple-700 also seen
    'bg-secondary-solid': 'var(--color-gray-600)', // CONFLICT: gray-500 also seen
    'bg-overlay': 'var(--color-white)', // ALPHA: used as white at 0.1–0.65
    'bg-brand-primary': 'var(--color-blue-100)', // CONFLICT: purple-100 also seen
    'bg-brand-primary_alt': null,
    'bg-brand-secondary': 'var(--color-blue-200)',
    'bg-brand-solid': 'var(--color-blue-500)',
    'bg-brand-solid_hover': 'var(--color-blue-700)', // CONFLICT: blue-600 also seen
    'bg-brand-section': null,
    'bg-brand-section_subtle': null,
    'bg-error-primary': 'var(--color-red-100)',
    'bg-error-secondary': 'var(--color-red-300)',
    'bg-error-solid': 'var(--color-red-400)',
    'bg-error-solid_hover': null,
    'bg-success-primary': 'var(--color-green-100)',
    'bg-success-secondary': 'var(--color-green-300)',
    'bg-success-solid': 'var(--color-green-600)', // CONFLICT: green-400/500 also seen
    'bg-warning-primary': 'var(--color-yellow-100)',
    'bg-warning-secondary': 'var(--color-yellow-400)', // NOTE: same as bg-warning-solid in source
    'bg-warning-solid': 'var(--color-yellow-400)',
  },
  text: {
    'text-primary': 'var(--color-purple-800)', // Lua Cortes (2026-06-29): solid bridge, future greycool #171A1B
    'text-secondary': 'var(--color-gray-700)', // Lua Cortes (2026-06-29): solid bridge replacing purple-800 @0.7–0.8 alpha hack
    'text-secondary_hover': null,
    'text-tertiary': 'var(--color-gray-600)', // Lua Cortes (2026-06-29): solid bridge replacing purple-800 @0.7 alpha hack
    'text-tertiary_hover': null,
    'text-quaternary': 'var(--color-gray-550)', // Lua Cortes (2026-06-29): solid bridge replacing purple-800 @0.3 alpha hack
    'text-placeholder': 'var(--color-gray-550)', // Lua Cortes (2026-06-29): solid bridge replacing purple-800 @0.7 alpha hack
    'text-primary_on-brand': null,
    'text-secondary_on-brand': 'var(--color-white)', // ALPHA: used at 0.8
    'text-tertiary_on-brand': null,
    'text-quaternary_on-brand': 'var(--color-white)', // ALPHA: used at 0.2–0.3
    'text-brand-primary': 'var(--color-blue-500)',
    'text-brand-secondary': 'var(--color-blue-700)',
    'text-brand-secondary_hover': 'var(--color-blue-600)',
    'text-brand-tertiary': null,
    'text-brand-tertiary_alt': null,
    'text-error-primary': 'var(--color-red-600)', // CONFLICT: red-500 also seen
    'text-success-primary': 'var(--color-green-600)', // CONFLICT: green-500 also seen
    'text-warning-primary': null, // doc had no UUI yellow text token
  },
  foreground: {
    'fg-primary': 'var(--color-purple-800)',
    'fg-secondary': 'var(--color-purple-800)', // ALPHA: used at 0.7; gray-600 also seen
    'fg-secondary_hover': 'var(--color-purple-800)',
    'fg-tertiary': 'var(--color-gray-500)', // CONFLICT: purple-800 @0.5 also seen
    'fg-tertiary_hover': null,
    'fg-quaternary': 'var(--color-purple-800)', // ALPHA: used at 0.3
    'fg-quaternary_hover': null,
    'fg-white': 'var(--color-white)',
    'fg-brand-primary': 'var(--color-blue-500)',
    'fg-brand-primary_alt': null,
    'fg-brand-secondary': null,
    'fg-brand-secondary_alt': null,
    'fg-brand-secondary_hover': null,
    'fg-error-primary': 'var(--color-red-500)',
    'fg-error-secondary': null,
    'fg-success-primary': 'var(--color-green-500)',
    'fg-success-secondary': 'var(--color-green-400)',
    'fg-warning-primary': 'var(--color-yellow-700)',
    'fg-warning-secondary': null,
  },
  border: {
    'border-primary': 'var(--color-gray-600)', // CONFLICT: white (dark-surface usage) tied; black also seen
    'border-secondary': 'var(--color-gray-500)', // CONFLICT: gray-400 also seen
    'border-secondary_alt': 'var(--color-gray-200)', // CONFLICT: gray-300 also seen
    'border-tertiary': 'var(--color-gray-300)', // CONFLICT: white @alpha also seen
    'border-brand': 'var(--color-blue-500)',
    'border-brand_alt': 'var(--color-blue-300)', // CONFLICT: blue-400 / purple-400 also seen
    'border-error': 'var(--color-red-500)',
    'border-error_subtle': 'var(--color-red-300)',
  },
}
