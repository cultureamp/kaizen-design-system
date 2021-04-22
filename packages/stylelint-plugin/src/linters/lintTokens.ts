import { AtRule, Declaration, Root } from "postcss"
import postcssValueParser from "postcss-value-parser"
import { deprecatedTokenUsage, unmigratableDeclarationMessage } from "../errors"
import { kaizenTokensByName } from "../kaizenTokens"
import { Options } from "../types"
import { variablePrefixForLanguage } from "../utils"
import { walkDeclsWithKaizenTokens, walkVariablesOnValue } from "../walkers"
import { lintEquation } from "./lintEquation"
import { lintFunctions } from "./lintFunctions"

/**
 * This linter will report any deprecated tokens, and replace them with their new CSS variable replacement IF POSSIBLE.
 * If the linter determines it can't migrate, it will report an unmigratable declaration
 */
export const lintTokens = (styleSheetNode: Root, options: Options) => {
  const variablePrefix = variablePrefixForLanguage(options.language)
  const unmigratables: Array<Declaration | AtRule> = []
  const migrated: Declaration[] = []

  walkDeclsWithKaizenTokens(styleSheetNode, ({ value, postcssNode }) => {
    if (postcssNode.type === "decl") {
      const decl = postcssNode
      // If the value contains a kaizen variable, label it as "unmigratable"
      // e.g. $foo: $kz-color-wisteria-800;
      if (decl.variable) {
        unmigratables.push(decl)
        options.reporter({
          message: unmigratableDeclarationMessage(
            decl,
            "Can't auto-migrate transitive token usages"
          ),
          node: decl,
        })
        return
      }

      // If a token is being used as a term within an equation, ignore, and label it as "unmigratable"
      const equationErrorResult = lintEquation(value, options)
      if (equationErrorResult.invalid) {
        if (equationErrorResult.amended) {
          if (options.fix) {
            decl.value = equationErrorResult.amended
          } else {
            options.reporter({
              message:
                equationErrorResult.reason ||
                "Invalid usage of Kaizen token in a mathematical expression",
              node: postcssNode,
            })
          }
        } else {
          unmigratables.push(postcssNode)
          options.reporter({
            message: unmigratableDeclarationMessage(
              postcssNode,
              equationErrorResult.reason
            ),
            node: postcssNode,
          })
          return
        }
      }

      const functionLintResult = lintFunctions(decl, options)

      // Bail out if there is a function that can't be migrated.
      // THIS IS NOT IDEAL. Because, it will bomb out even if there are other migratable tokens within the value.
      // TODO: Don't bail as soon as an unmigratable function is detected
      if (functionLintResult.unmigratable) {
        unmigratables.push(decl)
        return
      }

      const parsedValue = postcssValueParser(functionLintResult.decl.value)

      walkVariablesOnValue(parsedValue, (node, variable) => {
        if (!variable.kaizenToken) return
        // If the token is not a CSS variable, it should be migrated
        if (!variable.kaizenToken?.cssVariable) {
          const replacementToken =
            kaizenTokensByName[variable.name.replace("kz", "kz-var")]
          if (!replacementToken) {
            unmigratables.push(decl)
            options.reporter({
              message: unmigratableDeclarationMessage(
                decl,
                `Could not find replacement token for ${variable.name}`
              ),
              node: decl,
            })
            return
          }

          if (!options.fix) {
            options.reporter({
              message: deprecatedTokenUsage,
              node: decl,
            })
          } else {
            if (variable.interpolated) {
              node.value = `#{${variablePrefix}${replacementToken.name}}`
            } else {
              node.value = `${variablePrefix}${replacementToken.name}`
            }
          }
        }

        const newNode = decl.clone({
          value: postcssValueParser.stringify(parsedValue.nodes),
        })

        if (options.fix) {
          decl.replaceWith(newNode)
        }
        migrated.push(newNode)
      })
    } else if (postcssNode.type === "atrule") {
      unmigratables.push(postcssNode)
      options.reporter({
        message: unmigratableDeclarationMessage(postcssNode),
        node: postcssNode,
      })
      return
    }
  })

  return { unmigratables, migrated }
}
