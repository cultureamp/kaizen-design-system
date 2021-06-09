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
- Any usages of color manipulation functions such as `darken`, `add-shade`, `add-tint`, `mix` etc will be computed within the codemod and replaced with a HEX/RGB/HSL value, using the `sass` compiler.


## Rules

These rules are included by default:

- `kaizen/prefer-var-tokens` - Detects usages of non-themable tokens, and attempts to migrate them to our tokens that support theming with CSS variables.
- `kaizen/no-invalid-use-of-var-tokens-in-functions` - Detects invalid usages of Kaizen variable tokens within some functions that are known to be problematic such as `rgba`, `darken` or `mix`, and automatically fixes `rgba`, `rgb`, `add-alpha`, `transparentize` instances by ensuring the correct `-rgb-params` tokens are used.
- `kaizen/no-invalid-use-of-var-tokens-in-equations` - Detects invalid usages of Kaizen tokens within equations. It won't be able to automatically fix many cases, but it can for some simple cases for example negating a Kaizen variable without a runtime `calc()` function.
- `kaizen/all-token-imports-must-be-used` - Reports and fixes unused Kaizen token imports.
- `kaizen/tokens-must-be-imported` - Reports and fixes any Kaizen token imports that should exist but don't, based on the tokens that are used in the current stylesheet.

Also available, but not enabled by default:

- `kaizen/no-tokens-in-variables` - Prevent and fix usages of local non-Kaizen variables (only ones that are defined on the current sheet, ignoring any that are imported) that contain Kaizen tokens in their values. For example, `$card-bg: $kz-color-wisteria-800; .card { background-color: $card-bg; }` would be disallowed, and would be autofixed to `background-color: $kz-color-wisteria-800;`. The main reason you might want to enable this rule is if you have a large amount of proxy variables like these, because the other rules' autofixes can't be safely applied to variable values, e.g. we can't transform `$card-bg: $kz-color-wisteria-800;` -> `$card-bg: $kz-var-color-wisteria-800;` because we don't know how `$card-bg` is being used (it could be imported in other files, and used within a calc function which may silently fail).

## Options:

- `disableFixing: boolean` - Allows you to exclude some rules from applying autofixes when running with `--fix`. Defaults to `false`

- `severity: "warning" | "error"` - In the example above, `severity` is used and is a stylelint configuration field (not ours). You can set this to "warning" or "error" to treat reports of anything as ok or fatal.
