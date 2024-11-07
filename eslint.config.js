import js from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import vitest from '@vitest/eslint-plugin'
import eslintConfigPrettier from 'eslint-config-prettier'
import importPlugin from 'eslint-plugin-import'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import * as mdx from 'eslint-plugin-mdx'
import reactPlugin from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import storybook from 'eslint-plugin-storybook'
import globals from 'globals'
import tseslint from 'typescript-eslint'

// const rules = {
//   "@typescript-eslint/adjacent-overload-signatures": "error",
//   "@typescript-eslint/array-type": [
//     "error",
//     {
//       default: "array-simple",
//     },
//   ],
//   "@typescript-eslint/no-empty-object-type": "error",
//   "@typescript-eslint/no-unsafe-function-type": "error",
//   "@typescript-eslint/no-wrapper-object-types": "error",
//   "@typescript-eslint/class-name-casing": "off",
//   "@typescript-eslint/consistent-type-assertions": "off",
//   "@typescript-eslint/consistent-type-definitions": "off",
//   "@typescript-eslint/explicit-function-return-type": "off",
//   "@typescript-eslint/explicit-member-accessibility": [
//     "off",
//     {
//       accessibility: "explicit",
//     },
//   ],
//   "@typescript-eslint/interface-name-prefix": "off",
//   "@typescript-eslint/member-delimiter-style": [
//     "off",
//     {
//       multiline: {
//         delimiter: "none",
//         requireLast: true,
//       },
//       singleline: {
//         delimiter: "semi",
//         requireLast: false,
//       },
//     },
//   ],
//   "@typescript-eslint/member-ordering": "error",
//   "@typescript-eslint/no-empty-function": "error",
//   "@typescript-eslint/no-empty-interface": "error",
//   "@typescript-eslint/no-explicit-any": "off",
//   "@typescript-eslint/no-misused-new": "error",
//   "@typescript-eslint/no-namespace": "error",
//   "@typescript-eslint/no-parameter-properties": "off",
//   "@typescript-eslint/no-this-alias": "error",
//   "@typescript-eslint/no-unused-expressions": "off",
//   "@typescript-eslint/no-use-before-define": "off",
//   "@typescript-eslint/no-var-requires": "off",
//   "@typescript-eslint/prefer-for-of": "error",
//   "@typescript-eslint/prefer-function-type": "error",
//   "@typescript-eslint/prefer-namespace-keyword": "error",
//   "@typescript-eslint/semi": ["off", null],
//   "@typescript-eslint/triple-slash-reference": [
//     "error",
//     {
//       path: "always",
//       types: "prefer-import",
//       lib: "always",
//     },
//   ],
//   "@typescript-eslint/unified-signatures": "error",

//   "arrow-body-style": "warn",
//   "arrow-parens": ["error", "as-needed"],
//   "brace-style": ["error", "1tbs"],
//   camelcase: "error",
//   "comma-dangle": "off",
//   complexity: "off",
//   "constructor-super": "error",
//   curly: "off",
//   "eol-last": "error",
//   eqeqeq: ["off", "always"],
//   "guard-for-in": "error",
//   "id-blacklist": [
//     "error",
//     "any",
//     "Number",
//     "number",
//     "String",
//     "string",
//     "Boolean",
//     "boolean",
//     "Undefined",
//     "undefined",
//   ],
//   "id-match": "error",
//   "import/no-extraneous-dependencies": "error",
//   "import/no-internal-modules": "off",
//   "jsdoc/check-alignment": "off",
//   "jsdoc/check-indentation": "off",
//   "jsdoc/newline-after-description": "off",
//   "linebreak-style": "off",
//   "max-classes-per-file": ["error", 1],
//   "new-parens": "error",
//   "newline-per-chained-call": "off",
//   "no-bitwise": "error",
//   "no-caller": "error",
//   "no-cond-assign": "error",
//   "no-console": "error",
//   "no-debugger": "error",
//   "no-duplicate-case": "error",
//   "no-duplicate-imports": "error",
//   "no-empty": "error",
//   "no-eval": "error",
//   "no-extra-bind": "error",
//   "no-extra-semi": "off",
//   "no-fallthrough": "off",
//   "no-invalid-this": "off",
//   "no-irregular-whitespace": "off",
//   "no-multiple-empty-lines": "error",
//   "no-new-func": "error",
//   "no-new-wrappers": "error",
//   "no-return-await": "error",
//   "no-sequences": "error",
//   // The base no-shadow rule reports incorrect errors in typescript
//   "no-shadow": "off",
//   "@typescript-eslint/no-shadow": ["error"],
//   "no-sparse-arrays": "error",
//   "no-template-curly-in-string": "error",
//   "no-throw-literal": "error",
//   "no-trailing-spaces": "error",
//   "no-undef-init": "error",
//   "no-underscore-dangle": "error",
//   "no-unsafe-finally": "error",
//   "no-unused-labels": "error",
//   "no-unused-vars": "off",
//   "@typescript-eslint/no-unused-vars": [
//     "error",
//     {
//       varsIgnorePattern: "^_",
//       argsIgnorePattern: "^_",
//     },
//   ],
//   "no-var": "error",
//   "object-shorthand": "error",
//   "one-var": ["error", "never"],
//   "prefer-const": "error",
//   "prefer-object-spread": "error",
//   "quote-props": ["error", "as-needed"],
//   radix: "error",
//   "react/button-has-type": ["error"],
//   "react/jsx-curly-brace-presence": [
//     "error",
//     { props: "never", children: "never", propElementValues: "always" },
//   ],
//   "react/prop-types": "off",
//   "react/display-name": "off", // displayName isn't needed in most cases as it's inferred from variable name and it's breaking types and storybook doc gen
//   "space-before-function-paren": [
//     "error",
//     {
//       anonymous: "never",
//       asyncArrow: "always",
//       named: "never",
//     },
//   ],
//   "space-in-parens": ["error", "never"],
//   "spaced-comment": [
//     "error",
//     "always",
//     {
//       markers: ["/"],
//     },
//   ],
//   "use-isnan": "error",
//   "valid-typeof": "off",
// }
// const overrides = [
//   {
//     files: ["*.ts", "*.mts", "*.cts", "*.tsx"],
//     rules: {
//       "@typescript-eslint/explicit-function-return-type": [
//         "error",
//         { allowExpressions: true },
//       ],
//     },
//   },
// ]

const sharedImportConfig = {
  extends: [importPlugin.flatConfigs.recommended],
  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
    },
  },
  languageOptions: {
    ecmaVersion: 2020,
  },
  files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
}
// console.log(tseslint.configs.stylisticTypeChecked)
export default tseslint.config(
  {
    ignores: [
      '**/*.d.ts',
      '**/dist',
      '**/__fixtures__',
      'docs/storybook-static',
      'packages/components/src/Icon/bin/Template.tsx',
      'packages/components/svgo.config.js',
      'packages/components/svgo.spec.js',
      'packages/components/svgoUtils.js',
    ],
  },
  {
    extends: [
      js.configs.recommended,
      reactPlugin.configs.flat.recommended,
      reactPlugin.configs.flat['jsx-runtime'],
    ],
    settings: {
      react: {
        version: 'detect',
      },
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    plugins: {
      react: reactPlugin,
    },
    rules: {
      'camelcase': ['error', {
        allow: ['^UNSAFE_', '^UNSTABLE_'],
      }],
      'no-irregular-whitespace': [
        'error',
        {
          skipStrings: true,
          skipComments: true,
          skipRegExps: true,
          skipTemplates: true,
        },
      ],
      'no-template-curly-in-string': 'error',
      'no-underscore-dangle': ['error',
        {
          allowInArrayDestructuring: true,
          allowInObjectDestructuring: true,
          allow: ['_metadata'],
        },
      ],
      'react/button-has-type': 'error',
      'react/prop-types': 'off',
    },
  },
  {
    extends: [vitest.configs.recommended],
    files: ['**/*.{spec,test}.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    rules: {
      'vitest/consistent-test-it': ['error', { fn: 'it' }],
      'vitest/no-conditional-expect': 'error',
      'vitest/no-focused-tests': 'error',
      'vitest/no-disabled-tests': 'error',
      'vitest/no-standalone-expect': 'error',
      'vitest/no-test-return-statement': 'error',
      'vitest/prefer-equality-matcher': 'error',
      'vitest/require-top-level-describe': 'error',
    },
  },
  {
    extends: [
      ...tseslint.configs.recommended,
      // ...tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.json', './docs/tsconfig.json'],
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    files: ['**/*.{ts,tsx}'],
    rules: {
      '@typescript-eslint/array-type': tseslint.configs.stylisticTypeChecked[2].rules['@typescript-eslint/array-type'],
      // Custom
      '@typescript-eslint/explicit-function-return-type': [
        'error',
        { allowExpressions: true },
      ],
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          varsIgnorePattern: '(^_|^React$)',
          argsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/prefer-nullish-coalescing': [
        'error',
        { ignoreBooleanCoercion: true },
      ],
    },
  },
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    ignores: [
      '**/*.stories.{ts,tsx}',
    ],
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'no-console': 'error',
    },
  },
  {
    ...sharedImportConfig,
    rules: {
      'import/order': [
        'error',
        {
          alphabetize: {
            order: 'asc',
          },
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          pathGroups: [
            {
              pattern: '{react,react-dom}',
              group: 'builtin',
              position: 'before',
            },
            {
              pattern: '@kaizen/**',
              group: 'external',
              position: 'after',
            },
            {
              pattern: '~*',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '~*/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '..',
              group: 'parent',
              position: 'after',
            },
            {
              pattern: '{**,.}/*+(.scss|.css)',
              group: 'index',
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: [],
        },
      ],
    },
  },
  {
    ...sharedImportConfig,
    ignores: [
      'docs/**/*',
      '**/_docs/**/*',
      '**/__tests__/**/*',
      '**/*.stories.tsx',
      '**/*.spec.ts',
      '**/*.spec.tsx',
    ],
    rules: {
      'import/no-extraneous-dependencies': 'error',
    },
  },
  ...storybook.configs['flat/recommended'],
  {
    ...jsxA11y.flatConfigs.recommended,
    files: ['**/*.{jsx,mjsx,tsx,mtsx}'],
  },
  mdx.flat,
  mdx.flatCodeBlocks,
  {
    extends: [stylistic.configs['recommended-flat']],
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    rules: {
      '@stylistic/brace-style': ['error', '1tbs'],
      '@stylistic/jsx-one-expression-per-line': 'off',
      '@stylistic/operator-linebreak': ['error', 'after', { overrides: { '?': 'before', ':': 'before' } }],
    },
  },
  eslintConfigPrettier,
)
