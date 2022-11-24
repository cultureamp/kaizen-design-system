import { Root } from "postcss"
import stylelint from "stylelint"
import { allTokenImportsMustBeUsed } from "./rules/all-token-imports-must-be-used"
import { allUsedTokensMustBeImported } from "./rules/all-used-tokens-must-be-imported"
import { noInvalidUseOfTokens } from "./rules/no-invalid-use-of-tokens"
import { noInvalidUseOfVarTokensInEquations } from "./rules/no-invalid-use-of-var-tokens-in-equations"
import { noTokensInVariables } from "./rules/no-tokens-in-variables"
import { preferColorTokens } from "./rules/prefer-color-tokens"
import { useDeprecatedComponentLibraryHelpersScssImports } from "./rules/use-deprecated-component-library-helpers-scss-imports"
import { Options } from "./types"

type StyleLintRuleFunction = (stylesheetNode: Root, options: Options) => void

type StyleLintRule = {
  name: string
  ruleFunction: StyleLintRuleFunction
}

export type StylelintPluginOptions = {
  /** Doesn't apply autofixes even when running with `--fix`, so that you can isolate a set of rules' fixes. */
  disableFixing?: boolean
}

const rules: StyleLintRule[] = [
  noTokensInVariables,
  allUsedTokensMustBeImported,
  allTokenImportsMustBeUsed,
  noInvalidUseOfVarTokensInEquations,
  noInvalidUseOfTokens,
  preferColorTokens,
  useDeprecatedComponentLibraryHelpersScssImports,
]

export default rules.map(rule =>
  stylelint.createPlugin(
    `kaizen/${rule.name}`,
    (_, secondary: StylelintPluginOptions | undefined, context) =>
      (root, result) => {
        if (root?.source) {
          const language = /\.less$/.test(root.source.input.from)
            ? "less"
            : "scss"
          rule.ruleFunction(root, {
            fix: Boolean(!secondary?.disableFixing && context?.fix),
            language,
            reporter: ({ message, node, autofixAvailable }) =>
              stylelint.utils.report({
                ruleName: `kaizen/${rule.name}`,
                message: `${message}${
                  autofixAvailable ? " (autofix available)" : ""
                }`,
                node,
                result,
              }),
          })
        }
      }
  )
)
