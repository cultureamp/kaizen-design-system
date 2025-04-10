# @kaizen/package-bundler

Bundle packages as CJS and ESM with TypeScript types.

ESM code is tree-shakeable.

```sh
pnpm add -D @kaizen/package-bundler
```

## Presets

The bundler provides two workflow presets; the default preset is intended to bundle simple packages that contain only JS functions, like shared utility libraries (eg, frontend-apis, etc). The Shared UI preset is designed to bundle packages containing shared UI components (eg, [goals-shared-ui](https://github.com/cultureamp/goals-ui/tree/main/packages/goals-shared-ui)) and includes additional steps for bundling and exposing stylesheets and translations.

- [Default preset](src/presets/default/README.md)
- [Shared UI preset](src/presets/shared-ui/README.md)

## Package entrypoints

Depending on the compatibility you wish to provide for your consumer, you may need to define your `package.json` differently.
Read more about [the different types of package.json entrypoints here](https://nodejs.org/api/packages.html#nodejs-packagejson-field-definitions).

### Node 12+

If your consumers are all using Node 12+ (including using TypeScript [`moduleResolution`](https://www.typescriptlang.org/tsconfig/#moduleResolution) `node16`/`nodenext`/`bundler`), you should be able to use the [`exports`](https://nodejs.org/api/packages.html#exports) field if you have multiple entrypoints.

### Node <=10

If your consumers may be using version 10 or lower (or are using TypeScript [`moduleResolution`](https://www.typescriptlang.org/tsconfig/#moduleResolution) `classic`/`node`/`node10`), the `exports` field will not be resolved. Your only option will be to utilise `main` (resolves CJS), `module` (resolves ESM), and `types` (resolves TypeScript).

Should you want multiple entrypoints, you will need to create a directory relative from the root of the package and create a `package.json` within that contains the extra resolutions.

Eg. If we want to create an entrypoint at `@kaizen/package-bundler/next`:

Folder structure:

```md
- next/
  - package.json
- src/...
- package.json
```

Contents for `next/package.json` (adjust your paths based on your defined dist structure).

```json
{
  "main": "../dist/cjs/next.cjs",
  "module": "../dist/esm/next.mjs",
  "types": "../dist/types/__next__/index.d.ts"
}
```

You will also need to ensure that this directory is included in your distributed package, so in the main `package.json`, ensure the directory is included in `files`.

```json
"files": [
  "dist",
  "next"
]
```
