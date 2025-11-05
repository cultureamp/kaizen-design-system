---
'@kaizen/components': minor
---

Add container query support

Changes:

- Converted TileBlock to use container queries
- Added `container-type: inline-size` to `_reset.css`

NOTE: If you are using a background color on the `body` element this may cause
Chromatic regressions due to CSS containment. We recommend moving this to the
`html` element or adding a `min-height: 100vh` to the `body` element.

**Read more about CSS containment here: https://blog.jim-nielsen.com/2021/propagating-up-in-css/**
