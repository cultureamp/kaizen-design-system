---
'@kaizen/components': minor
---

Wrap component styles in a CSS Cascade Layer

To unblock adoption of Tailwind CSS v4 in consuming apps, Kaizen component styles must be wrapped in `@layer components` that can be given lower priority than Tailwind's new `@layer utilities`.

Ideally this would not be necessary, and consuming apps could simply import Kaizen's styles into a layer:

```
@import url(~@kaizen/components/dist/styles.css) layer(components);
```

Unfortunately, this syntax is [not supported](https://github.com/vercel/next.js/issues/55763#issuecomment-2791540126) by the outdated version of webpack css-loader that is contained in Next.js. Until it is, we must publish styles for packages like Kaizen with a layer provided.

### Isn't this a breaking change?

Although technically this lowers the priority of Kaizen's component styles below any consuming apps' "unlayered" styles, regardless of selector specificity or source order, we believe that Kaizen styles are already output before app styles in apps' CSS bundles to ensure app styles take priority; therefore, this should have no effect on the relative priority of styles in consuming apps.
