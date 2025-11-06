---
'@kaizen/components': minor
---

Add container query support

Changes:

- Converted TileBlock to use container queries
- Added `container-type: inline-size` and `min-height: 100vh` to `body` in the `_reset.css`

NOTE: If you are manually setting a `background-color` on the `body` element in your app,
this may cause Chromatic regressions due to how `background-color` propagates to the `html`
element by default. As soon as we add the `container-type` style to `body`, this no longer
happens and the `background-color` is only applied to the `body` element. We have tried
to mitigate this by setting `min-height: 100vh` to the `body` element to make the
`background-color` take up the whole viewport.
