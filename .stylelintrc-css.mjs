/** @type {import('stylelint').Config} */
// For CSS linting only, SCSS linting is handled in the root .stylelintrc.json
export default {
  extends: 'stylelint-config-standard',
  rules: {
    'selector-class-pattern': null,
    // Semantic colour tokens use a single `_` to introduce a state/variant
    // segment (e.g. `--border-brand_alt`, `--bg-secondary_hover`,
    // `--text-secondary_on-brand`). Allow one such underscore-separated variant
    // group while still enforcing kebab-case within each segment.
    'custom-property-pattern': [
      '^([a-z][a-z0-9]*)(-[a-z0-9]+)*(_[a-z0-9]+(-[a-z0-9]+)*)?$',
      {
        message: (name) =>
          `Expected custom property name "${name}" to be kebab-case with an optional _variant suffix`,
      },
    ],
    'color-function-notation': ['modern', { ignore: ['with-var-inside'] }],
    'font-family-no-missing-generic-family-keyword': [
      true,
      {
        ignoreFontFamilies: ['Material Symbols Outlined'],
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
  },
}
