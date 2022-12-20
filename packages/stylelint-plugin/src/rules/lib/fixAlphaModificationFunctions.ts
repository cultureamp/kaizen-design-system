import postcssValueParser from "postcss-value-parser"
import { deprecatedTokenReplacements } from "../../../deprecatedTokens"
import {
  cantFindReplacementTokenForDeprecatedMessage,
  noMatchingRgbParamsVariableMessage,
} from "../../messages"
import { KaizenToken } from "../../types"
import { transformDecl } from "../../util/functionTransformer"
import { kaizenTokensByName } from "../../util/kaizenTokens"
import {
  parseVariable,
  replaceTokenInVariable,
  stringifyVariable,
} from "../../util/variableUtils"

/*
  We want to use percentages consistently, so, given a string that may be a percentage or a decimal, always return the decimal form.
  This differs from the function below, `convertPercentage`, in that this expects a valid ratio value, e.g. a decimal number OR a percentage.
  `convertPercentage` only supports percentage values, with an optional percentage sign, meaning it can't disambiguate between decimals and percentages.
*/
const parsePercentageOrDecimal = (
  percentageOrDecimal: string
): number | "NaN" => {
  if (percentageOrDecimal.indexOf("%") !== -1) {
    return parsePercentage(percentageOrDecimal)
  } else {
    const parsed = parseFloat(percentageOrDecimal)
    if (isNaN(parsed)) {
      return "NaN"
    } else {
      return parsed
    }
  }
}

/**
 * Given a string like "50%", "40%", "30", "15" etc (you don't have to pass in the percentage sign), return a decimal like 0.5, 0.4, 0.3 etc
 */
const parsePercentage = (value: string): number | "NaN" => {
  // Add-alpha can be used without a percentage sign, that won't fly.
  // Fix the percentage sign, then convert to a decimal for usage in RGBA
  const parsed = parseFloat(value.replace(/\%/, ""))
  if (isNaN(parsed)) {
    return "NaN"
  }
  return parsed / 100
}

/*
  Return a replacement rgb variable if required.
  Will also migrate a deprecated variable within an alpha manipulation function
*/
const getReplacementRgbTriple = (
  kaizenTokenName: string
):
  | { replacement: KaizenToken }
  /* For example, the token is `$kz-deprecated-color-lapis`, and there is no replacement. */
  | "CantFindReplacementForDeprecatedToken"
  /* Protecting against mistakes where there is no matching -rgb token */
  | "NoRGBTripleReplacement"
  /* The token is already an RGB triple, or is not a CSS variable. */
  | "NoReplacementNeeded"
  /* The token name that was passed was neither found in @kaizen/design-tokens or the deprecated tokens list */
  | "NotAKaizenToken" => {
  // We'll decide on what this variable should be using a series of rules, then use it as the subject for making replacements
  let kaizenTokenSubject: KaizenToken

  const currentKaizenToken = kaizenTokensByName[kaizenTokenName]
  const replacement =
    kaizenTokensByName[deprecatedTokenReplacements.get(kaizenTokenName) || ""]
  const isDeprecated = deprecatedTokenReplacements.has(kaizenTokenName)

  if (replacement) {
    kaizenTokenSubject = replacement
  } else if (!isDeprecated && currentKaizenToken) {
    kaizenTokenSubject = currentKaizenToken
  } else if (!replacement && isDeprecated) {
    return "CantFindReplacementForDeprecatedToken"
  } else if (!isDeprecated && !currentKaizenToken) {
    return "NotAKaizenToken"
  } else {
    return "NoReplacementNeeded"
  }

  // If the value is not like `123, 123, 123`, AND it's a CSS variable, it's not valid
  if (
    kaizenTokenSubject.cssVariable &&
    kaizenTokenSubject.cssVariable.fallback &&
    !isRgbTriple(kaizenTokenSubject.cssVariable.fallback)
  ) {
    const fixedVariable = kaizenTokensByName[kaizenTokenSubject.name + "-rgb"]
    if (!fixedVariable) {
      return "NoRGBTripleReplacement"
    }
    return { replacement: fixedVariable }
  }

  return "NoReplacementNeeded"
}

// Does the value look like `123, 123, 123`? Used for determining whether an rgba function is used with the correct variable
const isRgbTriple = (value: string): boolean =>
  /^\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*$/.test(value)

/**
 * Given a CSS declaration value, find any alpha modifying functions like add-alpha, transparentize, or rgba, then normalise them to either rgba or rgb,
 * and ensure that a RGB triple Kaizen token is being used, e.g. `$color-purple-100-rgb` rather than `$color-purple-100`.
 * It also knows how to migrate from a deprecated variable within a function, e.g. `$kz-color-wisteria-100` -> `$color-purple-100-rgb`
 */
export const fixAlphaModificationFunctions = (
  /** The value part of a declaration: e.g. the string "5px 10px" within "padding: 5px 10px" */
  value: string
): { newValue: string; errors: string[] } => {
  // We'll keep track of errors, then return them at the end so the consumer can decide what to do
  const errors: string[] = []

  // The function transformer which will be ran over add-alpha(), rgb(), rgba(), transparentize() etc.
  const fixAlphaModificationFunction = (
    functionName: string,
    ...params: string[]
  ): string => {
    const [firstParameter, secondParameter] = params

    // The original value without any modifications, e.g. something unfixed `rgba($kz-color-wisteria-100, 0.1)`
    const originalValueWithoutModification = `${functionName}(${params.join(
      ", "
    )})`

    // Parse the first parameter within the function. We can use this AST node to determine more informaiton.
    const parsedFirstParameter = postcssValueParser(firstParameter).nodes[0]

    // We only care about word nodes, because we only care about when a Kaizen token is the first parameter.
    if (parsedFirstParameter.type !== "word")
      return originalValueWithoutModification

    // Further parse the AST word node, which tells us whether it's interpolated, negated, and if it is a Kaizen token.
    const variable = parseVariable(parsedFirstParameter)

    // We only care about variables
    if (!variable) {
      return originalValueWithoutModification
    }

    const isVariableCurrentKaizenToken = !!variable?.kaizenToken
    const isVariableDeprecatedKaizenToken = deprecatedTokenReplacements.has(
      variable.name
    )

    // A variable is a Kaizen token if it exists within @kaizen/design-tokens, or it's within the deprecated tokens map.
    const isKaizenToken =
      isVariableCurrentKaizenToken || isVariableDeprecatedKaizenToken

    // We only care about variables that are Kaizen tokens.
    if (!isKaizenToken) return originalValueWithoutModification

    // See if we need a replacement, and if there is any reason why we can't make a replacement
    const replacementResult = getReplacementRgbTriple(variable.name)

    let replacement: KaizenToken

    switch (replacementResult) {
      case "NoReplacementNeeded":
      case "NotAKaizenToken":
        return originalValueWithoutModification

      case "CantFindReplacementForDeprecatedToken":
        errors.push(cantFindReplacementTokenForDeprecatedMessage(variable.name))
        return originalValueWithoutModification

      case "NoRGBTripleReplacement":
        errors.push(noMatchingRgbParamsVariableMessage(variable.name))
        return originalValueWithoutModification

      default:
        replacement = replacementResult.replacement
    }

    // This code shouldn't be reached if there is an issue or no need for a replacement.
    const stringifiedReplacement = stringifyVariable(
      replaceTokenInVariable(variable, replacement)
    )

    switch (functionName) {
      case "rgb":
        return `rgb(${stringifiedReplacement})`
      case "rgba":
        return `rgba(${stringifiedReplacement}, ${secondParameter})`
      case "transparentize":
        const normedTransparentizeAmount =
          parsePercentageOrDecimal(secondParameter)

        // This is a very unlikely edge case, so it's probably not worth reporting, and the consumer's compiler should complain about an issue like this.
        if (normedTransparentizeAmount === "NaN")
          return originalValueWithoutModification

        return `rgba(${stringifiedReplacement}, ${
          1 - normedTransparentizeAmount
        })`

      case "add-alpha":
        const normedAddAlphaPercentage = parsePercentage(secondParameter)

        if (normedAddAlphaPercentage === "NaN")
          return originalValueWithoutModification

        return `rgba(${stringifiedReplacement}, ${normedAddAlphaPercentage})`
    }

    return originalValueWithoutModification
  }

  const newValue = transformDecl(value, {
    rgba: fixAlphaModificationFunction,
    rgb: fixAlphaModificationFunction,
    "add-alpha": fixAlphaModificationFunction,
    transparentize: fixAlphaModificationFunction,
  })

  return { newValue, errors }
}
