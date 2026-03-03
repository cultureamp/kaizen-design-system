---
'@kaizen/components': patch
---

fix: Content component - use existing spacing token instead of undefined custom variable

The Content component's SCSS to CSS conversion in v2.4.0 introduced a bug where it referenced an undefined CSS variable `--content-margin-width-on-medium-and-small` for margins on medium/small viewports (≤1079px). This fix replaces the undefined variable with the existing `--spacing-12` design token (12px), ensuring margins are applied correctly across all viewport sizes.
