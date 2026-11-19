---
'@kaizen/components': patch
---

fix(TitleBlock): stop sticky TitleBlock menus rendering behind page content

Removes the `z-index: 0` on the sticky row below the separator, which created a stacking context that trapped its menu dropdowns.
