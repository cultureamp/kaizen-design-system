import { Root, AtRule, Plugin } from "postcss"
import { Options, RuleDefinition } from "../types"
import { spacingTokensMustBeUsedMessage } from "../messages"

import { walkDeclsWithKaizenTokens, walkVariables } from "../util/walkers"

export const transformCaGrid: Plugin = {
  postcssPlugin: "Transform Plugin",
  Declaration(decl) {
    if (decl.value.match(/(?:\$ca-grid\b(?!:|-))/)) {
      decl.value = decl.value.replace(/(?:\$ca-grid)/, "$spacing-medium")
    }
  },
}

export const spacingTokensMustBeUsed: RuleDefinition = {
  name: "spacing-tokens-must-be-used",
  ruleFunction: (stylesheedRootNode: Root, options: Options) => {
    walkVariables(
      stylesheedRootNode,
      ({ variable, variableNode, parsedValue, postcssNode }) => {
        console.log("walking the node", variable)

        if (
          postcssNode.type === "decl" &&
          postcssNode.value.match(/(?:\$ca-grid\b(?!:|-))/)
        ) {
          console.log("found a match for $ca-grid")

          if (options.fix) {
            postcssNode.value = postcssNode.value.replace(
              /(?:\$ca-grid)/,
              "$spacing-medium"
            )
          } else {
            options.reporter({
              message: spacingTokensMustBeUsedMessage,
              node: postcssNode,
              autofixAvailable: options.language === "scss",
            })
          }
        }
      }
    )
  },
}
