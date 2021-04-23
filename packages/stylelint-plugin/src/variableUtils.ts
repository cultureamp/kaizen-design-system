import { WordNode } from "postcss-value-parser"
import { kaizenTokensByName } from "./kaizenTokens"
import { sassInterpolationPattern } from "./patterns"
import { Variable, KaizenToken } from "./types"

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

export const replaceTokenInVariable = (
  variable: Variable,
  replacementToken: KaizenToken
) => ({
  ...variable,
  name: replacementToken.name,
  nameWithPrefix: `${variable.prefix}${variable.name}`,
  kaizenToken: replacementToken,
})
