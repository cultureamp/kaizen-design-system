/*
  This file was autogenerated by tslint-to-eslint-config and represents the closest
  reasonable ESLint configuration to this project's original TSLint configuration.
  https://github.com/typescript-eslint/tslint-to-eslint-config

  Eventually, this config will be massaged to be more consistent with other
  repos in Culture Amp, but for now we have taken the path of least
  resistence with view to tidy this up in the future.
*/
module.exports = {
  env: {
    browser: true,
    node: true,
  },
  settings: {
    "import/resolver": {
      typescript: {}, // this empty key is required for eslint-import-resolver-typescript
    },
    react: {
      version: "detect",
    },
  },
  extends: [
    "prettier",
    "plugin:ssr-friendly/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:storybook/recommended",
    "plugin:import/typescript",
    "plugin:react/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
    "@stylistic",
    "import",
    "sort-imports-es6-autofix",
    "ssr-friendly",
    "jsx-a11y",
    "vitest",
  ],
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
    "@typescript-eslint/unified-signatures": "error",
    "@stylistic/quotes": ["error", "double", { avoidEscape: true }],
    "@stylistic/type-annotation-spacing": "error",
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
    "import/no-extraneous-dependencies": "error",
    "import/no-internal-modules": "off",
    "import/order": [
      "error",
      {
        alphabetize: {
          order: "asc",
        },
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        pathGroups: [
          {
            pattern: "{react,react-dom}",
            group: "builtin",
            position: "before",
          },
          {
            pattern: "@kaizen/**",
            group: "external",
            position: "after",
          },
          {
            pattern: "~*",
            group: "internal",
            position: "before",
          },
          {
            pattern: "~*/**",
            group: "internal",
            position: "before",
          },
          {
            pattern: "..",
            group: "parent",
            position: "after",
          },
          {
            pattern: "{**,.}/*+(.scss|.css)",
            group: "index",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: [],
      },
    ],
    "vitest/consistent-test-it": ["error", { fn: "it" }],
    "vitest/expect-expect": "error",
    "vitest/no-commented-out-tests": "error",
    "vitest/no-conditional-expect": "error",
    "vitest/no-focused-tests": "error",
    "vitest/no-disabled-tests": "error",
    "vitest/no-standalone-expect": "error",
    "vitest/no-test-return-statement": "error",
    "vitest/prefer-equality-matcher": "error",
    "vitest/require-top-level-describe": "error",
    "vitest/valid-describe-callback": "error",
    "vitest/valid-expect": "error",
    "vitest/valid-title": "error",
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
    "react/button-has-type": ["error"],
    "react/jsx-curly-brace-presence": [
      "error",
      { props: "never", children: "never", propElementValues: "always" },
    ],
    "react/prop-types": "off",
    "react/display-name": "off", // displayName isn't needed in most cases as it's inferred from variable name and it's breaking types and storybook doc gen
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
  overrides: [
    {
      files: [
        ".storybook/*",
        "**/_docs/**/*",
        "**/__tests__/**/*",
        "*.stories.tsx",
        "*.spec.ts",
        "*.spec.tsx",
        "*.docsExample.tsx",
      ],
      rules: {
        "import/no-extraneous-dependencies": "off",
      },
    },
    {
      files: ["*.ts", "*.mts", "*.cts", "*.tsx"],
      rules: {
        "@typescript-eslint/explicit-function-return-type": [
          "error",
          { allowExpressions: true },
        ],
      },
    },
    {
      files: ["*.md", "*.mdx"],
      extends: "plugin:mdx/recommended",
      rules: {
        "import/no-extraneous-dependencies": "off",
        // This is throwing false positives in MDX
        // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/issues/780
        "jsx-a11y/anchor-has-content": "off",
        semi: ["error", "never"],
      },
      settings: {
        "mdx/code-blocks": true,
      },
    },
    {
      files: "**/*.{md,mdx}/**",
      extends: "plugin:mdx/code-blocks",
      rules: {
        "react/react-in-jsx-scope": "off",
        "react/jsx-no-undef": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "react/jsx-no-comment-textnodes": "off",
        "react/no-unknown-property": "off",
        "no-duplicate-imports": "off",
      },
    },
    {
      files: ["**/bin/**", "vitest.setup.ts"],
      rules: {
        "no-console": "off",
      },
    },
  ],
}
