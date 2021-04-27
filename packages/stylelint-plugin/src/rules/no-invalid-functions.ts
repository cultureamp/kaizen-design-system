import { Declaration, Root } from "postcss"
import postcssValueParser from "postcss-value-parser"
import * as sass from "sass"
import {
  invalidAddAlphaFunction,
  invalidRgbaUsage,
  noMatchingRgbParamsVariableMessage,
  unableToCompileFunctionMessage,
  unsupportedFunctionMessage,
  unsupportedFunctionWithFixMessage,
} from "../messages"
import { transformDecl } from "../functionTransformer"
import {
  deprecatedSassFunctionsSource,
  kaizenTokensByName,
  kaizenTokensSassVariablesWithInlineCSSVariableValues,
} from "../kaizenTokens"
import { containsUnmigratableFunction } from "../patterns"
import { Options, Variable } from "../types"
import { getParser, variablePrefixForLanguage } from "../utils"
import {
  getStylesheetVariables,
  isVariable,
  parseVariable,
  stringifyStylesheetVariables,
} from "../variableUtils"
import { walkDeclsWithKaizenTokens, walkVariablesOnValue } from "../walkers"

// Add-alpha can be used without a percentage sign, that won't fly.
// Fix the percentage sign, then convert to a decimal for usage in RGBA
const convertAddAlphaPercentage = (value: string) => {
  const parsed = parseInt(value.replace(/\%/, ""), 10)
  if (isNaN(parsed)) {
    return value
  }
  return (parsed / 100).toString()
}

const getReplacementRgbParamsVariable = (
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
    if (options.fix) {
      return `${variablePrefix}${fixedVariable.name}`
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
        message: noMatchingRgbParamsVariableMessage(variable.kaizenToken.name),
        node: decl,
        autofixAvailable: false,
      })
      return undefined
    }
    if (options.fix) {
      return `${variablePrefix}${fixedVariable.name}`
    } else {
      options.reporter({
        message: invalidRgbaUsage(fixedVariable.name),
        node: decl,
        autofixAvailable: true,
      })
    }
  }
}

/**
 * This function will compile a value, for example `mix($kz-color-wisteria-800, $white, 80%)` in place (which would result in #5d5f6e).
 * It also uses the variables that are immediately available within the same stylesheet, so nothing too fancy, and will bail out with a lint error if it can't compile.
 * ALSO, it will work with $kz-var-* variables too.
 */
const compileSassValue = (stylesheetNode: Root, value: string) => {
  try {
    const stylesheetVariables = getStylesheetVariables(stylesheetNode)
    const stylesheetAndKaizenVariables = {
      // Very important that kaizen vars come before local stylesheet vars, because locals could be using kaizen tokens.
      ...kaizenTokensSassVariablesWithInlineCSSVariableValues,
      ...stylesheetVariables,
    }
    const stylesheetAndKaizenVariablesString = stringifyStylesheetVariables(
      stylesheetAndKaizenVariables
    )
    const rendered = sass
      .renderSync({
        data: `
${deprecatedSassFunctionsSource}
${stylesheetAndKaizenVariablesString}
.target {
  targetvalue: ${value}
}
  `,
      })
      .css.toString()

    const reParsed = getParser("scss").parse(rendered)
    let compiledValue: undefined | string
    reParsed.walkRules(".target", rule => {
      const first = rule.nodes[0]
      if (first.type === "decl") {
        compiledValue = first.value
      }
    })
    if (!compiledValue) {
      return {
        compiledValue: null,
        error: "Could not find compiled value",
      }
    }
    return { compiledValue, error: null }
  } catch (e) {
    return { error: "unable to compile", details: e, compiledValue: null }
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
    if (params.length !== 2 || parsedFirst.type !== "word") {
      options.reporter({
        message: invalidAddAlphaFunction,
        node: decl,
        autofixAvailable: false,
      })
      return original
    } else {
      const variable = parseVariable(parsedFirst)
      if (!variable) {
        return original
      }
      const modifiedFirstParameter =
        getReplacementRgbParamsVariable(variable, decl, options) || first

      const fixedSecond = convertAddAlphaPercentage(second)

      return `rgba(${modifiedFirstParameter}, ${fixedSecond})`
    }
  }
  const fixRgbAndRgba = (functionName: string, ...params: string[]) => {
    const [first, ...rest] = params
    const original = `${functionName}(${params.join(", ")})`
    const parsedFirst = postcssValueParser(first).nodes[0]
    if (parsedFirst.type !== "word") return original
    const variable = parseVariable(parsedFirst)
    if (!variable) return original
    const modifiedFirstParameter =
      getReplacementRgbParamsVariable(variable, decl, options) || first

    // If there is no 2nd parameter, it must be an `rgb` function. Or, an invalid rgba function, in which case just use rgb
    if (!rest.length) {
      return `rgb(${modifiedFirstParameter})`
    } else {
      return `rgba(${modifiedFirstParameter}${
        rest.length ? ", " + rest.join(", ") : ""
      })`
    }
  }

  const compileSassValueInPlace = (
    functionName: string,
    ...params: string[]
  ) => {
    const sourceValue = `${functionName}(${params.join(", ")})`

    const compileResult = compileSassValue(decl.root(), sourceValue)
    if (compileResult.error || !compileResult.compiledValue) {
      options.reporter({
        autofixAvailable: false,
        message: unableToCompileFunctionMessage(
          sourceValue,
          (compileResult.details instanceof Error
            ? compileResult.details.message
            : compileResult.error || "unknown reason"
          ).replace(/\s*/g, " ")
        ),
        node: decl,
      })
      return sourceValue
    } else {
      if (options.fix) {
        return compileResult.compiledValue
      } else {
        options.reporter({
          autofixAvailable: true,
          message: unsupportedFunctionWithFixMessage,
          node: decl,
        })
        return sourceValue
      }
    }
  }

  const newValue = transformDecl(decl.value, {
    rgba: fixRgbAndRgba,
    rgb: fixRgbAndRgba,
    "add-alpha": fixAddAlpha,
    // In SASS we support compilation of functions
    ...(options.language === "scss"
      ? {
          mix: compileSassValueInPlace,
          darken: compileSassValueInPlace,
          lighten: compileSassValueInPlace,
          saturate: compileSassValueInPlace,
          desaturate: compileSassValueInPlace,
          "add-tint": compileSassValueInPlace,
          "add-shade": compileSassValueInPlace,
          transparentize: compileSassValueInPlace,
          "adjust-hue": compileSassValueInPlace,
        }
      : {}),
  })

  // TODO: Figure out a method that doesn't just bail out when it finds an unmigratable (there could be fixable values within the same declaration)
  if (containsUnmigratableFunction(newValue)) {
    options.reporter({
      autofixAvailable: false,
      message: unsupportedFunctionMessage,
      node: decl,
    })
  }
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
    if (postcssNode.type === "decl" && !isVariable(postcssNode)) {
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
