import { Root, Plugin } from "postcss"
import { Options, RuleDefinition } from "../types"
import { spacingTokensMustBeUsedMessage } from "../messages"

import { walkVariables } from "../util/walkers"

export const transformCaGrid: Plugin = {
  postcssPlugin: "Transform Plugin",
  Declaration(decl) {
    if (decl.value.match(/(?:\$ca-grid\b(?!:|-))/)) {
      decl.value = decl.value.replace(/(?:\$ca-grid)/, "$spacing-md")
    }
  },
}

export const spacingTokensMustBeUsed: RuleDefinition = {
  name: "spacing-tokens-must-be-used",
  ruleFunction: (stylesheedRootNode: Root, options: Options) => {
    walkVariables(stylesheedRootNode, ({ postcssNode }) => {
      if (
        postcssNode.type === "decl" &&
        postcssNode.value.match(/(?:\$ca-grid\b(?!:|-))/)
      ) {
        if (options.fix) {
          const parentNode = postcssNode.root()
          postcssNode.value = postcssNode.value.replace(
            /(?:\$ca-grid)/,
            "$spacing-md"
          )
          parentNode?.walkAtRules("import", rule => {
            if (
              rule.params.match(
                /(?:"~@kaizen\/component-library\/styles\/grid")/
              )
            ) {
              rule.params = "~@kaizen/design-tokens/sass/spacing"
            }
          })
        } else {
          options.reporter({
            message: spacingTokensMustBeUsedMessage,
            node: postcssNode,
            autofixAvailable: options.language === "scss",
          })
        }
      }
    })
  },
}
