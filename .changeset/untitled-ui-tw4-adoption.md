---
'@kaizen/design-tokens': minor
'@kaizen/tailwind': minor
---

Add an Untitled UI (UUI) adoption path for Tailwind 4 consumers, layered on top of the existing semantic colour tokens. Everything current consumers use (TW3, TW4-via-`@config`, SCSS, CSS, JS) is unchanged.

- **`@kaizen/tailwind` — UUI class transform**: `scripts/transform-untitled-ui-classes.mjs` (`transform:untitled-ui`) rewrites UUI's doubled class form to Kaizen's clean form on adoption — `bg-bg-*`→`bg-*`, `text-text-*`→`text-*`, `border-border-*`→`border-*`, `text-fg-*`→`fg-*` — preserving variants, `!important` and any Tailwind prefix.
- **`@kaizen/design-tokens` — `css/untitled-ui-vars.css`**: aliases UUI's `--color-*` var names to Kaizen semantic vars (`--color-bg-primary: var(--bg-primary);`) so UUI code referencing vars directly resolves to Kaizen values.
- **`@kaizen/design-tokens` — `css/tailwind-v4.css`**: TW4-native (`>=4.1`) `@utility` entrypoint so pure CSS-first consumers get Kaizen's clean semantic utilities without the `@config` bridge.

All three files are generated from the same token source (`semanticColorTokens.ts`), so they never drift. Verified compiling on Tailwind 4.2.4.

The `@utility` blocks intentionally point each class at its **semantic var** (`border-color: var(--border-brand_alt)`), not the underlying primitive. This indirection is the seam that future theming relies on: the class name and var name stay stable, while the primitive the var resolves to changes per context. Dark mode (and the palette flip) will override the semantic var — e.g. `[data-color-mode="dark"] { --border-brand_alt: var(--color-blue-300); }` — so the same utility repaints without any change to consumer markup. Baking the primitive into the utility would remove that override point.
