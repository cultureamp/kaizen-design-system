---
'@kaizen/components': patch
---

Fix two CSS custom-property references that were missing the `--` prefix (`var(color-purple-800)` and `rgb(var(color-purple-800-rgb), …)`) in ConfirmationModal and the Pagination TruncateIndicator. These were silently invalid — the colours never applied — and also caused strict CSS parsers (e.g. Turbopack) to fail to parse the stylesheet.
