module.exports = {
  extends: ["./packages/stylelint-plugin/dev-config.js"],
  overrides: [
    {
      files: ["*.scss", "**/*.scss"],
      customSyntax: "postcss-scss",
    },
  ],
  rules: {
    "string-quotes": "double",
    "no-duplicate-at-import-rules": true,
    "block-no-empty": true,
    "block-opening-brace-space-before": "always",
    "declaration-bang-space-after": "never",
    "comment-no-empty": true,
    "no-duplicate-selectors": true,
    "font-family-no-duplicate-names": true,
    /**
     * "selector-pseudo-class-no-unknown": true
     * https://stylelint.io/user-guide/rules/selector-pseudo-class-no-unknown
     *
     * Once we are certain normalise is working across all our repos, we should feel
     * comfortable in removing "global" from "ignorePseudoClasses"
     */
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["global", "export"],
      },
    ],
    "no-extra-semicolons": true,
    "declaration-no-important": [
      true,
      {
        severity: "error",
      },
    ],
  },
}
