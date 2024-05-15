# @kaizen/package-bundler

Bundle packages as CJS and ESM with types.

## build-shared-ui

For shared UI packages (CSS modules and/or Tailwind).

### Setup

```sh
pnpm add -D @kaizen/package-bundler
```

#### Dependencies

```sh
pnpm add style-inject && pnpm add -D postcss postcss-preset-env rollup
```

`dependencies`:
- `style-inject`
  - This is used in the dist, thus required by the consumer

`devDependencies`:
- `postcss`
- `postcss-preset-env`
- `rollup`
- If using Tailwind:
  - `tailwind`

#### Required files

- `postcss.config.js`
- `rollup.config.(mjs|ts)`
- `tsconfig.json`
- `tsconfig.dist.json`
- `tsconfig.types.json`
- If using Tailwind:
  - `tailwind.config.js`
  - `src/tailwind.css`

#### `package.json`
```json
"main": "dist/cjs/index.cjs",
"module": "dist/esm/index.mjs",
"types": "dist/types/index.d.ts",
"files": [
  "dist"
],
"sideEffects": [
  "tailwind.css.*" // If using Tailwind
],
"scripts": {
  "build": "pnpm package-bundler build-shared-ui",
}
```

#### Rollup

In `rollup.config.(mjs|ts)`:
```ts
import { pluginsSharedUi, rollupConfig } from "@kaizen/package-bundler";

export default rollupConfig({
  // Add extra entrypoints as required
  input: { index: "./src/index.ts" },
  plugins: pluginsSharedUi,
})
```

#### tsconfig
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

#### Alias

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
// rollup.config.(mjs|ts)
export default rollupConfig({
  alias: {
    entries: [
      { find: "~components", replacement: "src" },
    ],
  },
})
```

#### Tailwind

Follow the [set up guide](../../docs/Systems/Tailwind/getting-started.mdx).

If you are creating a UI library to share with others, ensure you set a unique prefix to avoid clashes with other libraries.
