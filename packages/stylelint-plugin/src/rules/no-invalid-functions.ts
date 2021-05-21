import { Declaration, Root } from "postcss"
import postcssValueParser from "postcss-value-parser"
import { cssStandardFunctions } from "../cssStandardFunctions"
import { transformDecl } from "../functionTransformer"
import { kaizenTokensByName } from "../kaizenTokens"
import {
  invalidRgbaUsage,
  noMatchingRgbParamsVariableMessage,
  unsupportedFunctionMessage,
  unsupportedFunctionWithFixMessage,
} from "../messages"
import { containsKaizenVariable } from "../patterns"
import { Options, Variable } from "../types"
import { variablePrefixForLanguage } from "../utils"
import { isVariable, parseVariable } from "../variableUtils"
import { walkDeclsWithKaizenTokens, walkVariablesOnValue } from "../walkers"

// Returns true if a value contains an unmigratable function such as `add-tint`, and a Kaizen token. e.g. `add-tint($kz-color-wisteria-800, 10%)` -> true
// `add-tint(blue, 10%)` -> false
// e.g. `color: add-tint`
const containsUnmigratableFunctionAndKaizenToken = (
  declarationValue: string
) => {
  if (!containsKaizenVariable(declarationValue)) return false
  let found = false
  postcssValueParser(declarationValue).walk(node => {
    // assert node.value.length because value parser treats anything in brackets as a function
    if (
      node.type === "function" &&
      node.value.length &&
      !cssStandardFunctions.has(node.value)
    ) {
      found = true
    }
  })
  return found
}

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
  const parsed = parseInt(value.replace(/\%/, ""), 10)
  if (isNaN(parsed)) {
    return "NaN"
  }
  return parsed / 100
}

/*
  Return a replacement rgb-params variable
*/
const getAndReportOnReplacementRgbParamsVariable = (
  variable: Variable,
  decl: Declaration,
  options: Options
) => {
  const variablePrefix = variablePrefixForLanguage(options.language)
  if (!variable.kaizenToken) return undefined

  if (!variable.kaizenToken.cssVariable) {
    const fixedVariable =
      kaizenTokensByName[
        variable.kaizenToken.name.replace("kz", "kz-var") + "-rgb-params"
      ]
    if (!fixedVariable) {
      options.reporter({
        message: noMatchingRgbParamsVariableMessage(variable.kaizenToken.name),
        node: decl,
        autofixAvailable: false,
      })
      return undefined
    }
    if (options.fix && !isVariable(decl)) {
      return `${variablePrefix}${fixedVariable.name}`
    } else {
      options.reporter({
        message: invalidRgbaUsage(fixedVariable.name),
        node: decl,
        autofixAvailable: !isVariable(decl),
      })
    }
  }

  // If the value is not like `123, 123, 123`, AND it's a CSS variable, it's not valid
  if (
    variable.kaizenToken.cssVariable &&
    variable.kaizenToken.cssVariable.fallback &&
    !isRgbTriple(variable.kaizenToken.cssVariable.fallback)
  ) {
    const fixedVariable =
      kaizenTokensByName[variable.kaizenToken.name + "-rgb-params"]
    if (!fixedVariable) {
      options.reporter({
        message: noMatchingRgbParamsVariableMessage(variable.kaizenToken.name),
        node: decl,
        autofixAvailable: false,
      })
      return undefined
    }
    if (options.fix && !isVariable(decl)) {
      return `${variablePrefix}${fixedVariable.name}`
    } else {
      options.reporter({
        message: invalidRgbaUsage(fixedVariable.name),
        node: decl,
        autofixAvailable: !isVariable(decl),
      })
    }
  }
}

// Does the value look like `123, 123, 123`? Used for determining whether an rgba function is used with the correct variable
const isRgbTriple = (value: string) =>
  /^\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*$/.test(value)

export const noInvalidFunctionsRuleName = "no-invalid-functions"
export const noInvalidFunctionsOnDeclaration = (
  decl: Declaration,
  options: Options
) => {
  const fixAddAlpha = (functionName: string, ...params: string[]): string => {
    const original = `${functionName}(${params.join(", ")})`
    const first = params[0]
    const second = params[1]
    const parsedFirst = postcssValueParser(first).nodes[0]
    if (parsedFirst.type !== "word") return original
    const variable = parseVariable(parsedFirst)
    if (!variable) return original
    const replacementVariable = getAndReportOnReplacementRgbParamsVariable(
      variable,
      decl,
      options
    )
    if (!replacementVariable) return original

    const fixedSecondParameter = parsePercentage(second)

    if (fixedSecondParameter === "NaN") return original

    return `rgba(${replacementVariable}, ${fixedSecondParameter})`
  }
  const fixRgbAndRgba = (functionName: string, ...params: string[]) => {
    const [first, ...rest] = params
    const original = `${functionName}(${params.join(", ")})`
    const parsedFirst = postcssValueParser(first).nodes[0]
    if (parsedFirst.type !== "word") return original
    const variable = parseVariable(parsedFirst)
    if (!variable) return original
    const modifiedFirstParameter =
      getAndReportOnReplacementRgbParamsVariable(variable, decl, options) ||
      first

    // If there is no 2nd parameter, it must be an `rgb` function. Or, an invalid rgba function, in which case just use rgb
    if (!rest.length) {
      return `rgb(${modifiedFirstParameter})`
    } else {
      return `rgba(${modifiedFirstParameter}${
        rest.length ? ", " + rest.join(", ") : ""
      })`
    }
  }

  const fixTransparentize = (functionName: string, ...params: string[]) => {
    const [first, second] = params
    const original = `${functionName}(${params.join(", ")})`
    const parsedFirst = postcssValueParser(first).nodes[0]
    if (parsedFirst.type !== "word") return original
    const variable = parseVariable(parsedFirst)
    if (!variable) return original
    const replacementVariable =
      getAndReportOnReplacementRgbParamsVariable(variable, decl, options) ||
      first

    const fixedSecondParameter = parsePercentageOrDecimal(second)

    if (fixedSecondParameter === "NaN") return original

    return `rgba(${replacementVariable}, ${1 - fixedSecondParameter})`
  }

  let reported = false

  const replaceTokensWithTheirValues = (
    functionName: string,
    ...params: string[]
  ) => {
    const paramsString = params.join(", ")
    const sourceValue = `${functionName}(${paramsString})`

    const astOfParams = postcssValueParser(paramsString)
    walkVariablesOnValue(astOfParams, (node, variable) => {
      if (variable.kaizenToken) {
        // Not the prettiest, i know, but this mutates a node value within the array of nodes in `astOfParams`.
        // It's the way the library has been designed so it's not easy to change.

        // Use the kaizen token cssVariable fallback value first, then the token value if it's not a CSS variable, then the same node value if it's not a kaizen token.
        const value =
          variable.kaizenToken?.cssVariable?.fallback ??
          variable.kaizenToken?.value ??
          node.value
        node.value = value
      }
    })

    if (options.fix) {
      return `${functionName}(${postcssValueParser.stringify(
        astOfParams.nodes
      )})`
    } else {
      reported = true
      options.reporter({
        autofixAvailable: true,
        message: unsupportedFunctionWithFixMessage,
        node: decl,
      })
      return sourceValue
    }
  }

  const newValue = transformDecl(decl.value, {
    rgba: fixRgbAndRgba,
    rgb: fixRgbAndRgba,
    "add-alpha": fixAddAlpha,
    transparentize: fixTransparentize,
    mix: replaceTokensWithTheirValues,
    darken: replaceTokensWithTheirValues,
    lighten: replaceTokensWithTheirValues,
    saturate: replaceTokensWithTheirValues,
    desaturate: replaceTokensWithTheirValues,
    "add-tint": replaceTokensWithTheirValues,
    "add-shade": replaceTokensWithTheirValues,
    "adjust-hue": replaceTokensWithTheirValues,
  })

  // TODO: Figure out a method that doesn't just bail out when it finds an unmigratable (there could be fixable values within the same declaration)
  // We don't want to report twice for the same declaration. If reported is true, at least one report has been fired from within the function transformers.
  // The `newValue` might not have any Kaizen tokens in it anymore due to replacing them with their values (e.g. HEX or something else)
  if (containsUnmigratableFunctionAndKaizenToken(newValue) && !reported) {
    options.reporter({
      autofixAvailable: false,
      message: unsupportedFunctionMessage,
      node: decl,
    })
  }

  if (options.fix && newValue !== decl.value && !isVariable(decl)) {
    decl.replaceWith(
      decl.clone({
        value: newValue,
      })
    )
  }
}

/**
 * This will lint the functions within a declaration, and migrate anything it can (such as with rgb, rgba and add-alpha)
 */
export const noInvalidFunctionsRule = (
  stylesheetNode: Root,
  options: Options
) => {
  walkDeclsWithKaizenTokens(stylesheetNode, ({ postcssNode }) => {
    noInvalidFunctionsOnDeclaration(postcssNode, options)
  })
}
export const declContainsInvalidFunctions = (
  postcssNode: Declaration,
  options: Options
) => {
  let reported = 0
  noInvalidFunctionsOnDeclaration(postcssNode, {
    ...options,
    fix: false,
    reporter: () => {
      reported++
    },
  })
  return reported > 0
}
