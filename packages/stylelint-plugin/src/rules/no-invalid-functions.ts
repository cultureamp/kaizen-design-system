import { Declaration, Root } from "postcss"
import postcssValueParser from "postcss-value-parser"
import {
  invalidRgbaUsage,
  noMatchingRgbParamsVariableMessage,
  unsupportedFunctionMessage,
} from "../errors"
import { transformDecl } from "../functionTransformer"
import { kaizenTokensByName } from "../kaizenTokens"
import { containsUnmigratableFunction } from "../patterns"
import { Options } from "../types"
import { variablePrefixForLanguage } from "../utils"
import { walkDeclsWithKaizenTokens, walkVariablesOnValue } from "../walkers"

// Does the value look like `123, 123, 123`? Used for determining whether an rgba function is used with the correct variable
const isRgbTriple = (value: string) =>
  /^\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*$/.test(value)

export const noInvalidFunctionsRuleName = "no-invalid-functions"
export const noInvalidFunctionsOnDeclaration = (
  decl: Declaration,
  options: Options
) => {
  const variablePrefix = variablePrefixForLanguage(options.language)

  const fixRgbaOrAddAlpha = (
    _functionName: string,
    first: string,
    ...rest: string[]
  ) => {
    const parsedFirst = postcssValueParser(first)
    walkVariablesOnValue(parsedFirst, (node, variable) => {
      // Ignore anything that isn't a kaizen token
      if (!variable.kaizenToken) return

      if (!variable.kaizenToken.cssVariable) {
        const fixedVariable =
          kaizenTokensByName[
            variable.kaizenToken.name.replace("kz", "kz-var") + "-rgb-params"
          ]
        if (!fixedVariable) {
          options.reporter({
            message: noMatchingRgbParamsVariableMessage(
              variable.kaizenToken.name
            ),
            node: decl,
            autofixAvailable: false,
          })
          return false
        }
        if (options.fix) {
          node.value = `${variablePrefix}${fixedVariable.name}`
        } else {
          options.reporter({
            message: invalidRgbaUsage(fixedVariable.name),
            node: decl,
            autofixAvailable: true,
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
            message: noMatchingRgbParamsVariableMessage(
              variable.kaizenToken.name
            ),
            node: decl,
            autofixAvailable: false,
          })
          return false
        }
        if (options.fix) {
          node.value = `${variablePrefix}${fixedVariable.name}`
        } else {
          options.reporter({
            message: invalidRgbaUsage(fixedVariable.name),
            node: decl,
            autofixAvailable: true,
          })
        }
      }
    })

    // If there is no 2nd parameter, it must be an `rgb` function. Or, an invalid rgba function, in which case just use rgb
    if (!rest.length) {
      return `rgb(${postcssValueParser.stringify(parsedFirst.nodes)})`
    } else {
      return `rgba(${postcssValueParser.stringify(parsedFirst.nodes)}${
        rest.length ? ", " + rest.join(", ") : ""
      })`
    }
  }

  // TODO: Working on a method that doesn't just bail out when it finds an unmigratable
  // TODO: Here you could actually perform a calculation to spit out a hex value from color manipulation functions if you wanted...
  /*   const reportCssVariables = (functionName: string, ...params: string[]) => {
    let reported = false
    // For each parameter within the function, parse it and see if it contains a CSS variable token
    params.forEach(param => {
      walkVariablesOnValue(postcssValueParser(param), (node, variable) => {
        if (
          variable.kaizenToken &&
          variable.kaizenToken.cssVariable &&
          !reported
        ) {
          options.reporter({
            message: `${variable.kaizenToken.name} is a CSS variable. You can't use a CSS variable within a '${functionName} function'`,
            node: decl,
            autofixAvailable: false,
          })

          reported = true
        }
      })
    })

    return `${functionName}(${params.join(", ")})`
  }
 */
  if (containsUnmigratableFunction(decl.value)) {
    options.reporter({
      autofixAvailable: false,
      message: unsupportedFunctionMessage,
      node: decl,
    })
  }

  const newValue = transformDecl(decl.value, {
    rgba: fixRgbaOrAddAlpha,
    rgb: fixRgbaOrAddAlpha,
    "add-alpha": fixRgbaOrAddAlpha,
    /*     "add-shade": reportCssVariables,
    "add-tint": reportCssVariables,
    mix: reportCssVariables,
    darken: reportCssVariables,
    lighten: reportCssVariables, */
  })
  if (options.fix && newValue !== decl.value) {
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
    if (postcssNode.type === "decl" && !postcssNode.variable) {
      noInvalidFunctionsOnDeclaration(postcssNode, options)
    }
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
