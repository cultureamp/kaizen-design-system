# @kaizen/package-bundler

## 1.1.7

### Patch Changes

- [#5127](https://github.com/cultureamp/kaizen-design-system/pull/5127) [`839243db981f262347cc1556b00212ab46e4f75b`](https://github.com/cultureamp/kaizen-design-system/commit/839243db981f262347cc1556b00212ab46e4f75b) - Dep updates

## 1.1.6

### Patch Changes

- [#5056](https://github.com/cultureamp/kaizen-design-system/pull/5056) [`f60b8ee3dfcd03553dd36f6efb440e9841971bb0`](https://github.com/cultureamp/kaizen-design-system/commit/f60b8ee3dfcd03553dd36f6efb440e9841971bb0) - Dep updates

## 1.1.5

### Patch Changes

- [#5020](https://github.com/cultureamp/kaizen-design-system/pull/5020) [`517a83b45eb4e83293af813ce01ee171cecbeeaf`](https://github.com/cultureamp/kaizen-design-system/commit/517a83b45eb4e83293af813ce01ee171cecbeeaf) - Allow postcss-preset-env v10 in peerDependencies.

  Version 10 contains no breaking changes relevant to Culture Amp usage. [See the changelog for more details](https://github.com/csstools/postcss-plugins/wiki/PostCSS-Preset-Env-10).
  Version 9 is still allowed.

## 1.1.4

### Patch Changes

- [#4871](https://github.com/cultureamp/kaizen-design-system/pull/4871) [`1158d54eef5ea459603fcebecdc54d13934d7faa`](https://github.com/cultureamp/kaizen-design-system/commit/1158d54eef5ea459603fcebecdc54d13934d7faa) - update deps

## 1.1.3

### Patch Changes

- [#4864](https://github.com/cultureamp/kaizen-design-system/pull/4864) [`725f8f7c0ba53a4345f38cd7b1d757c53a21604e`](https://github.com/cultureamp/kaizen-design-system/commit/725f8f7c0ba53a4345f38cd7b1d757c53a21604e) - Updated package bundler deps

## 1.1.2

### Patch Changes

- [#4755](https://github.com/cultureamp/kaizen-design-system/pull/4755) [`e220aeb123ec99c2f2ac11eb4960d1a351ff5161`](https://github.com/cultureamp/kaizen-design-system/commit/e220aeb123ec99c2f2ac11eb4960d1a351ff5161) - Update `@rollup/plugin-commonjs` to ^26.0.1

## 1.1.1

### Patch Changes

- [#4745](https://github.com/cultureamp/kaizen-design-system/pull/4745) [`1b17a65773afe0f3b9598c5e148379aab8c86875`](https://github.com/cultureamp/kaizen-design-system/commit/1b17a65773afe0f3b9598c5e148379aab8c86875) - Update package-bundler dep `@babel/plugin-transform-react-pure-annotations` to ^7.24.7

- [#4745](https://github.com/cultureamp/kaizen-design-system/pull/4745) [`1b17a65773afe0f3b9598c5e148379aab8c86875`](https://github.com/cultureamp/kaizen-design-system/commit/1b17a65773afe0f3b9598c5e148379aab8c86875) - Update package-bundler dep `ts-patch` to ^3.2.0

## 1.1.0

### Minor Changes

- [#4728](https://github.com/cultureamp/kaizen-design-system/pull/4728) [`d1ae4eb748b2f8a2ebd76aae10efb694632575c2`](https://github.com/cultureamp/kaizen-design-system/commit/d1ae4eb748b2f8a2ebd76aae10efb694632575c2) - Remove style injection

## 1.0.2

### Patch Changes

- [#4709](https://github.com/cultureamp/kaizen-design-system/pull/4709) [`18cf2df4684317750440356d5cc3f2383f8fd148`](https://github.com/cultureamp/kaizen-design-system/commit/18cf2df4684317750440356d5cc3f2383f8fd148) - update dependency @babel/plugin-transform-react-pure-annotations to ^7.24.6

- [#4679](https://github.com/cultureamp/kaizen-design-system/pull/4679) [`12bf8bc110523f5aaad377925a6c0c317dd8cc51`](https://github.com/cultureamp/kaizen-design-system/commit/12bf8bc110523f5aaad377925a6c0c317dd8cc51) - Add `noEmit` to package bundler `tsconfig.base.json` and include types in dist.

- [#4676](https://github.com/cultureamp/kaizen-design-system/pull/4676) [`e146c105ef167da87a430a33a4326d70415f1afa`](https://github.com/cultureamp/kaizen-design-system/commit/e146c105ef167da87a430a33a4326d70415f1afa) - Update peerdep `postcss-preset-env` to `^9.5.14`

## 1.0.1

### Patch Changes

- [#4705](https://github.com/cultureamp/kaizen-design-system/pull/4705) [`c8e6004e0b252a65e07badffa05e255a98b87be8`](https://github.com/cultureamp/kaizen-design-system/commit/c8e6004e0b252a65e07badffa05e255a98b87be8) - Fix style injection by removing PURE comment.

  Builds in Storybook and Next fail when the comment exists.

## 1.0.0

### Major Changes

- [#4656](https://github.com/cultureamp/kaizen-design-system/pull/4656) [`c3baac698e421c46d08afd41161d07511022e46e`](https://github.com/cultureamp/kaizen-design-system/commit/c3baac698e421c46d08afd41161d07511022e46e) - A package that bundles packages.

  Adds bundler for shared UIs with support for (S)CSS modules and Tailwind.
