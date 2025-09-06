# @docs/storybook

## 0.2.5

### Patch Changes

- [#6037](https://github.com/cultureamp/kaizen-design-system/pull/6037) [`a7c596b`](https://github.com/cultureamp/kaizen-design-system/commit/a7c596b8ee9d60e6dd08114777172203c16a2ad9) - Fix broken links to link to v1 snapshot of docs

## 0.2.4

### Patch Changes

- [#5985](https://github.com/cultureamp/kaizen-design-system/pull/5985) [`441ebea`](https://github.com/cultureamp/kaizen-design-system/commit/441ebea1accf8090ea3a52ce9e49c49424bb31f7) - Update internal usage of defaultTheme to tokens object

## 0.2.3

### Patch Changes

- [#6021](https://github.com/cultureamp/kaizen-design-system/pull/6021) [`a4f39ad`](https://github.com/cultureamp/kaizen-design-system/commit/a4f39ada04dc40c7286e7c70d3a69ff14cbfd01e) - Add /libs entry point with react-aria and react-aria-component re-exports prior to v2 release.
  - concurrently export react-aria and react-aria-components to `/libs` and `v3` to allow for shared libraries to migrate to the new entry point.

## 0.2.2

### Patch Changes

- [#5888](https://github.com/cultureamp/kaizen-design-system/pull/5888) [`feed4c3`](https://github.com/cultureamp/kaizen-design-system/commit/feed4c38bcb6aee0d683abb5b52c9f53736cc7a2) - add Split Button Replacement story and docs to Button & Menu sections

## 0.2.1

### Patch Changes

- [#5881](https://github.com/cultureamp/kaizen-design-system/pull/5881) [`e7c1ff3`](https://github.com/cultureamp/kaizen-design-system/commit/e7c1ff3a3af92954a3c4c21132ab3594b1412cde) - Deprecation notices and JSDoc comments for all v2 changes

## 0.2.0

### Minor Changes

- [#5552](https://github.com/cultureamp/kaizen-design-system/pull/5552) [`fd29d3d`](https://github.com/cultureamp/kaizen-design-system/commit/fd29d3d2967221c79537e2f7b6c6e9c7a492baf2) - Upgrade packages to support React 19
  - Update all peer dependencies to support 18-19 range
  - Update react-day-picker to v9
    - this changes some UX (for the better) when using active ranges
    - the dom structure has changed and may require test and css updates
  - Some dependencies have their peerDeps altered to allow 19, these will eventually be removed

  _Note_ updating to this version of kaizen will not force you onto react 19 it'll continue to use 18 until you upgrade the consuming app

## 0.1.2

### Patch Changes

- [#5661](https://github.com/cultureamp/kaizen-design-system/pull/5661) [`cae08f6`](https://github.com/cultureamp/kaizen-design-system/commit/cae08f65598b2db937afb196e037e903c3292680) - Update client side routing docs to point to >= next-services@4.6.0 as the easy path to adopt

## 0.1.1

### Patch Changes

- [#5484](https://github.com/cultureamp/kaizen-design-system/pull/5484) [`9fcad6b`](https://github.com/cultureamp/kaizen-design-system/commit/9fcad6b33f159252cbcd19f918a8f2680a9c4a68) - Dep updates

## 0.1.0

### Minor Changes

- [#5502](https://github.com/cultureamp/kaizen-design-system/pull/5502) [`65fbb77`](https://github.com/cultureamp/kaizen-design-system/commit/65fbb777d23d5226232502898371bb16ae87639b) - Add Link component
  - Adds Link component, stories, and documentation

## 0.0.5

### Patch Changes

- [#5498](https://github.com/cultureamp/kaizen-design-system/pull/5498) [`c1ea1de`](https://github.com/cultureamp/kaizen-design-system/commit/c1ea1de895d4c66b1a1b18c0d3084c4fc228d2dc) - Overriding transient dependency @storybook/react-vite package to fix issue

## 0.0.4

### Patch Changes

- [#5391](https://github.com/cultureamp/kaizen-design-system/pull/5391) [`d180512`](https://github.com/cultureamp/kaizen-design-system/commit/d180512e29cc1078d05fda28feed24926242e7e2) - Deps updates and type component fixes for RC MenuItem and Tab
  - Update deps
  - Update RC MenuItem and Tab child render to fix types issues after upgrade to typescript 5.7.3 upgrade
  - Update test-runner to use imported Page type from Playwright to reflect updated dep
  - Update Badge duplicate color declaration

## 0.0.3

### Patch Changes

- [#5127](https://github.com/cultureamp/kaizen-design-system/pull/5127) [`839243db981f262347cc1556b00212ab46e4f75b`](https://github.com/cultureamp/kaizen-design-system/commit/839243db981f262347cc1556b00212ab46e4f75b) - Dep updates

## 0.0.2

### Patch Changes

- [#5056](https://github.com/cultureamp/kaizen-design-system/pull/5056) [`f60b8ee3dfcd03553dd36f6efb440e9841971bb0`](https://github.com/cultureamp/kaizen-design-system/commit/f60b8ee3dfcd03553dd36f6efb440e9841971bb0) - Dep updates

## 0.0.1

### Patch Changes

- [#4962](https://github.com/cultureamp/kaizen-design-system/pull/4962) [`6665db9cd111222213d4a264146b6707a2ccb1c3`](https://github.com/cultureamp/kaizen-design-system/commit/6665db9cd111222213d4a264146b6707a2ccb1c3) - Dep updates (all dev dependencies)
