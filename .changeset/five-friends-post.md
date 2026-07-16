---
'@kaizen/components': patch
---

`Collapsible` now accepts a `ref` that exposes a `ButtonRef` (`{ focus }`) for programmatically focusing the toggle button. Use this to restore focus after async operations instead of relying on `querySelector`. `ButtonRef` is also now exported from `@kaizen/components` for use in consumer typings.
