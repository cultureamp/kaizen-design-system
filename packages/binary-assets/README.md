# Kaizen Binary Assets

Binary asset management for Culture Amp's Kaizen Design System.

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

1. Make sure the image exists in the [`kaizen-design-system-assets` repo](https://github.com/cultureamp/kaizen-design-system-assets). If it doesn't, make a PR to add it (ask the Design Systems team for review). Images in this repo will be automatically uploaded to CloudFront and will have a hashed URL to access them.
2. Make sure that the `@cultureamp/kaizen-binary-assets` package is in your repo's `package.json`. This package provides you the `assetUrl` function that translates the path to the file in the `kaizen-design-system-assets` repo into its equivalent CloudFront URL.
3. Import the `index.ts` or `index.scss` file and you can access the image through the `assetUrl`/`asset-url` function:

```js
// JS
import assetUrl from "@cultureamp/kaizen-binary-assets/lib/index.ts";

<SomeComponent image={assetUrl("illustrations/ham.png")} />
```

```scss
// SCSS
@import "~@cultureamp/kaizen-binary-assets/lib/index.scss";

.coolpic {
  background-image: url(asset-url("illustrations/ham.png"));
}
```

## See also

- [cultureamp/kaizen-design-system-assets](https://github.com/cultureamp/kaizen-design-system-assets/)
