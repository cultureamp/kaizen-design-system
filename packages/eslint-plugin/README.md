# About
`@kaizen/eslint-plugin-kaizen` is a collection of ESLint rules for Kaizen. It aims to solve some of the following problems:
- Large-scale migrations of Kaizen packages
- Encourage Kaizen best practices and anticipate common mistakes

## Install
Add the package to your project's dependencies:

`yarn add @kaizen/eslint-plugin`

Add the plugin to your Eslint configuration: 
```
{
  plugins: ["@kaizen"],
}
```
Enable the rules you want to use within rules property of your .eslintrc:
```
{
  rules: {
    "@kaizen/no-draft-imports": "error",
  }
}
```
## Rules
| Rule Name  | Description | Autofixable? |
|---|---|---| 
| `kaizen/no-draft-imports` | Reports usages of draft components | yes |

