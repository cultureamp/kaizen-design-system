---
'@kaizen/design-tokens': minor
'@kaizen/tailwind': minor
'@kaizen/components': patch
---

feat: add semantic colour tokens (background, text, foreground, border) and expand the gray primitive ramp with `gray-550` and `gray-700`. Exposes the tokens as CSS variables (inlined into `variables.css`), SCSS, JS exports, and Tailwind preset utilities.

`@kaizen/tailwind` depends on `@kaizen/design-tokens` (a regular runtime dependency, installed transitively): the semantic Tailwind utilities emit `var(--<token>)` references whose definitions live in `@kaizen/design-tokens`. Consumers using the Tailwind preset do not need to install `@kaizen/design-tokens` themselves — they only need to load its CSS variables once at runtime (handled by `KaizenProvider`).
