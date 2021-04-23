import { Declaration, Root } from "postcss"
import postcssValueParser from "postcss-value-parser"
import * as sass from "sass"
import {
  invalidRgbaUsage,
  noMatchingRgbParamsVariableMessage,
  unableToCompileFunctionMessage,
  unsupportedFunctionMessage,
  unsupportedFunctionWithFixMessage,
} from "../errors"
import { transformDecl } from "../functionTransformer"
import {
  deprecatedSassFunctionsSource,
  kaizenTokensByName,
  kaizenTokensSassVariables,
} from "../kaizenTokens"
import { containsUnmigratableFunction } from "../patterns"
import { Options } from "../types"
import { getParser, variablePrefixForLanguage } from "../utils"
import {
  getStylesheetVariables,
  stringifyStylesheetVariables,
} from "../variableUtils"
import { walkDeclsWithKaizenTokens, walkVariablesOnValue } from "../walkers"

/**
 * This function will compile a value, for example `mix($kz-color-wisteria-800, $white, 80%)` in place (which would result in #5d5f6e).
 * It also uses the variables that are immediately available within the same stylesheet, so nothing too fancy, and will bail out with a lint error if it can't compile.
 */
const compileSassValue = (stylesheetNode: Root, value: string) => {
  try {
    const stylesheetVariables = getStylesheetVariables(stylesheetNode)
    const stylesheetAndKaizenVariables = {
      ...stylesheetVariables,
      ...kaizenTokensSassVariables,
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
          compileResult.error || undefined
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
    rgba: fixRgbaOrAddAlpha,
    rgb: fixRgbaOrAddAlpha,
    "add-alpha": fixRgbaOrAddAlpha,
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
