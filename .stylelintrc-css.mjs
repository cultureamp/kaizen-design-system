/** @type {import('stylelint').Config} */
// For CSS linting only, SCSS linting is handled in the root .stylelintrc.json
export default {
  extends: "stylelint-config-standard",
  rules: {
    "selector-class-pattern": null,
    "color-function-notation": ["modern", { ignore: ["with-var-inside"] }],
    "font-family-no-missing-generic-family-keyword": [
      true,
      {
        ignoreFontFamilies: ["Material Symbols Outlined"],
      },
    ],
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["global"],
      },
    ],
  },
}
