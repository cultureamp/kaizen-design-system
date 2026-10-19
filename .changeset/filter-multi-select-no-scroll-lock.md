---
'@kaizen/components': patch
---

fix(FilterMultiSelect): stop ResponsiveMenuPopup locking page scroll

The scroll lock set `position: relative` on `body`, which moved a react-aria popover placed above its trigger off-screen. The popup still follows its trigger on scroll, and the list no longer scroll-chains to the page.
