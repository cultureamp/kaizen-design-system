import { Declaration, Root } from "postcss"
import postcssValueParser from "postcss-value-parser"
import { cssStandardFunctions } from "../util/cssStandardFunctions"
import { transformDecl } from "../util/functionTransformer"
import { kaizenTokensByName } from "../util/kaizenTokens"
import {
  invalidRgbaUsage,
  noMatchingRgbParamsVariableMessage,
  unsupportedFunctionMessage,
} from "../messages"
import { Options, Variable } from "../types"
import { variablePrefixForLanguage } from "../util/utils"
import { isVariable, parseVariable } from "../util/variableUtils"
import { walkDeclsWithKaizenTokens } from "../util/walkers"

// Returns true if a value contains an unmigratable function such as `add-tint`.
// e.g. `color: add-tint`
const containsUnmigratableFunction = (declarationValue: string) => {
  let found = false
  postcssValueParser(declarationValue).walk(node => {
    // Most CSS standard functions are allowed to contain CSS variables.
    const allowedFunctions = new Set(cssStandardFunctions)
    // SASS overloads the "saturate" function and computes it at compile time.
    // We therefore don't allow it to be used with CSS variable tokens.
    allowedFunctions.delete("saturate")
    if (
      node.type === "function" &&
      // assert node.value.length because value parser treats anything in brackets as a function
      node.value.length &&
      !allowedFunctions.has(node.value)
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

export const noInvalidFunctionsRuleName =
  "no-invalid-use-of-var-tokens-in-functions"
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

  const newValue = transformDecl(decl.value, {
    rgba: fixRgbAndRgba,
    rgb: fixRgbAndRgba,
    "add-alpha": fixAddAlpha,
    transparentize: fixTransparentize,
  })

  if (containsUnmigratableFunction(newValue)) {
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

/**
 * Check if a declaration contains a function that we cannot support with CSS Variables.
 * This is exported so other rules can avoid transforming tokens to CSS Variables versions when they are used in unsupported functions.
 **/
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
