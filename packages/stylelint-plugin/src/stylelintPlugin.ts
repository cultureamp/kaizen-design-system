import stylelint from "stylelint"
import { Root } from "postcss"
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
import { Options } from "./types"

type StyleLintRuleFunction = (stylesheetNode: Root, options: Options) => void

type StyleLintRule = {
  name: string
  ruleFunction: StyleLintRuleFunction
}

export type StylelintPluginOptions = {
  /** Doesn't apply autofixes even when running with `--fix`, so that you can isolate a set of rules' fixes. */
  disableFixing?: boolean
  /** Report on and remove unused kaizen imports */
  unusedImports?: boolean
}

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
