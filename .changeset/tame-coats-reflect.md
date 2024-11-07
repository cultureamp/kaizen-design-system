---
"@kaizen/components": patch
---

Fix visual stacking issues from container query on FilterBar

- Menu v1, Tooltip v1, and all Filter* components now portal to document.body by default
- FilterMultiSelect now positions itself explicitly instead of relying on position in DOM
