import { AtRule, Declaration, Root } from "postcss"
import postcssValueParser from "postcss-value-parser"
import { ParsedKaizenVariable, Variable } from "./types"
import { parseVariable } from "./variableUtils"

/**
 * Given a parsed value (from postcss-value-parser), visit any less or sass variables that show up
 */
export const walkVariablesOnValue = (
  parsedValue: postcssValueParser.ParsedValue,
  visitor: (node: postcssValueParser.WordNode, variable: Variable) => void
) => {
  parsedValue.walk(node => {
    if (node.type === "word") {
      const variable = parseVariable(node)
      if (variable) {
        return visitor(node, variable)
      }
    }
  })
}

/**
 * Visit any less or sass variables within an entire stylesheet
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
          node: variableNode,
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

/**
 * Works the same way as postcssValueParser.ParsedValue.walk except the visitor knows about it's parent (if one exists). Currently, value parser will only put children nodes in functions, and a function with no name is just an expression within ( .. ) which won't be treated as a parent within our implementation.
 */
export const walkWithParent = (
  _value: postcssValueParser.ParsedValue,
  _visitor: (
    node: postcssValueParser.Node,
    parent?: postcssValueParser.FunctionNode
  ) => void | false
) => {
  // We want an inner walker so that we can recurse without the context parameter (currentParent) in the parent function (users shouldn't know about it)
  const innerWalker = (
    nodes: postcssValueParser.Node[],
    visitor: (
      node: postcssValueParser.Node,
      parent?: postcssValueParser.FunctionNode
    ) => void | false,
    currentParent?: postcssValueParser.FunctionNode
  ): void | false => {
    for (const node of nodes) {
      const shouldContinue = visitor(node, currentParent)
      if (shouldContinue === false) return false
      // If there are children, and the node is a function, AND the function has a name (it's not just an expression wrapped in "( )" )
      if ("nodes" in node) {
        if (node.type === "function" && node.value.length) {
          if (innerWalker(node.nodes, visitor, node) === false) return false
        } else {
          if (innerWalker(node.nodes, visitor, currentParent) === false)
            return false
        }
      }
    }
  }

  innerWalker(_value.nodes, _visitor)
}
