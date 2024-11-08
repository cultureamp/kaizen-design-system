import js from "@eslint/js"
import vitest from "@vitest/eslint-plugin"
import importPlugin from "eslint-plugin-import"
import jsxA11y from "eslint-plugin-jsx-a11y"
import * as mdx from "eslint-plugin-mdx"
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended"
import reactPlugin from "eslint-plugin-react"
import reactHooks from "eslint-plugin-react-hooks"
import storybook from "eslint-plugin-storybook"
import globals from "globals"
import tseslint from "typescript-eslint"
import prettierRules from "./.prettierrc.js"

export default tseslint.config(
  {
    ignores: [
      "**/*.d.ts",
      "**/dist",
      "**/__fixtures__",
      "docs/storybook-static",
      "packages/components/src/Icon/bin/Template.tsx",
      "packages/components/svgo.config.js",
      "packages/components/svgo.spec.js",
      "packages/components/svgoUtils.js",
    ],
  },
  {
    extends: [
      js.configs.recommended,
      reactPlugin.configs.flat.recommended,
      reactPlugin.configs.flat["jsx-runtime"],
    ],
    settings: {
      react: {
        version: "detect",
      },
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    plugins: {
      react: reactPlugin,
    },
    rules: {
      "camelcase": [
        "error",
        {
          allow: ["^UNSAFE_", "^UNSTABLE_"],
        },
      ],
      "no-irregular-whitespace": [
        "error",
        {
          skipStrings: true,
          skipComments: true,
          skipRegExps: true,
          skipTemplates: true,
        },
      ],
      "no-template-curly-in-string": "error",
      "no-underscore-dangle": [
        "error",
        {
          allowInArrayDestructuring: true,
          allowInObjectDestructuring: true,
          allow: ["_metadata"],
        },
      ],
      "react/button-has-type": "error",
      "react/prop-types": "off",
    },
  },
  {
    extends: [vitest.configs.recommended],
    files: ["**/*.{spec,test}.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    rules: {
      "vitest/consistent-test-it": ["error", { fn: "it" }],
      "vitest/no-conditional-expect": "error",
      "vitest/no-focused-tests": "error",
      "vitest/no-disabled-tests": "error",
      "vitest/no-standalone-expect": "error",
      "vitest/no-test-return-statement": "error",
      "vitest/prefer-equality-matcher": "error",
      "vitest/require-top-level-describe": "error",
    },
  },
  {
    extends: [
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.json", "./docs/tsconfig.json"],
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    files: ["**/*.{ts,tsx}"],
    rules: {
      "@typescript-eslint/explicit-function-return-type": [
        "error",
        { allowExpressions: true },
      ],
      "@typescript-eslint/consistent-type-definitions": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-inferrable-types": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          varsIgnorePattern: "(^_|^React$)",
          argsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/prefer-nullish-coalescing": [
        "error",
        { ignoreBooleanCoercion: true },
      ],
    },
  },
  {
    files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    ignores: ["**/*.stories.{ts,tsx}"],
    plugins: {
      "react-hooks": reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "no-console": "error",
    },
  },
  {
    extends: [importPlugin.flatConfigs.recommended],
    settings: {
      "import/resolver": {
        typescript: true,
        node: true,
      },
    },
    languageOptions: {
      ecmaVersion: 2020,
    },
    files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    rules: {
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
    },
  },
  {
    plugins: importPlugin.flatConfigs.recommended.plugins,
    settings: {
      "import/resolver": {
        typescript: true,
        node: true,
      },
    },
    languageOptions: {
      ecmaVersion: 2020,
    },
    files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    ignores: [
      "docs/**/*",
      "**/_docs/**/*",
      "**/__tests__/**/*",
      "**/*.stories.tsx",
      "**/*.spec.ts",
      "**/*.spec.tsx",
    ],
    rules: {
      "import/no-extraneous-dependencies": "error",
    },
  },
  ...storybook.configs["flat/recommended"],
  {
    ...jsxA11y.flatConfigs.recommended,
    files: ["**/*.{jsx,mjsx,tsx,mtsx}"],
  },
  mdx.flat,
  mdx.flatCodeBlocks,
  {
    extends: [eslintPluginPrettierRecommended],
    rules: {
      "prettier/prettier": ["error", prettierRules],
    },
  },
)
