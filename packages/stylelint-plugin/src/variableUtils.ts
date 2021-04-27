import { Declaration, Root } from "postcss"
import postcssValueParser, { WordNode } from "postcss-value-parser"
import { kaizenTokensByName } from "./kaizenTokens"
import { sassInterpolationPattern } from "./patterns"
import { KaizenToken, ParsedKaizenVariable, Variable } from "./types"
import { walkVariablesOnValue } from "./walkers"

export const stringifyVariable = (variable: Variable) => {
  const variableWithPrefix = `${variable.prefix}${variable.name}`

  const negated = variable.negated
    ? `-${variableWithPrefix}`
    : variableWithPrefix
  const interpolated = variable.interpolated ? `#{${negated}}` : negated

  return interpolated
}

export const parseVariable = (node: WordNode): Variable | null => {
  // I wish postcss-value-parser was just a bit better at knowing how to handle a few more tokens like negating a variable or string interpolation.
  // It doesn't seem to be built directly for SASS or LESS, but it mostly works with them.
  // In order to get around this (mostly), we detect a few edge cases in this function.

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
    return {
      name,
      nameWithPrefix: cleanedValue,
      prefix: firstChar,
      kaizenToken: kaizenTokensByName[name],
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
) => {
  const nameWithPrefix = `${variable.prefix}${variable.name}`
  return {
    ...variable,
    node: { ...variable.node, value: nameWithPrefix },
    name: replacementToken.name,
    nameWithPrefix,
    kaizenToken: replacementToken,
  }
}

/**
 * Get a map of variables that are defined on the stylesheet.
 * Input: stylesheet,
 * Output: { "$foo": "red", "$other": "rgba(0, 0, 0, 0.1)". ...}
 */
export const getStylesheetVariables = (
  stylesheetNode: Root
): Record<string, string | undefined> => {
  const vars: Record<string, string | undefined> = {}
  stylesheetNode.walkDecls(decl => {
    if (isVariable(decl)) {
      // Add a new variable, and normalise it to be SASS
      vars[decl.prop.replace(/^@/, "$")] = decl.value
    }
  })
  return vars
}

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
 */
export const getStylesheetTransitiveKaizenVariables = (
  stylesheetNode: Root
) => {
  const stylesheetVariables = getStylesheetVariables(stylesheetNode)

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

const variablePattern = /^(@|\$)/
export const isVariable = (declaration: Declaration) =>
  variablePattern.test(declaration.prop)
