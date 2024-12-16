# `package-bundler build`

For packages that do not contain any styles.

### `package.json`

Add the following to your `package.json`:

```json
"main": "dist/cjs/index.cjs", // CommonJS entrypoint
"module": "dist/esm/index.mjs", // ES modules entrypoint
"types": "dist/types/index.d.ts", // TypeScript types entrypoint
"files": [
  "dist" // Ensure dist dir is included in package
],
"scripts": {
  "build": "pnpm package-bundler build",
}
```

#### Dependencies

```sh
pnpm add -D rollup tslib
```

`devDependencies`:

- `rollup`
- `tslib` (peerDep of `rollup`)

### Required files

- `rollup.config.mjs`
- `tsconfig.json`
- `tsconfig.dist.json`

### Rollup

In `rollup.config.mjs`:

```ts
import { pluginsDefault, rollupConfig } from '@kaizen/package-bundler'

export default rollupConfig({
  // Add extra entrypoints as required
  input: { index: './src/index.ts' },
  plugins: pluginsDefault,
})
```

### tsconfig

```json
// tsconfig.json
{
  "extends": "@kaizen/package-bundler/tsconfig.base.json",
  // https://www.typescriptlang.org/tsconfig/#include
  // Include all files you want TypeScript to resolve during development such as tests or stories eg.
  "include": ["src/**/*", "__tests__/**/*"],
  // https://www.typescriptlang.org/tsconfig/#exclude
  // Files or patterns you want to exclude from your included files during development eg.
  "exclude": ["node_modules"]
}

// tsconfig.dist.json
{
  "extends": "./tsconfig.json",
  // https://www.typescriptlang.org/tsconfig/#include
  // This overrides the value in the extended `tsconfig.json`
  // Include all files you want TypeScript to resolve in the distributed package eg.
  "include": ["src/**/*"],
  // https://www.typescriptlang.org/tsconfig/#exclude
  // This overrides the value in the extended `tsconfig.json`
  // Files or patterns you want to exclude (such as tests and stories) from your included files in the distributed package eg.
  "exclude": ["node_modules", "**/*.spec.ts", "**/*.spec.tsx", "**/*.stories.tsx"]
}
```

### Alias

If you are using aliases, ensure you have them listed in your `tsconfig.json` (the `tsconfig.dist` should extend this).

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
  "extends": "./tsconfig.json",
}
```
