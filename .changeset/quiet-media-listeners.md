---
'@kaizen/components': patch
---

fix(useMediaQueries): remove media query listeners on unmount

Listeners were added with `capture: true` but removed without it, so cleanup never matched and every unmount left them attached.
