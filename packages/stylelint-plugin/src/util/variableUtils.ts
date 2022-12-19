import nanomemoize from "nano-memoize"
import {
  AtRule,
  ChildNode,
  Container,
  Declaration,
  Document,
  Root,
} from "postcss"
import postcssValueParser, { WordNode } from "postcss-value-parser"
import { KaizenToken, ParsedKaizenVariable, Variable } from "../types"
import { kaizenTokensByName } from "./kaizenTokens"
import { sassInterpolationPattern } from "./patterns"
import { walkVariablesOnValue } from "./walkers"

export const stringifyVariable = (variable: Variable): string => {
  const variableWithPrefix = `${variable.prefix}${variable.name}`

  const negated = variable.negated
    ? `-${variableWithPrefix}`
    : variableWithPrefix
  const interpolated = variable.interpolated ? `#{${negated}}` : negated

  return interpolated
}

/**
 * Given a postcss-value-parser WordNode, return either a Variable or null. The variable will contain a kaizenToken if there is a matching one.
 */
export const parseVariable = (node: WordNode): Variable | null => {
  // I wish postcss-value-parser was just a bit better at knowing how to handle a few more syntactic concepts like negating a variable or string interpolation.
  // It doesn't seem to be built directly for SASS or LESS, but it mostly works with them.
  // In order to get around this (partially), we detect a few edge cases in this function.

  const interpolated = sassInterpolationPattern.test(node.value)
  const valueWithoutInterpolation = node.value.replace(
    sassInterpolationPattern,
    "$1"
  )
  const negated = valueWithoutInterpolation[0] === "-"
  const cleanedValue = negated
    ? valueWithoutInterpolation.slice(1)
    : valueWithoutInterpolation
  const firstChar = cleanedValue[0]
  if (firstChar === "@" || firstChar === "$") {
    const name = cleanedValue.substr(1)
    const foundKaizenToken = kaizenTokensByName[name]
    return {
      name,
      nameWithPrefix: cleanedValue,
      prefix: firstChar,
      kaizenToken: foundKaizenToken,
      interpolated,
      negated,
      node,
    }
  }
  // Not a variable
  return null
}

/**
 * Given a Variable (which represents an instance of a variable within a Stylesheet), return a copy of it but replaces with a KaizenToken of your choice.
 */
export const replaceTokenInVariable = (
  variable: Variable,
  replacementToken: KaizenToken
): Variable => {
  const nameWithPrefix = `${variable.prefix}${replacementToken.name}`
  return {
    ...variable,
    node: { ...variable.node, value: nameWithPrefix },
    name: replacementToken.name,
    nameWithPrefix,
    kaizenToken: replacementToken,
  }
}

/**
 * Get a map of variables that are defined on a single block
 * Input: stylesheet,
 * Output: { "$foo": "red", "$other": "rgba(0, 0, 0, 0.1)". ...}
 */
const getVariablesInBlock = (block: ChildNode | Container): Record<string, string | undefined> => {
  if (!("nodes" in block)) return {}

  return block.nodes
    .filter(
      (node): node is Declaration => node.type === "decl" && isVariable(node)
    )
    .reduce(
      (acc, next) => ({ ...acc, [next.prop]: next.value }),
      {} as Record<string, string | undefined>
    )
}

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
    const nextVariables = {
      ...getVariablesInBlock(leafNode),
      // Here is the key part of scoping: we prioritise variables that are closer (currentVariables) over ones that are defined higher in the tree.
      ...currentVariables,
    }

    /*
      We don't want to try and extract top level variables from a postcss.Document type,
      because the immediate children of Document instances will only ever be stylesheets (Root types),
      and NOT declarations (which is what we care about in this function).
      FYI, a postcss.Document type represents a parsed HTML file containing 0 or more stylesheet/Root instances (for example but not limited to, <style></style> tags)

      Hence, if the parent of the current node (leafNode.parent) is a Document, take the blue pill and don't go down the rabbit hole.
     */
    if (leafNode.parent && !(leafNode.parent instanceof Document)) {
      return getLexicallyClosestVariablesRecursive(
        stylesheetNode,
        leafNode.parent as ChildNode,
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
const getLexicallyClosestVariables = (
  stylesheetNode: Root,
  leafNode: ChildNode | Container
): Record<string, string | undefined> =>
  getLexicallyClosestVariablesRecursive(stylesheetNode, leafNode, {})

/**
 * Similar to getStylesheetVariables but only returning those that contain KaizenTokens
 * Get a map of variables, that contain kaizen tokens, that are defined on the stylesheet.
 * Input: stylesheet,
 * Output: { "$foo": "$kz-color-wisteria-800", "$other": "5px $kz-spacing-md $kz-var-spacing-lg". ...}
 *
 */
export const getLexicalTransitiveKaizenVariables = (
  stylesheetNode: Root,
  leafNode: ChildNode | Container
): Record<string, { value: string; kaizenVariablesInValue: ParsedKaizenVariable[] }> => {
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

const variablePrefixPattern = /^(@|\$)/
export const isVariable = (node: Declaration | AtRule): boolean =>
  node.type === "atrule" ? false : variablePrefixPattern.test(node.prop)
