---
'@kaizen/components': minor
---

Add a `contentInset` prop to `TitleBlock` for aligning its content column with the page content beneath it.

`TitleBlock` insets its content column by a hardcoded 24px above 1080px, while `Content` uses `--layout-content-side-margin` (72px). Any page stacking the two therefore has a 48px edge mismatch between 1080px and 1536px viewport widths, and `TitleBlock` previously had no way for a consumer to influence it.

`contentInset` accepts a CSS length and sets `--titleblock-content-inset`. Pass `var(--layout-content-side-margin)` to line the two up:

```tsx
<TitleBlock title="Reports" contentInset="var(--layout-content-side-margin)" />
```

The default is unchanged at 24px, so existing consumers render identically.

Note that `TitleBlock` used `margin: 0 $layout-content-side-margin` until #6352, which replaced it with the hardcoded 24px — the changeset for that PR described tab navigation changes and did not mention insets, so the divergence from `Content` may have been unintended. This change only adds the escape hatch; it does not assume which value is correct.
