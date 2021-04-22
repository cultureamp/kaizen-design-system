# Kaizen Stylelint Plugin

## Tl;dr

`yarn add @kaizen/stylelint-plugin`

Then, add the plugin and rule to your stylelint configuration:

```
{
  "plugins": ["@kaizen/stylelint-plugin"],
  "rules": {
    "kaizen/deprecated-tokens": [
      true,
      { "severity": "warning", "unusedImports": true }
    ]
  }
}

```

## CAVEAT
Running `stylelint --fix` won't apply any fixes due to some limitations that stylelint imposes on the PostCSS AST.

## CLI Utility
As a workaround we've exposed a CLI utility.
To automatically migrate as much as possible on a codebase, run:

`yarn kaizen-token-codemod "{lib,src}/**/*.{scss,less}" --fix`


- `kaizen-token-codemod` is an exposed binary within this package
- The first positional parameter is a glob that describes the files you want to lint and fix
- `--fix` tells it to fix anything it can, and thus not report on anything it has fixed.



## Options:

- `unusedImports: boolean` - Should the codemod report on and remove any unused kaizen imports?
- `allowFixing: boolean` - Allows you to run stylelint fixes using the codemod, even though there may be incosistent results.

In the example above, `severity` is used, however it is inbuilt into stylelint. You can set this to "warning" or "error" to treat reports of anything as ok or fatal.

## Features
- Detect and report on usages of old/deprecated kaizen tokens
- Doesn't auto-migrate anything that can't be safely migrated, e.g. variable declarations, color manipulation functions, or equations.
- Migrates `rgba|rgb|add-alpha` usages.
- Warns you when you use a new kaizen token incorrectly (most of the time)