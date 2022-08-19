# Package recipe

Recipe for creating a new package.

- [Intro](#intro)
- [Package structure](#package-structure)
  - [Documentation](#documentation)
  - [Components](#components)
  - [CHANGELOG.md](#changelogmd)
  - [index.ts](#indexts)
  - [package.json](#packagejson)
  - [tsconfig.dist.json](#tsconfigdistjson)

## Intro

To generate a new component and package, new component within an existing package, or a subcomponent,
run the following command and follow the prompts:
```
yarn plop
```
or run the following command to answer the name prop (replace `NewComponentName` with your component name):
```
yarn plop NewComponentName
```

## Package structure

Given the component `PancakeStack`, the package structure will follow this:

```
/* Directory */
packages/
  pancake-stack/
    docs/
      - PancakeStack.stories.tsx
    src/
      (...see Components section below)
    - CHANGELOG.md
    - index.ts
    - package.json
    - tsconfig.dist.json
```

### Documentation

The `docs/` folder houses Storybook stories (and associated stylesheets) and the directory is excluded from the published package.

In the future we may consider moving the stories to be with their component (the stylesheets are currently the main problem for file exclusion; perhaps we use a specific naming convention for story styles?).

### Components

The `src/` folder houses the components for the package.

See the [basic component recipe](basic-component.md) for the structure breakdown.

### CHANGELOG.md

This is an auto-generated file created and updated on release.

### index.ts

This file is used only as an entrypoint. Export your components from `src/` in here.

```ts
// index.ts
export * from "./src/PancakeStack"
```

### package.json

The base package.json will look like this, where:
- `{{ COMPONENT_NAME }}` = the component name in PascalCase (eg. `PancakeStack`)
- `{{ PACKAGE_NAME }}` = the component name in lower-kebab-case (eg. `pancake-stack`)

```json
{
  "name": "@kaizen/{{ PACKAGE_NAME }}",
  "version": "1.0.0",
  "description": "The {{ COMPONENT_NAME }} component",
  "scripts": {
    "prepublish": "tsc --project tsconfig.dist.json",
    "build": "yarn clean && yarn prepublish",
    "build:watch": "yarn clean && yarn prepublish --watch",
    "clean": "rimraf '**/*.d.ts' '**/*.js' '**/*.map'"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/cultureamp/kaizen-design-system.git",
    "directory": "packages/{{ PACKAGE_NAME }}"
  },
  "bugs": {
    "url": "https://github.com/cultureamp/kaizen-design-system/issues"
  },
  "files": [
    "**/*",
    "**/*.d.ts",
    "!**/*.ts",
    "!**/*.tsx",
    "!**/*.spec.*",
    "!**/*.snap",
    "!docs",
    "!tsconfig.dist.json"
  ],
  "author": "",
  "private": false,
  "license": "MIT",
  "dependencies": {
    "@kaizen/component-base": "^1.1.0",
    "classnames": "^2.3.1"
  },
  "devDependencies": {
    "rimraf": "^3.0.2"
  },
  "peerDependencies": {
    "@kaizen/design-tokens": "^2.10.3 || ^3.0.0 || ^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0 || ^9.0.0",
    "react": "^16.14.0 || ^17.0.0 || ^18.0.0"  
  }
}
```

### tsconfig.dist.json

```json
{
  "extends": "../../tsconfig.dist.json",
  "compilerOptions": {
    "allowJs": false,
    "declaration": true,
    "noEmit": false,
    "sourceMap": true
  },
  "exclude": ["docs"]
}
```
