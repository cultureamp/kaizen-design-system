import { Declaration, Root } from "postcss"
import postcssValueParser from "postcss-value-parser"
import { invalidRgbaUsage, unmigratableDeclarationMessage } from "../errors"
import { transformDecl } from "../functionTransformer"
import { kaizenTokensByName } from "../kaizenTokens"
import { containsUnmigratableFunction } from "../patterns"
import { Options } from "../types"
import { variablePrefixForLanguage } from "../utils"
import { walkVariablesOnValue } from "../walkVariables"

// Does the value look like `123, 123, 123`? Used for determining whether an rgba function is used with the correct variable
const isRgbTriple = (value: string) =>
  /^\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*$/.test(value)

/**
 * This will lint the functions within a declaration, and migrate anything it can (such as with rgb, rgba and add-alpha)
 */
export const lintFunctions = (decl: Declaration, options: Options) => {
  const variablePrefix = variablePrefixForLanguage(options.language)
  let unmigratable = false
  const fixRgbaOrAddAlpha = (
    _functionName: string,
    first: string,
    ...rest: string[]
  ) => {
    const parsedFirst = postcssValueParser(first)

    walkVariablesOnValue(parsedFirst, (node, variable) => {
      if (!variable.kaizenToken) return

      if (!variable.kaizenToken.cssVariable) {
        const fixedVariable =
          kaizenTokensByName[
            variable.kaizenToken.name.replace("kz", "kz-var") + "-rgb-params"
          ]
        if (!fixedVariable) {
          unmigratable = true
          options.reporter({
            message: unmigratableDeclarationMessage(
              decl,
              "No matching -rgb-params variable found"
            ),
            node: decl,
          })
          return
        }
        if (options.fix) {
          node.value = `${variablePrefix}${fixedVariable.name}`
        } else {
          options.reporter({
            message: invalidRgbaUsage(fixedVariable.name),
            node: decl,
          })
        }
      }

      // If the value is not like `123, 123, 123`, AND it's a CSS variable, it's not valid
      if (
        !isRgbTriple(variable.kaizenToken.value) &&
        variable.kaizenToken.cssVariable
      ) {
        const fixedVariable =
          kaizenTokensByName[variable.kaizenToken.name + "-rgb-params"]
        if (!fixedVariable) {
          unmigratable = true
          options.reporter({
            message: unmigratableDeclarationMessage(
              decl,
              "No matching -rgb-params variable found"
            ),
            node: decl,
          })
          return
        }
        if (options.fix) {
          node.value = `${variablePrefix}${fixedVariable.name}`
        } else {
          options.reporter({
            message: invalidRgbaUsage(fixedVariable.name),
            node: decl,
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
  /*   const fail = (functionName: string, ...params: string[]) => {
    unmigratable = true

    options.reporter({
      message: unmigratableDeclarationMessage(
        decl,
        `Can't auto-migrate function ${functionName}`
      ),
      node: decl,
    })

    return `${functionName}(${params.join(", ")})`
  }
 */
  if (containsUnmigratableFunction(decl.value)) {
    unmigratable = true
    options.reporter({
      message: unmigratableDeclarationMessage(
        decl,
        "Can't auto-migrate function usage"
      ),
      node: decl,
    })
  }

  return {
    decl: transformDecl(decl, {
      rgba: fixRgbaOrAddAlpha,
      rgb: fixRgbaOrAddAlpha,
      "add-alpha": fixRgbaOrAddAlpha,
      /*       "add-shade": fail,
      "add-tint": fail,
      mix: fail,
      darken: fail,
      lighten: fail, */
    }),
    unmigratable,
  }
}
