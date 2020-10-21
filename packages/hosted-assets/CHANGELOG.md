# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.0.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/hosted-assets@1.0.1...@kaizen/hosted-assets@1.0.2) (2020-09-28)

**Note:** Version bump only for package @kaizen/hosted-assets





## [1.0.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/hosted-assets@1.0.0...@kaizen/hosted-assets@1.0.1) (2020-02-25)

**Note:** Version bump only for package @kaizen/hosted-assets





# 1.0.0 (2020-01-22)


### chore

* Re-release as `@kaizen/hosted-assets` ([#237](https://github.com/cultureamp/kaizen-design-system/issues/237)) ([98dac8c](https://github.com/cultureamp/kaizen-design-system/commit/98dac8c))


### BREAKING CHANGES

* Export from the module root

Updates the package API to export the asset URL functions from the root of the module, e.g.:

```js
// TS/JS
import { assetUrl } from "@kaizen/hosted-assets";

<SomeComponent
  image={assetUrl("illustrations/plant-based-ham-substitute.png")}
/>
```

```scss
// SCSS
@import "~@kaizen/hosted-assets";

.coolpic {
  background-image: url(asset-url(
    "illustrations/plant-based-ham-substitute.png"
  ));
}
```





## [1.2.1](https://github.com/cultureamp/kaizen-design-system/compare/@cultureamp/kaizen-binary-assets@1.2.0...@cultureamp/kaizen-binary-assets@1.2.1) (2019-12-19)

**Note:** Version bump only for package @cultureamp/kaizen-binary-assets





# [1.2.0](https://github.com/cultureamp/kaizen-design-system/compare/@cultureamp/kaizen-binary-assets@1.1.0...@cultureamp/kaizen-binary-assets@1.2.0) (2019-11-07)


### Features

* Add HTTP2 support to the binary assets service ([#94](https://github.com/cultureamp/kaizen-design-system/issues/94)) ([b35f4d7](https://github.com/cultureamp/kaizen-design-system/commit/b35f4d7))





# [1.1.0](https://github.com/cultureamp/kaizen-design-system/compare/@cultureamp/kaizen-binary-assets@1.0.1...@cultureamp/kaizen-binary-assets@1.1.0) (2019-10-29)


### Features

* Add scss variable and function ([#90](https://github.com/cultureamp/kaizen-design-system/issues/90)) ([256dda9](https://github.com/cultureamp/kaizen-design-system/commit/256dda9))





## [1.0.1](https://github.com/cultureamp/kaizen-design-system/compare/@cultureamp/kaizen-binary-assets@1.0.0...@cultureamp/kaizen-binary-assets@1.0.1) (2019-10-21)

**Note:** Version bump only for package @cultureamp/kaizen-binary-assets





# 1.0.0 (2019-10-21)


### chore

* Add binary-assets package ([#63](https://github.com/cultureamp/kaizen-design-system/issues/63)) ([88e9a90](https://github.com/cultureamp/kaizen-design-system/commit/88e9a90151e8f20bce47aa62e651789cfa6ac1f4))


### BREAKING CHANGES

* Initial release. :tada:
