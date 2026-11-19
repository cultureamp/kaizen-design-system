---
'@kaizen/components': patch
---

Fix Menu dropdown not returning focus to trigger button when pressing Escape

Previously, pressing Escape to close a Menu would lose focus because the focus restoration was targeting the positioning wrapper element instead of the actual button. This affected components like the Export button in TitleBlock.

No changes required for consumers - this is a bug fix.
