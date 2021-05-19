# Kaizen Stylelint Plugin

## Getting Started

`yarn add @kaizen/stylelint-plugin`

Then, add the plugin and the rules you want to your stylelint configuration (e.g. `stylelint.config.js` or `.stylelintrc.json`).
For sane defaults, you can use this base configuration:

```json
{
  "plugins": ["@kaizen/stylelint-plugin"],
  "rules": {
    "kaizen/no-deprecated-tokens": [
      true,
      { "severity": "warning", "disableFixing": false }
    ],
    "kaizen/no-invalid-functions": [
      true,
      { "severity": "warning", "disableFixing": false }
    ],
    "kaizen/no-invalid-equations": [
      true,
      { "severity": "warning", "disableFixing": false }
    ],
    "kaizen/imports-no-unused": [
      true,
      { "severity": "warning", "disableFixing": false }
    ],
    "kaizen/imports-no-extraneous": [
      true,
      { "severity": "warning", "disableFixing": false }
    ]
  }
}

```


## Features
- Report on and autofix usages of old/deprecated kaizen tokens
- Doesn't autofix anything that can't be safely migrated, e.g. variable declarations like `$card-bg: $kz-color-wisteria-800`, SCSS mixins, or complex equations.
- It can autofix any variables that are used incorrectly within a `calc()` function, such as ones that aren't interpolated when they should be, or negated variables that need to be wrapped in `calc()` to support CSS variables (e.g. `-$kz-spacing-md` -> `calc(-1 * #{$kz-var-spacing-md}))`
- Fixes alpha manipulation functions (`add-alpha`, `rgba`, `rgb`, `transparentize`) by using `-rgb-params` variable replacements with `rgba()`.
- Warns you when you use a new CSS variable Kaizen token incorrectly (most of the time), e.g. when you use it in a function that doesn't support CSS variables such as `darken`, `add-tint`, `mix`, or a custom mixin/function.
- Any usages of color manipulation functions such as `darken`, `add-shade`, `add-tint`, `mix` etc will be computed within the codemod and replaced with a HEX/RGB/HSL value, using the `sass` compiler.


## Rules
- `kaizen/no-deprecated-tokens` - Detects usages of deprecated tokens, with the ability to automatically migrate many instances.
- `kaizen/no-invalid-functions` - Detects invalid usages of Kaizen tokens within some functions that are known to be problematic such as `rgba`, `darken` or `mix`, and automatically fixes `rgba`, `rgb`, `add-alpha`, `transparentize` instances by ensuring the correct `-rgb-params` tokens are used, OR by replacing unfixable color manipulation functions into their computed values (see [Sass Manipulate Color Functions] (https://www.w3schools.com/sass/sass_functions_color.asp))
- `kaizen/no-invalid-equations` - Detects invalid usages of Kaizen tokens within equations. It won't be able to automatically fix many cases, but it can for some simple cases for example negating a Kaizen variable without a `calc()` function, which is going to be unsupported in the future due to CSS variables.
- `kaizen/no-transitive-tokens` - Prevent and fix usages of local non-Kaizen variables (only ones that are defined on the current sheet, ignoring any that are imported) that contain Kaizen tokens in their values. For example, `$card-bg: $kz-color-wisteria-800; .card { background-color: $card-bg; }` would be disallowed, and would be autofixed to `background-color: $kz-color-wisteria-800;`. The main reason you might want to enable this rule is if you have a large amount of proxy variables like these, because the other rules' autofixes can't be safely applied to variable values, e.g. we can't transform `$card-bg: $kz-color-wisteria-800;` -> `$card-bg: $kz-var-color-wisteria-800;` because we don't know how `$card-bg` is being used (it could be imported in other files, and used within a calc function which may silently fail).
- `kaizen/imports-no-unused` - Reports and fixes unused Kaizen token imports
- `kaizen/imports-no-extraneous` - Reports and fixes any Kaizen token imports that should exist but don't, based on the tokens that are used in the current stylesheet.

## Options:
- `disableFixing: boolean` - Allows you to exclude some rules from applying autofixes when running with `--fix`. Defaults to `false`

- `severity: "warning" | "error"` - In the example above, `severity` is used and is a stylelint configuration field (not ours). You can set this to "warning" or "error" to treat reports of anything as ok or fatal.
