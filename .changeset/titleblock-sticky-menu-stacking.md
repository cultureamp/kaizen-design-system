---
'@kaizen/components': patch
---

fix(TitleBlock): stop sticky TitleBlock menus rendering behind page content

Raises the sticky row below the separator from `z-index: 0` to `z-index: 4`, so its menu dropdowns paint above later page content while still scrolling under the sticky title row.
