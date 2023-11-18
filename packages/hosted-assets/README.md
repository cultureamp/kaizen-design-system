# Kaizen Hosted Assets

Hosted assets used in Culture Amp's Kaizen Design System.

## API

### `assetUrl(path)`

Returns the full URL of the asset at `path` managed by the
`kaizen-design-system-assets` service.

**TypeScript/JavaScript**
```ts
assetUrl("some/blob.png") // -> "https://<origin>/some/blob.png"
```

**SCSS**
```scss
asset-url("some/blob.png") // -> "https://<origin>/some/blob.png"
```

## If you want to use an image

1. Make sure the image exists in the [`kaizen-design-system-assets` repo](https://github.com/cultureamp/kaizen-design-system-assets). If it doesn't, make a PR to add it (ask the Design Systems team for review). Images in this repo will be automatically uploaded and made available via a CloudFront distribution.
2. Make sure that the `@kaizen/hosted-assets` package is in your repo's `package.json`. This package provides you the `assetUrl` function that translates the path to the file in the `kaizen-design-system-assets` repo into its equivalent CloudFront URL.
3. Import the `@kaizen/hosted-assets` package and you can access the image through the `assetUrl`/`asset-url` function:

```js
import { assetUrl } from "@kaizen/hosted-assets";

<SomeComponent
  image={assetUrl("illustrations/plant-based-ham-substitute.png")}
/>
```

```scss
// SCSS
@import "~@kaizen/hosted-assets/index";

.coolpic {
  background-image: url(asset-url(
    "illustrations/plant-based-ham-substitute.png"
  ));
}
```

## See also

- [cultureamp/kaizen-design-system-assets](https://github.com/cultureamp/kaizen-design-system-assets/)
