---
"@kaizen/package-bundler": major
---

Move TypeScript types generation to rollup as the separate step using `tsc` was not resolving aliases with `typescript-transform-paths@3.5.2`.

BREAKING CHANGES:
- `@kaizen/package-bundler/tsconfig.dist.json` has been removed
  - Remove this from `extends` within your `tsconfig.dist.json`
- `@kaizen/package-bundler/tsconfig.types.json`
  - Delete your `tsconfig.types.json` (no longer required)
- `rollupConfig` no longer accepts the `alias` arg as aliases are now automatically resolved based on your `tsconfig.json` paths
  - Remove `alias` defined within your `rollup.config.mjs`
