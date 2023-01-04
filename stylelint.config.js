module.exports = {
  extends: [
    "stylelint-config-recommended-scss",
    "stylelint-config-css-modules",
    "./packages/stylelint-plugin/dev-config.js",
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
    // TODO: Fix this if sticking with SCSS, because we need to fix the order.
    "no-descending-specificity": null,
    "property-no-unknown": null,
    "annotation-no-unknown": null,
    "scss/operator-no-newline-after": null,
    "scss/operator-no-unspaced": null,
    "function-no-unknown": null,
    "scss/function-no-unknown": null,
    "function-linear-gradient-no-nonstandard-direction": null,
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
