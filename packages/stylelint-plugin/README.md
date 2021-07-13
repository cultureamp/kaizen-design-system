# Kaizen Stylelint Plugin

## Getting Started

`yarn add @kaizen/stylelint-plugin`

Then, add the plugin and the rules you want to your stylelint configuration (e.g. `stylelint.config.js` or `.stylelintrc.json`).
For sane defaults, you can use this base configuration:

```json
{
  "extends": ["@kaizen/stylelint-plugin"]
}
```

Using this preset allows you to adopt the Kaizen rules easily, and allows the package to include updated rule configuration and new rules in future. You can see the exact configuration that is added in (index.ts)[./src/index.ts].

## Features
- Report on and autofix usages of old/deprecated kaizen tokens
- Doesn't autofix anything that can't be safely migrated, e.g. variable declarations like `$card-bg: $kz-color-wisteria-800`, SCSS mixins, or complex equations.
- It can autofix any variables that are used incorrectly within a `calc()` function, such as ones that aren't interpolated when they should be, or negated variables that need to be wrapped in `calc()` to support CSS variables (e.g. `-$kz-spacing-md` -> `calc(-1 * #{$kz-var-spacing-md}))`
- Fixes alpha manipulation functions (`add-alpha`, `rgba`, `rgb`, `transparentize`) by using `-rgb-params` variable replacements with `rgba()`.
- Warns you when you use a new CSS variable Kaizen token incorrectly (most of the time), e.g. when you use it in a function that doesn't support CSS variables such as `darken`, `add-tint`, `mix`, or a custom mixin/function.


## Rules

These rules are included by default:

- `kaizen/prefer-var-tokens` - Detects usages of non-themable tokens, and attempts to migrate them to our tokens that support theming with CSS variables.
- `kaizen/no-invalid-use-of-var-tokens-in-functions` - Detects invalid usages of Kaizen variable tokens within some functions that are known to be problematic such as `rgba`, `darken` or `mix`, and automatically fixes `rgba`, `rgb`, `add-alpha`, `transparentize` instances by ensuring the correct `-rgb-params` tokens are used.
- `kaizen/no-invalid-use-of-var-tokens-in-equations` - Detects invalid usages of Kaizen tokens within equations. It won't be able to automatically fix many cases, but it can for some simple cases for example negating a Kaizen variable without a runtime `calc()` function.
- `kaizen/all-token-imports-must-be-used` - Reports and fixes unused Kaizen token imports.
- `kaizen/all-used-tokens-must-be-imported` - Reports and fixes any Kaizen token imports that should exist but don't, based on the tokens that are used in the current stylesheet.
- `kaizen/rename-tokens` - Reports and automatically renames any deprecated color names to the newer name. E.g:
  - `kz-var-color-wisteria-100 -> color-purple-100`
  - `kz-var-spacing-md` -> `spacing-md`
  - `kz-var-id-color-peach-100` -> `color-orange-100-id`
  - `kz-var-color-seedling-500-rgb-params` -> `color-green-500-rgb`


Also available, but not enabled by default:

- `kaizen/no-tokens-in-variables` - Prevent and fix the usage of Kaizen design tokens in Sass or Less variables. This does not include design tokens in variables that have been imported into the current stylesheet. For example, `$card-bg: $kz-color-wisteria-800; .card { background-color: $card-bg; }` would be disallowed and would be autofixed to `background-color: $kz-color-wisteria-800;`. 

  This rule is not recommended as a default as proxy variables can be useful - in the example above `$card-bg` is communicating the purpose of the colour, not just it's value. You may find this rule helpful if you have a large number of proxy variables, and they are preventing the other rules from auto-fixing. 
  
  Autofixing often can't be applied to variable values, e.g. we can't transform `$card-bg: $kz-color-wisteria-800;` -> `$card-bg: $kz-var-color-wisteria-800;` because we don't know how `$card-bg` is being used (it could be imported in other files, and used within a calc function which may silently fail). You can use the `kaizen/no-tokens-in-variables` to remove proxy variables and make it more likely that the other rules and autofixes will be applied.


## Options:

- `disableFixing: boolean` - Allows you to exclude some rules from applying autofixes when running with `--fix`. Defaults to `false`

- `severity: "warning" | "error"` - In the example above, `severity` is used and is a stylelint configuration field (not ours). You can set this to "warning" or "error" to treat reports of anything as ok or fatal.
