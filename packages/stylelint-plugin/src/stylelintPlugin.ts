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
import {
  noTransitiveTokensRule,
  noTransitiveTokensRuleName,
} from "./rules/no-transitive-tokens"
import {
  colorsPreferTokenRule,
  colorsPreferTokenRuleName,
} from "./rules/colors-prefer-token"
import { StylelintPluginOptions, StyleLintRule } from "./types"

const rules: StyleLintRule[] = [
  {
    name: noTransitiveTokensRuleName,
    ruleFunction: noTransitiveTokensRule,
  },
  {
    name: importsNoExtraneousRuleName,
    ruleFunction: importsNoExtraneousRule,
  },
  {
    name: importsNoUnusedRuleName,
    ruleFunction: importsNoUnusedRule,
  },
  {
    name: noInvalidEquationsRuleName,
    ruleFunction: noInvalidEquationsRule,
  },
  {
    name: noInvalidFunctionsRuleName,
    ruleFunction: noInvalidFunctionsRule,
  },
  {
    name: noDeprecatedTokensRuleName,
    ruleFunction: noDeprecatedTokensRule,
  },
  {
    name: colorsPreferTokenRuleName,
    ruleFunction: colorsPreferTokenRule,
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
