---
'@kaizen/components': patch
---

`Tabs` no longer scrolls the selected tab into view on mount. Scrolling now only happens when the selection changes via user interaction, so rendering `Tabs` below the fold no longer scrolls the page on load.
