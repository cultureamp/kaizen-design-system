---
"@kaizen/components": patch
---

Change `FilterPopover` to position `absolute` instead of `fixed`.
The `fixed` strategy causes contents to disappear off a page (not scrollable) when it goes beyond the window boundary.
