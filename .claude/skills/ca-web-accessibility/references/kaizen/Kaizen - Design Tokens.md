# Kaizen — Design Tokens

In a Kaizen project, **all colour comes from `@kaizen/design-tokens`** — never hardcode hex. Tokens keep contrast and theming consistent and make the colour-contrast check (`references/colour-contrast/Colour Contrast Reference.md`) meaningful. This file gives the naming convention, consumption paths, and the real token values you feed into a contrast palette.

## How to consume tokens — pick by project setup

**If the consumer app uses Tailwind → use `@kaizen/tailwind` (this is the expected path).** Do NOT reach for raw `@kaizen/design-tokens` custom properties or hardcoded hex in a Tailwind app.

- Setup (already done in Culture Amp frontend-template apps): `pnpm add -D @kaizen/tailwind`, then in `tailwind.config.js` set `presets: [Preset]` (from `@kaizen/tailwind`), `corePlugins: { preflight: false }`, `important: '#root'`, and add the `@tailwind base/components/utilities` directives.
- The preset **replaces** Tailwind's default palette with Kaizen tokens (it imports `tokens` from `@kaizen/design-tokens/js` under the hood — so it's a thin layer over the same values below).
- **Colour classes** use standard Tailwind prefixes on the Kaizen scale: `bg-blue-400`, `text-red-500`, `border-gray-300`, `text-gray-600`, `border-purple-100`, etc. The names look like default Tailwind (`blue-500`) but resolve to Kaizen hex values (e.g. `blue-400` = `#008bd6`, `blue-600` = `#004970`).
- **Focus ring:** the preset exposes `border-focus-ring` (= `blue-600` `#004970`) and `border-default-color` — use `border-focus-ring` for custom focusable controls rather than inventing a colour.
- **Typography classes:** `text-heading-1` … `text-heading-6`, `text-display`, `text-paragraph`, `text-data-lg`; `font-family-heading`/`-paragraph`/`-data`. Breakpoints `md`/`lg` come from tokens.
- **Rule for this repo's audits:** any inline `style={{ color: '#...' }}` or hardcoded hex in a Tailwind app is a finding — replace with the matching Kaizen Tailwind class (or a token custom property).

**If the consumer app is not Tailwind → CSS custom properties.**

- **Custom-property pattern:** `--color-{hue}-{step}`, steps `100`–`800` (not every hue has every step), plus `--color-white`, `--color-black`, and data-viz `--data-viz-{name}`. Ship via `@kaizen/components/dist/styles.css`.
- Each token in `color.json` is stored as a `var()` string with a hex fallback, e.g. `var(--color-blue-500, #0168b3)`. Sibling keys: `-id` (bare property name), `-rgb` / `-rgb-id` (comma-separated RGB triples, for `rgba()`).
- Importing from `@kaizen/design-tokens` (JS/TS) yields the `var(--…, #hex)` string, not a raw hex. SCSS/Less outputs are legacy-only.

**Semantic intents** (primary / success / warning / danger / neutral) are a conceptual layer in the docs — they are **not** named keys in `color.json`. The only intent-named tokens present are the data-viz `favorable`/`unfavorable` pair below. Map meaning to hues yourself (e.g. green = favorable, red = unfavorable) and confirm contrast.

## Real token values (from `packages/design-tokens/tokens/color.json`)

Use these when building a contrast palette JSON. Values are the current hex fallbacks.

**Blue** (100→700): `#e6f6ff · #bde2f5 · #73c0e8 · #008bd6 · #0168b3 · #004970 · #003157`
**Gray** (100→600 only): `#f9f9f9 · #f4f4f5 · #eaeaec · #cdcdd0 · #878792 · #524e56`
**Green** (100→700): `#e8f8f4 · #c4ede2 · #8fdbc7 · #5dcaad · #3f9a86 · #2c7d67 · #22594a`
**Red** (100→700): `#fdeaee · #f9c2cb · #f597a8 · #e0707d · #c93b55 · #a82433 · #6c1e20`
**Yellow** (100→700): `#fff9e4 · #ffeeb3 · #ffe36e · #ffca4d · #ffb600 · #c68600 · #876400`
**Orange** (100→700): `#fff0e8 · #ffd1b9 · #ffb08a · #ff9461 · #e96c2f · #b74302 · #903c00`
**Purple** (100→800): `#f4edf8 · #dfc9ea · #c9a5dd · #ae67b1 · #844587 · #5f3361 · #4a234d · #2f2438`
**White** `#ffffff` · **Black** `#000000`

**Data-viz intents:** `--data-viz-favorable` `#7dd5bd` · `--data-viz-unfavorable` `#e68d97`

## Contrast cautions with these tokens

Real ratios against white `#ffffff` (normal-text threshold 4.5:1, large-text/UI threshold 3:1) — verify with `scripts/check-colour-contrast.js`, do not eyeball:

- **Body text on white:** use `gray-600 #524e56` or darker; the mid-steps (`gray-500 #878792`) fail 4.5:1 for normal text.
- **Blue text/links on white:** `blue-500 #0168b3` and `blue-600 #004970` pass normal text; `blue-400 #008bd6` is borderline — use for large text/UI only, verify.
- **Data-viz intents are light** (`#7dd5bd`, `#e68d97`): these are fills for charts, **not** text colours — they fail text contrast on white. Never convey favorable/unfavorable by these fills alone; pair with text/icon/pattern.
- **Focus indicators:** Kaizen's *raw* `color.json` has no focus-named token — focus rings on Kaizen components come from React Aria + component CSS. But the **`@kaizen/tailwind` preset does expose `border-focus-ring`** (= `blue-600` `#004970`). For a custom focusable control, use `border-focus-ring` (Tailwind) or `blue-600` and verify ≥ 3:1 against its background.

## Reduced motion

There is **no `prefers-reduced-motion` token** and no global enforcement, though motion durations/easings are tokenised (`animation.json`). Handle reduced motion per-component:

- Hook: `useMediaQueries` (`@kaizen/components` utils) accepts custom queries, e.g. `useMediaQueries({ prefersReducedMotion: '(prefers-reduced-motion: reduce)' })`. Built-in queries are breakpoints only (medium 768px, large 1080px) — reduced-motion must be passed explicitly.
- Reference implementation: `Illustration/subcomponents/VideoPlayer/VideoPlayer.tsx` gates autoplay via `window.matchMedia('(prefers-reduced-motion: reduce)')`.
- **Rule:** any animation/autoplay you add must respect `prefers-reduced-motion: reduce` — gate it via the hook or a `@media (prefers-reduced-motion: reduce)` block.

## Workflow

1. Pick a Kaizen token for every colour (text, background, border, icon, state) — a `@kaizen/tailwind` class in a Tailwind app, else a custom property. Never an inline hex.
2. Build a palette JSON of foreground/background pairs using the hex values above (see `assets/kaizen-palette.json`).
3. Run `node scripts/check-colour-contrast.js <palette>.json`; adjust to a darker/lighter step until every pair passes. Never ship colour meaning conveyed by hue alone.
