import nanomemoize from "nano-memoize"
import { ChildNode, Container, Declaration, Root } from "postcss"
import postcssValueParser from "postcss-value-parser"
import { operatorPattern } from "./patterns"
import { Language, ParsedKaizenVariable, Variable } from "./types"
import { variablePrefixForLanguage } from "./utils"
import { walkVariablesOnValue } from "./walkers"

/**
 * Given that we represent some variables in our own way, we need a way to stringify them.
 * This will stringify a variable with respect to it's polarity (if its preceeded by an immediate negative sign), and if its interpolated (surrounded by #{})
 */
export const stringifySassVariable = (variable: Variable) => {
  const variableWithPrefix = `${variable.prefix}${variable.name}`

  const negated = variable.negated
    ? `-${variableWithPrefix}`
    : variableWithPrefix
  const interpolated = variable.interpolated ? `#{${negated}}` : negated

  return interpolated
}

/**
 * Get a map of variables that are defined on a single block
 * Input: stylesheet,
 * Output: { "$foo": "red", "$other": "rgba(0, 0, 0, 0.1)". ...}
 */
export const getVariablesInBlock = (block: Container) =>
  block.nodes
    .filter(
      (node): node is Declaration => node.type === "decl" && isVariable(node)
    )
    .reduce(
      (acc, next) => ({ ...acc, [next.prop]: next.value }),
      {} as Record<string, string | undefined>
    )

/**
 * See the function below for the description. It does the same thing, but accepts another accumulator parameter, and is recursive.
 * We did this because we didn't want the consumer to worry or know about the other accumulator parameter.
 * We also memoized it because we'll be calling it often in some cases with the same parameters, and it's recursive
 */
const getLexicallyClosestVariablesRecursive = nanomemoize(
  (
    stylesheetNode: Root,
    leafNode: ChildNode | Container,
    currentVariables: Record<string, string | undefined>
  ): Record<string, string | undefined> => {
    const nextVariables =
      "nodes" in leafNode
        ? {
            ...getVariablesInBlock(leafNode),
            // Here is the key part of scoping: we prioritise variables that are closer (currentVariables) over ones that are defined higher in the tree.
            ...currentVariables,
          }
        : currentVariables

    if (leafNode.parent) {
      return getLexicallyClosestVariablesRecursive(
        stylesheetNode,
        leafNode.parent,
        nextVariables
      )
    } else {
      return nextVariables
    }
  }
)

/**
 * Get a map of variables, similar to getVariablesInBlock, but starting from the childNode and concatenating variables as we move up the tree
 * Input: stylesheet, and a leaf node
 * Output: { "$foo": "red", "$other": "rgba(0, 0, 0, 0.1)", "$variableNextToLeafNode": "red", ...}
 *
 */
export const getLexicallyClosestVariables = (
  stylesheetNode: Root,
  leafNode: ChildNode | Container
): Record<string, string | undefined> =>
  getLexicallyClosestVariablesRecursive(stylesheetNode, leafNode, {})

/**
 * Turn a map of variables, most likely the return value of getStylesheetVariables, into a string that you can add to a stylesheet
 */
export const stringifyStylesheetVariables = (
  variablesWithPrefixes: Record<string, string | undefined>
) => {
  let output = ""
  Object.entries(variablesWithPrefixes).forEach(([key, value]) => {
    output += `${key}: ${value};\n`
  })
  return output
}

/**
 * Similar to getStylesheetVariables but only returning those that conain KaizenTokens
 * Get a map of variables, that contain kaizen tokens, that are defined on the stylesheet.
 * Input: stylesheet,
 * Output: { "$foo": "$kz-color-wisteria-800", "$other": "5px $kz-spacing-md $kz-var-spacing-lg". ...}
 *
 */
export const getLexicalTransitiveKaizenVariables = (
  stylesheetNode: Root,
  leafNode: ChildNode | Container
) => {
  const stylesheetVariables = getLexicallyClosestVariables(
    stylesheetNode,
    leafNode
  )

  return Object.entries(stylesheetVariables).reduce((acc, [key, value]) => {
    if (!value) return acc
    const found = [] as ParsedKaizenVariable[]
    // Go through the value until we find a kaizen token
    walkVariablesOnValue(postcssValueParser(value), (_, variable) => {
      if (variable.kaizenToken) {
        found.push({ ...variable, kaizenToken: variable.kaizenToken })
      }
    })
    if (found.length) {
      return {
        ...acc,
        [key]: {
          value,
          kaizenVariablesInValue: found,
        },
      }
    }
    return acc
  }, {} as Record<string, { value: string; kaizenVariablesInValue: ParsedKaizenVariable[] }>)
}

export const variablePrefixPattern = /^(@|\$)/
export const isVariable = (declaration: Declaration) =>
  variablePrefixPattern.test(declaration.prop)

/**
 * Go from kz-var-color-white -> $kz-var-color-white | @kz-var-color-white, depending on the language
 */
export const prefixVariableName = (language: Language, name: string) =>
  `${variablePrefixForLanguage(language)}${name}`

export const isOperator = (value: string) => operatorPattern.test(value)
