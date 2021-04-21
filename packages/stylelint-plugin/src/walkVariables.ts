import { Root, Declaration, AtRule } from "postcss"
import postcssValueParser from "postcss-value-parser"
import { KaizenToken, kaizenTokensByName } from "./kaizenTokens"

export type Variable = {
  name: string
  nameWithPrefix: string
  prefix: "$" | "@"
  kaizenToken?: KaizenToken
}

/**
 * Given a parsed value (from postcss-value-parser), visit any less or sass variables that show up
 */
export const walkVariablesOnValue = (
  parsedValue: postcssValueParser.ParsedValue,
  visitor: (node: postcssValueParser.WordNode, variable: Variable) => void
) => {
  parsedValue.walk(node => {
    const firstChar = node.value[0]
    if (node.type === "word" && (firstChar === "@" || firstChar === "$")) {
      const name = node.value.substr(1)
      visitor(node, {
        name,
        nameWithPrefix: node.value,
        prefix: firstChar,
        kaizenToken: kaizenTokensByName[name],
      })
    }
  })
}

/**
 * Given the value part of a declaration (e.g. `5px 0 10px 0`, `#ff0000`), visit any less or sass variables that show up
 */
export const walkVariables = (
  stylesheetNode: Root,
  visitor: (params: {
    postcssNode: Declaration | AtRule
    parsedValue: postcssValueParser.ParsedValue
    variableNode: postcssValueParser.WordNode
    variable: Variable
    value: string
  }) => void | false
) => {
  stylesheetNode.walk(postcssNode => {
    if (postcssNode.type !== "decl" && postcssNode.type !== "atrule") return

    const value =
      postcssNode.type === "decl"
        ? postcssNode.value
        : postcssNode.type === "atrule"
        ? postcssNode.params
        : undefined

    if (!value) return
    const parsedValue = postcssValueParser(value)

    walkVariablesOnValue(parsedValue, (variableNode, variable) => {
      visitor({ postcssNode, value, parsedValue, variableNode, variable })
    })
  })
}

type ParsedKaizenVariable = Variable & {
  kaizenToken: KaizenToken
  variableNode: postcssValueParser.WordNode
}

/**
 * Walk through a whole stylesheet, and visit only the Declarations (e.g. `color: $kz-spacing-md`) that contain kaizen tokens. You're also given a list of the kaizen variables that show up within the declaration.
 * You could use the functions above to walk through variables again within your visitor function.
 */
export const walkDeclsWithKaizenTokens = (
  stylesheetNode: Root,
  visitor: (params: {
    postcssNode: Declaration | AtRule
    parsedValue: postcssValueParser.ParsedValue
    kaizenVariables: ParsedKaizenVariable[]
    value: string
  }) => void | false
) => {
  stylesheetNode.walk(postcssNode => {
    if (postcssNode.type !== "decl" && postcssNode.type !== "atrule") return

    const value =
      postcssNode.type === "decl"
        ? postcssNode.value
        : postcssNode.type === "atrule"
        ? postcssNode.params
        : undefined

    if (!value) return
    const parsedValue = postcssValueParser(value)
    const kaizenVariables: ParsedKaizenVariable[] = []
    walkVariablesOnValue(parsedValue, (variableNode, variable) => {
      if (variable.kaizenToken) {
        kaizenVariables.push({
          ...variable,
          kaizenToken: variable.kaizenToken,
          variableNode,
        })
      }
    })
    if (kaizenVariables.length)
      visitor({ postcssNode, parsedValue, kaizenVariables, value })
  })
}
/*
  Visit all kaizen tokens within a stylesheet
*/
export const walkKaizenTokens = (
  stylesheetNode: Root,
  visitor: (params: {
    postcssNode: Declaration | AtRule
    parsedValue: postcssValueParser.ParsedValue
    variableNode: postcssValueParser.Node
    variable: ParsedKaizenVariable
    value: string
  }) => void | false
) => {
  walkVariables(stylesheetNode, params => {
    if (params.variable.kaizenToken)
      visitor(
        params as typeof params & {
          variable: ParsedKaizenVariable
        }
      )
  })
}
