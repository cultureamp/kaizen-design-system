---
"@kaizen/components": patch
---

Fix support for tree shaking by:
- Adding `babel-plugin-pure-static-props` plugin to Rollup config
- Adding `@babel/pugin-transform-react-pure-annotations` plugin to Rollup config
- Updating components to be tree-shakeable, more detail on [Confluence](https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3320647009/Tree+Shaking)

Addtionally:
- Replaced `esbuild` with `babel` to streamline tooling
- Added a ci check for tree shaking via [Agadoo](https://github.com/Rich-Harris/agadoo)
- Moved `react-intl` to peerDep
- Removed `ThemeManager` in favour of `theme` prop on `KaizenProvider` (simplified to remove unused code)
