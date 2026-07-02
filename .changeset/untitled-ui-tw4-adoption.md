---
'@kaizen/design-tokens': minor
'@kaizen/tailwind': minor
---

Add Untitled UI (UUI) compatibility for Tailwind consumers, layered on top of the existing semantic colour tokens. Everything current consumers use (TW3, TW4-via-`@config`, SCSS, CSS, JS) is unchanged, and authored code keeps using Kaizen's clean class names (`bg-primary`, `fg-primary`).

UUI ships a doubled class form (`bg-bg-primary`, `text-fg-primary`, `border-border-secondary`). Rather than requiring a codemod, Kaizen now recognises those names **at build time** so raw UUI components resolve against Kaizen colours with no consumer action:

- **`@kaizen/tailwind` preset**: each semantic theme map (`backgroundColor`/`textColor`/`borderColor`) now emits both the clean class and the UUI doubled class, pointing at the same semantic var. Foreground keys are exposed under `textColor` so UUI's `text-fg-*` resolves.
- **`@kaizen/design-tokens` — `css/tailwind-v4.css`**: TW4-native (`>=4.1`) `@utility` entrypoint emitting both clean and doubled utilities for pure CSS-first consumers.
- **`@kaizen/design-tokens` — `css/untitled-ui-vars.css`**: aliases UUI's `--color-*` var names to Kaizen semantic vars for UUI code that references vars directly.

Both class forms resolve to the same `var(--<token>)`, so the semantic-var indirection is preserved — dark mode and the palette flip override the var and every utility repaints without any consumer markup change. All outputs are generated from the same token source (`semanticColorTokens.ts`), so they never drift.
