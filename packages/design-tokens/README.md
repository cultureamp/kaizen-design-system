# Kaizen Tokens

Design tokens for all platforms.

## About

Design tokens are named and stored visual design traits, including colors, typography, and animation timings. Design Tokens are the heart of every Design System.

The canonical source of truth is a platform-agnostic JS object, which we transform into several consumable forms. This helps us contribute to & facilitate the maintenance of living style guides. This package defines all the option tokens in Kaizen.

The tokens are exported in multiple forms:

- **JavaScript / TypeScript** — `@kaizen/design-tokens/js` (the source object, including semantic colour tokens).
- **CSS custom properties** — `css/variables.css` (primitives with the semantic colour tokens inlined) and `css/semantic-color.css` (semantic colour tokens only).
- **SCSS variables** — `sass/*`, one entrypoint per category (e.g. `sass/color`, `sass/semantic-color`, `sass/typography`).
- **Less variables** — `less/*` — **deprecated, see [Less](#less-deprecated) below.**

Most consumers should not reach for these forms directly — the **recommended** way to consume tokens is via the [`@kaizen/tailwind`](#tailwind-recommended) preset, which is built on top of them.

> **Note:** the new semantic colour tokens are only published as **CSS custom properties**, **SCSS**, and **JS** — they are **not** emitted as Less variables.

Note that as we employ [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties), when consuming tokens in SASS/LESS you should assume they will contain values such as `var(--color-...)`, rather than concrete values such as `1.5rem` or `#fff`.

## Installation

```sh
pnpm add @kaizen/design-tokens
```

## Usage

**Tailwind is the recommended way to consume tokens** — see [Tailwind](#tailwind-recommended) below. The other forms (CSS variables, SCSS, JS) remain available for cases Tailwind doesn't cover.

Much of this assumes that consuming repos have setup the `KaizenProvider` - refer to the [App Starter guide](/docs/guides-app-starter--docs) for more.

### Tailwind (recommended)

Most Kaizen apps consume tokens through Tailwind, and this is the preferred approach. Add the [`@kaizen/tailwind`](https://github.com/cultureamp/kaizen-design-system/tree/main/packages/tailwind) preset to your Tailwind config:

```js
// tailwind.config.mjs
import { Preset } from '@kaizen/tailwind'

export default {
  content: ['./src/**/*.{ts,tsx}'],
  presets: [Preset],
}
```

Then use the semantic token utility classes directly — `bg-*`, `text-*`, `border-*`, and `fg-*` (foreground / icons):

```jsx
<div className="bg-brand-solid text-primary border-error">…</div>
```

`@kaizen/tailwind` bundles `@kaizen/design-tokens` as a runtime dependency, so you don't need to install it separately for Tailwind. You only need to load its CSS variables once at runtime — `KaizenProvider` handles this, or import it directly:

```js
import '@kaizen/design-tokens/css/variables.css'
```

### SCSS

Import a category entrypoint — one file per category, there is no single "everything" import:

```scss
@import '~@kaizen/design-tokens/sass/semantic-color'; // semantic colour tokens ($bg-*, $text-*)
@import '~@kaizen/design-tokens/sass/color'; // colour primitives ($color-purple-500)
// also: typography, border, spacing, shadow, animation, layout
```

Or use the CSS variables directly (Recommended).

```scss
.myCustomClassName {
  background-color: var(--bg-secondary);
}
```

Read more in [How to use design tokens in SASS](/docs/guides-tokens-how-to-use-design-tokens-in-sass--docs)

### Less (deprecated)

> ⚠️ **Less support is being wound down.** The new semantic colour tokens are **not** published as Less variables. New code should use CSS custom properties (recommended) or SCSS. Existing Less imports still resolve for primitive tokens but will not gain semantic tokens.

```less
@import '~@kaizen/design-tokens/less/[color/layout/spacing/typography]';
```

### JavaScript

```jsx
import { tokens } from '@kaizen/design-tokens/js'
```

Read more in [Access tokens via JS](/docs/guides-tokens-access-tokens-via-js--docs)

## Where possible, we keep things unitless.

When adding support for another target the transformation should add the appropriate unit to the artefact. For example, converting typography sizes to Sass/Less should add REM.

### Web

All values in tokens are represented as rem, em or px.

- Use REMs for sizes and spacing.
- Use EMs for media queries.
- Use px for borders.

## Contributing

See [CONTRIBUTING.md](https://github.com/cultureamp/kaizen-design-system/blob/main/CONTRIBUTING.md)
