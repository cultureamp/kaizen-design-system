---
'@kaizen/design-tokens': major
'@kaizen/components': major
'@kaizen/tailwind': major
---

### New colors for components and tokens exposed to consumers

**Breaking change!**

TL;DR: Color palette updated to OKLCH format with expanded 12-step scales.
Legacy color names remapped (e.g., `purple-800` → `purple-950`, `gray-*` →
`grey-warm-*`/`grey-cool-*`). RGB variants removed - use
`oklch(from $color l c h / alpha)` for transparency. Run migration script: `node scripts/migrate-colors.mjs [path]`.

#### In detail

This breaking change updates the Kaizen color palette, applying new color values to @kaizen/components, and exposing these new values via the @kaizen/design-tokens and @kaizen/tailwind packages.

This breaking change includes:

- Refreshed color values to more closely match Culture Amp's current visual brand.
- Moved previously-available colors to numbers that more accurately reflect their brightness (e.g. the equivalent of `blue-100` in the old palette is now `blue-050`).
- New colors specified in the OKLCH color space to make better use of the capabilities of modern displays.
- Gray palette split into separate warm and cool gray color families
- Newly introduced cyan, lime, and pink color families
- All color families now include a consistent set of 12 brightness steps
- `-rgb` color tokens no longer exposed for use in defining CSS `rgba()` values; instead, consumers should use CSS relative colors to add an alpha channel to the plain color tokens (e.g. `rgba($color-purple-800-rgb, 0.7)` → `oklch(from $color-purple-950 l c h / 0.7)`).
