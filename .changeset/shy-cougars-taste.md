---
'@kaizen/design-tokens': major
---

Remove legacy exports from design tokens in line with KAIO v2 release

- Remove ThemeManager, ThemeProvider and exported theme variable and utils.
  - Tokens can either be a via the `tokens` object from `@kaizen/design-tokens/js` or as a CSS variable. See README or the app-starter guide.
