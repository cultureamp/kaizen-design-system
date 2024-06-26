# @kaizen/package-bundler

Bundle packages as CJS and ESM with TypeScript types.

ESM code is tree-shakeable.

```sh
pnpm add -D @kaizen/package-bundler
```

## build-shared-ui

For shared UI packages. CSS modules and/or Tailwind will be included in the dist in a single stylesheet (`{PACKAGE_NAME}/dist/styles.css`) to be imported by the consumer.

_Note: If your package extends another shared UI package, you will need to list the other package as a peerDependency and have the end consumer import both stylesheets._

### `package.json`

Add the following to your `package.json`:
```json
"main": "dist/cjs/index.cjs",
"module": "dist/esm/index.mjs",
"types": "dist/types/index.d.ts",
"files": [
  "dist"
],
"sideEffects": [
  "styles.css"
],
"scripts": {
  "build": "pnpm package-bundler build-shared-ui",
}
```

#### Dependencies

```sh
pnpm add -D postcss postcss-preset-env rollup tslib
```

`devDependencies`:
- `postcss`
- `postcss-preset-env`
- `rollup`
- `tslib` (peerDep of `rollup`)
- If using Tailwind:
  - `tailwind`

### Required files

- `postcss.config.js`
- `rollup.config.mjs`
- `tsconfig.json`
- `tsconfig.dist.json`
- `tsconfig.types.json`
- If using Tailwind:
  - `tailwind.config.js`
  - `src/tailwind.css`

### PostCSS

In `postcss.config.js`:
```js
module.exports = {
  plugins: {
    "postcss-import": {},
    cssnano: {},
  },
}
```

If using Tailwind:
```js
module.exports = {
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": "postcss-nesting",
    tailwindcss: {},
    autoprefixer: {},
    cssnano: {},
  },
}
```

### Rollup

In `rollup.config.mjs`:
```ts
import { pluginsSharedUi, rollupConfig } from "@kaizen/package-bundler";

export default rollupConfig({
  // Add extra entrypoints as required
  input: { index: "./src/index.ts" },
  plugins: pluginsSharedUi,
})
```

### tsconfig
```json
// tsconfig.json
{
  "extends": "@kaizen/package-bundler/tsconfig.base.json"
}

// tsconfig.dist.json
{
  "extends": [
    "./tsconfig.json",
    "@kaizen/package-bundler/tsconfig.dist.json"
  ]
}

// tsconfig.types.json
{
  "extends": [
    "./tsconfig.dist.json",
    "@kaizen/package-bundler/tsconfig.types.json"
  ]
}
```

### Tailwind

```sh
pnpm add -D tailwind @kaizen/tailwind
```

Required files:
- `tailwind.config.js`
- `src/tailwind.css`

Follow the [set up guide](../../docs/Tailwind/getting-started.mdx).

As we use PostCSS, ensure your `postcss.config.js` has the following plugins installed:
```js
module.exports = {
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": "postcss-nesting",
    tailwindcss: {},
    autoprefixer: {},
    cssnano: {},
  },
}
```

If you are creating a UI library to share with others, ensure you set a unique prefix to avoid clashes with other libraries.

```js
// tailwind.config.js
module.exports = {
  prefix: "{uniquePrefix}-"
}
```

### Alias

If you are using aliases, ensure you have them listed in your `tsconfig.json` (the `tsconfig.dist` and `tsconfig.types` should extend this) and in `rollup.config`.

Example:
```json
// tsconfig.json
{
  "compilerOptions": {
    "paths": {
      "~components/*": ["./src/*"],
    }
  }
}

// tsconfig.dist.json
{
  "extends": ["./tsconfig.json", "@kaizen/package-bundler/tsconfig.dist.json"],
}
```

```ts
// rollup.config.mjs
export default rollupConfig({
  alias: {
    entries: [
      { find: "~components", replacement: "src" },
    ],
  },
})
```
