import stylelint from "stylelint"
import { Root } from "postcss"
import { allUsedTokensMustBeImported } from "./rules/all-used-tokens-must-be-imported"
import { allTokenImportsMustBeUsed } from "./rules/all-token-imports-must-be-used"
import { preferVarTokens } from "./rules/prefer-var-tokens"
import { noInvalidUseOfVarTokensInEquations } from "./rules/no-invalid-use-of-var-tokens-in-equations"
import { noInvalidUseOfVarTokensInFunctions } from "./rules/no-invalid-use-of-var-tokens-in-functions"
import { noTokensInVariables } from "./rules/no-tokens-in-variables"
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
  noInvalidUseOfVarTokensInFunctions,
  preferVarTokens,
]

export default rules.map(rule =>
  stylelint.createPlugin(
    `kaizen/${rule.name}`,
    (_, secondary: StylelintPluginOptions | undefined, context) => (
      root,
      result
    ) => {
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
                autofixAvailable ? "(autofix avaialable)" : ""
              }`,
              node,
              result,
            }),
        })
      }
    }
  )
)
