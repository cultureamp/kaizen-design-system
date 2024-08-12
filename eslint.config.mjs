// @ts-check
import eslint from "@eslint/js"
import tseslint from "typescript-eslint"

export default tseslint.config(
  eslint.configs.recommended, // TODO: There may be some big differences between the recommended configs and our original
    ...tseslint.configs.recommendedTypeChecked, // one day `strictTypeChecked` would be better
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    plugins: {
      // TODO: add plugins
    }
  },
  {
    ignores: [
      "eslint.config.js",
      "**/*.config.js",
      "**/*.config.js",
      '**/dist/*',
      "/packages/components/src/Icon/bin/Template.tsx",
      "storybook/public"
    ],
  },
  {
    // temp disable rules causing errors so we can get _some_ linting
    // hopefully we can enable some/most of these slowly over time
    rules: {
      "@typescript-eslint/adjacent-overload-signatures": "error",
      "@typescript-eslint/array-type": [
        "error",
        {
          default: "array-simple",
        },
      ],
      "@typescript-eslint/no-empty-object-type": "error",
      "@typescript-eslint/no-unsafe-function-type": "error",
      "@typescript-eslint/no-wrapper-object-types": "error",
      "@typescript-eslint/class-name-casing": "off",
      "@typescript-eslint/consistent-type-assertions": "off",
      "@typescript-eslint/consistent-type-definitions": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-member-accessibility": [
        "off",
        {
          accessibility: "explicit",
        },
      ],
      "@typescript-eslint/interface-name-prefix": "off",
      "@typescript-eslint/member-delimiter-style": [
        "off",
        {
          multiline: {
            delimiter: "none",
            requireLast: true,
          },
          singleline: {
            delimiter: "semi",
            requireLast: false,
          },
        },
      ],
      "@typescript-eslint/member-ordering": "error",
      "@typescript-eslint/no-empty-function": "error",
      "@typescript-eslint/no-empty-interface": "error",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-misused-new": "error",
      "@typescript-eslint/no-namespace": "error",
      "@typescript-eslint/no-parameter-properties": "off",
      "@typescript-eslint/no-this-alias": "error",
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/no-use-before-define": "off",
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/prefer-for-of": "error",
      "@typescript-eslint/prefer-function-type": "error",
      "@typescript-eslint/prefer-namespace-keyword": "error",
      "@typescript-eslint/semi": ["off", null],
      "@typescript-eslint/triple-slash-reference": [
        "error",
        {
          path: "always",
          types: "prefer-import",
          lib: "always",
        },
      ],
      // "@typescript-eslint/type-annotation-spacing": "error", // TODO - this is now handled by @stylistic/eslint-plugin-js  
      "@typescript-eslint/unified-signatures": "error",
      "arrow-body-style": "warn",
      "arrow-parens": ["error", "as-needed"],
      "brace-style": ["error", "1tbs"],
      camelcase: "error",
      "comma-dangle": "off",
      complexity: "off",
      "constructor-super": "error",
      curly: "off",
      "eol-last": "error",
      eqeqeq: ["off", "always"],
      "guard-for-in": "error",
      "id-blacklist": [
        "error",
        "any",
        "Number",
        "number",
        "String",
        "string",
        "Boolean",
        "boolean",
        "Undefined",
        "undefined",
      ],
      "id-match": "error",
      "jsdoc/check-alignment": "off",
      "jsdoc/check-indentation": "off",
      "jsdoc/newline-after-description": "off",
      "linebreak-style": "off",
      "max-classes-per-file": ["error", 1],
      "new-parens": "error",
      "newline-per-chained-call": "off",
      "no-bitwise": "error",
      "no-caller": "error",
      "no-cond-assign": "error",
      "no-console": "error",
      "no-debugger": "error",
      "no-duplicate-case": "error",
      "no-duplicate-imports": "error",
      "no-empty": "error",
      "no-eval": "error",
      "no-extra-bind": "error",
      "no-extra-semi": "off",
      "no-fallthrough": "off",
      "no-invalid-this": "off",
      "no-irregular-whitespace": "off",
      "no-multiple-empty-lines": "error",
      "no-new-func": "error",
      "no-new-wrappers": "error",
      "no-return-await": "error",
      "no-sequences": "error",
      // The base no-shadow rule reports incorrect errors in typescript
      "no-shadow": "off",
      "@typescript-eslint/no-shadow": ["error"],
      "no-sparse-arrays": "error",
      "no-template-curly-in-string": "error",
      "no-throw-literal": "error",
      "no-trailing-spaces": "error",
      "no-undef-init": "error",
      "no-underscore-dangle": "error",
      "no-unsafe-finally": "error",
      "no-unused-labels": "error",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          varsIgnorePattern: "^_",
          argsIgnorePattern: "^_",
        },
      ],
      "no-var": "error",
      "object-shorthand": "error",
      "one-var": ["error", "never"],
      "prefer-const": "error",
      "prefer-object-spread": "error",
      "quote-props": ["error", "as-needed"],
      radix: "error",
      // "react/button-has-type": ["error"], // TODO: Plugins need to be set up
      // "react/jsx-curly-brace-presence": [
      //   "error",
      //   { props: "never", children: "never", propElementValues: "always" },
      // ],
      // "react/prop-types": "off",
      // "react/display-name": "off", // displayName isn't needed in most cases as it's inferred from variable name and it's breaking types and storybook doc gen
      "space-before-function-paren": [
        "error",
        {
          anonymous: "never",
          asyncArrow: "always",
          named: "never",
        },
      ],
      "space-in-parens": ["error", "never"],
      "spaced-comment": [
        "error",
        "always",
        {
          markers: ["/"],
        },
      ],
      "use-isnan": "error",
      "valid-typeof": "off",

    },
  },
)