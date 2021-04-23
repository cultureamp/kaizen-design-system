import stylelint from "stylelint"
import {
  importsNoExtraneousRule,
  importsNoExtraneousRuleName,
} from "./rules/imports-no-extraneous"
import {
  importsNoUnusedRule,
  importsNoUnusedRuleName,
} from "./rules/imports-no-unused"
import {
  noDeprecatedTokensRule,
  noDeprecatedTokensRuleName,
} from "./rules/no-deprecated-tokens"
import {
  noInvalidEquationsRule,
  noInvalidEquationsRuleName,
} from "./rules/no-invalid-equations"
import {
  noInvalidFunctionsRule,
  noInvalidFunctionsRuleName,
} from "./rules/no-invalid-functions"
import { StylelintPluginOptions, StyleLintRule } from "./types"

const rules: StyleLintRule[] = [
  {
    name: importsNoExtraneousRuleName,
    ruleFunction: importsNoExtraneousRule,
  },
  {
    name: importsNoUnusedRuleName,
    ruleFunction: importsNoUnusedRule,
  },
  {
    name: noDeprecatedTokensRuleName,
    ruleFunction: noDeprecatedTokensRule,
  },
  {
    name: noInvalidEquationsRuleName,
    ruleFunction: noInvalidEquationsRule,
  },
  {
    name: noInvalidFunctionsRuleName,
    ruleFunction: noInvalidFunctionsRule,
  },
]

export default rules.map(rule =>
  stylelint.createPlugin(
    `kaizen/${rule.name}`,
    (primary, secondary: StylelintPluginOptions | undefined, context) => (
      root,
      result
    ) => {
      if (root?.source) {
        const language = /\.less$/.test(root.source.input.from)
          ? "less"
          : "scss"
        rule.ruleFunction(root, {
          fix: Boolean(secondary?.allowFixing && context?.fix),
          language,
          reporter: ({ message, node }) =>
            stylelint.utils.report({
              ruleName: `kaizen/${rule.name}`,
              message,
              node,
              result,
            }),
        })
      }
    }
  )
)
