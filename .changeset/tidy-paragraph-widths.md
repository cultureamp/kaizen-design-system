---
'@kaizen/components': patch
---

fix: avoid generating an inline style on LoadingParagraph when width is omitted, allowing the default skeleton and external CSS widths to work under strict CSP. Explicit widths retain their existing inline styles; caller-supplied style props still replace width styling.
