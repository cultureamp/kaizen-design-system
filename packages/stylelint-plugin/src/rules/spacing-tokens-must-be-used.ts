import { inspect } from "util"
import postcss, { Root, AtRule, Plugin } from "postcss"
import { Options, RuleDefinition } from "../types"
import { spacingTokensMustBeUsedMessage } from "../messages"

import { walkDeclsWithKaizenTokens, walkVariables } from "../util/walkers"

export const transformCaGrid: Plugin = {
  postcssPlugin: "Transform Plugin",
  Declaration(decl) {
    if (decl.value.match(/(?:\$ca-grid\b(?!:|-))/)) {
      decl.value = decl.value.replace(/(?:\$ca-grid)/, "$spacing-md")
    }
  },
}

const replaceImport = (stylesheedRootNode: Root) => {
  stylesheedRootNode.walkAtRules(rule => {})
}

export const spacingTokensMustBeUsed: RuleDefinition = {
  name: "spacing-tokens-must-be-used",
  ruleFunction: (stylesheedRootNode: Root, options: Options) => {
    walkVariables(
      stylesheedRootNode,
      ({ variable, variableNode, parsedValue, postcssNode }) => {
        console.log("walking the node")

        if (
          postcssNode.type === "decl" &&
          postcssNode.value.match(/(?:\$ca-grid\b(?!:|-))/)
        ) {
          if (options.fix) {
            postcssNode.value = postcssNode.value.replace(
              /(?:\$ca-grid)/,
              "$spacing-md"
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
