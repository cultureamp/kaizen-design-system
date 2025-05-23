---
'@kaizen/components': minor
---

Wrap component styles in a CSS Cascade Layer

To unblock adoption of Tailwind CSS v4 in consuming apps, Kaizen component styles must be wrapped in `@layer kz-components` that can be given lower priority than Tailwind's new `@layer utilities`.

Ideally this would not be necessary, and consuming apps could simply import Kaizen's styles into a layer:

```
@import url(~@kaizen/components/dist/styles.css) layer(components);
```

Unfortunately, this syntax is [not supported](https://github.com/vercel/next.js/issues/55763#issuecomment-2791540126) by the outdated version of webpack css-loader that is contained in Next.js. Until it is, we must publish styles for packages like Kaizen with a layer provided.

#### Isn't this a breaking change?

**In projects using Tailwind v4, you will need to add the `kz-components` layer to your @layer declaring your layer order.** It should come before your app's `utilities` layer, and before the layers of any other packages that may also be using Kaizen. For example, in **performance-review-cycles-ui**:

```
@layer tokens, normalize, reset, properties, theme, base, kz-components, components, prc-shared-ui, utilities;
```

**In Next.js projects, this version of Kaizen requires @cultureamp/next-config 3.4.0 or later.**

The increased use of `@layer` in this release triggers a bug in the CSS minifier in Next.js 14, which causes the `@layer` statement at the top of Kaizen's stylesheet to be moved to a different place in the CSS output, breaking the layer order. Next.js 15.0.3 fixed this, but as of this release most of our apps are still on Next.js 14.x. We have therefore applied the fix from Next.js 15 to Next.js 14 in [@cultureamp/next-config 3.4.0](https://github.com/cultureamp/frontend-foundations/releases/tag/%40cultureamp%2Fnext-config%403.4.0).

Also, this release technically lowers the priority of Kaizen's component styles below any consuming apps' "unlayered" styles, regardless of selector specificity or source order. We believe that Kaizen styles are already output before app styles in apps' CSS bundles to ensure app styles take priority; therefore, this should have no effect on the relative priority of styles in consuming apps. Still, you should probably pay close attention to any visual diffs reported by Chromatic when applying this update.
