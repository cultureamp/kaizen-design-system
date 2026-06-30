---
'@kaizen/design-tokens': minor
'@kaizen/tailwind': minor
'@kaizen/components': patch
---

feat: add semantic colour tokens (background, text, foreground, border) and expand the gray primitive ramp with `gray-550` and `gray-700`. Exposes the tokens as CSS variables (inlined into `variables.css`), SCSS, JS exports, and Tailwind preset utilities.

`@kaizen/tailwind` now declares `@kaizen/design-tokens` as a peer dependency: the semantic Tailwind utilities emit `var(--<token>)` references whose definitions live in `@kaizen/design-tokens`, so the two must be upgraded together. A mismatched/old `@kaizen/design-tokens` now surfaces a peer-dependency warning at install instead of silently rendering the wrong colours.
