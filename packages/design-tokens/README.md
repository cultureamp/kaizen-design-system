# Kaizen Tokens

Design tokens for all platforms.

## About

Design tokens are named and stored visual design traits, including colors, typography, and animation timings. Design Tokens are the heart of every Design System.

The tokens represented here are platform-agnostic (JS object), as this will help us contribute to & facilitate the maintenance of living style guides. This package defines all the option tokens in Kaizen.

In its current state this package supports Sass and Less variables, generated from a JS tokens file.

Note that as we employ [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties), when consuming tokens in SASS/LESS you should assume they will contain values such as `var(--color-...)`, rather than concrete values such as `1.5rem` or `#fff`.

## Installation

```sh
pnpm add @kaizen/design-tokens
```

## Usage

Much of this assumes that consuming repos have setup the `KaizenProvider` - refer to the [app starter guide](https://cultureamp.design/?path=/docs/guides-app-starter--docs) for more.

### SCSS

```scss
@import '~@kaizen/design-tokens/sass/[color/depth/layout/spacing/typography]';
```

Or use the CSS variables directly (Recommended).

```scss
.myCustomClassName {
  background-color: vars(--color-gray-100);
}
```

Read more in [how-to-use-with-sass](./_docs/pages/how-to-use-with-sass.mdx)

### Less

```less
@import '~@kaizen/design-tokens/less/[color/depth/layout/spacing/typography]';
```

### JavaScript

```jsx
import { tokens } from '@kaizen/design-tokens/js'
```

Read more in [how-to-use-in-js](./_docs/pages/how-to-use-in-js.mdx)

## Where possible, we keep things unitless.

When adding support for another target the transformation should add the appropriate unit to the artefact. For example, converting typography sizes to Sass/Less should add REM.

### Web

All values in tokens are represented as rem, em or px.

- Use REMs for sizes and spacing.
- Use EMs for media queries.
- Use px for borders.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md)
