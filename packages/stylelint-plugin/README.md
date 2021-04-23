# Kaizen Stylelint Plugin

## Tl;dr

`yarn add @kaizen/stylelint-plugin`

Then, add the plugin and the rules you want to your stylelint configuration:

```json
{
  "plugins": ["@kaizen/stylelint-plugin"],
  "rules": {
    "kaizen/no-deprecated-tokens": [
      true, { "severity": "warning", "allowFixing" false }
    ],
    "kaizen/no-invalid-functions": [
      true, { "severity": "warning", "allowFixing" false }
    ],
    "kaizen/no-invalid-equations": [
      true, { "severity": "warning", "allowFixing" false }
    ],
    "kaizen/imports-no-unused": [
      true, { "severity": "warning", "allowFixing" false }
    ],
    "kaizen/imports-no-extraneous": [
      true, { "severity": "warning", "allowFixing" false }
    ]
  }
}

```

## Rules
- `kaizen/no-deprecated-tokens` - Detects usages of deprecated tokens, with the ability to automatically migrate many instances.
- `kaizen/no-invalid-functions` - Detects invalid usages of Kaizen tokens within some functions that are known to be problematic such as `rgba`, `darken` or `mix`, and automatically fixes any instances of `rgb`, `rgba` and `add-alpha` where possible.
- `kaizen/no-invalid-equations` - Detects invalid usages of Kaizen tokens within equations. It won't be able to automatically fix many cases, but it can for some simple cases for example negating a Kaizen variable without a `calc()` function, which is going to be unsupported in the future due to CSS variables.
- `kaizen/imports-no-unused` - Reports and fixes unused imports that relate to Kaizen tokens
- `kaizen/imports-no-extraneous` - Reports and fixes any imports that should exist but don't, based on the tokens that are used in the current stylesheet.

## CAVEAT
Running `stylelint --fix` won't apply any fixes due to some limitations that stylelint imposes on the PostCSS AST, UNLESS you set `allowFixing` to true.

## CLI Utility
As a workaround we've exposed a CLI utility.
To automatically migrate as much as possible on a codebase, run:

`yarn kaizen-token-codemod "{lib,src}/**/*.{scss,less}" --fix`


- `kaizen-token-codemod` is an exposed binary within this package
- The first positional parameter is a glob that describes the files you want to lint and fix
- `--fix` tells it to fix anything it can, and thus not report on anything it has fixed.



## Options:
- `allowFixing: boolean` - Allows you to run stylelint fixes using the codemod, even though there may be incosistent results. Defaults to false.

In the example above, `severity` is used, however it is inbuilt into stylelint. You can set this to "warning" or "error" to treat reports of anything as ok or fatal.

## Features
- Detect and report on usages of old/deprecated kaizen tokens
- Doesn't auto-migrate anything that can't be safely migrated, e.g. variable declarations, color manipulation functions, or equations.
  - However, it WILL migrate any variables that are used incorrectly within a `calc()` function
- Migrates `rgba|rgb|add-alpha` usages.
- Warns you when you use a new kaizen token incorrectly (most of the time)
- Coming soon: any usages of darken, add-shade, add-tint, mix etc will be computed within the codemod and replaced with a HEX/RGB/HSL value.