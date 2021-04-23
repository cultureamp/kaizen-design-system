import { Root } from "postcss"
import postcssValueParser from "postcss-value-parser"
import { deprecatedTokenUsage, unmigratableDeclarationMessage } from "../errors"
import { kaizenTokensByName } from "../kaizenTokens"
import { Options } from "../types"
import { replaceTokenInVariable, stringifyVariable } from "../variableUtils"
import { walkDeclsWithKaizenTokens, walkVariablesOnValue } from "../walkers"
import {
  declContainsInvalidEquations,
  noInvalidEquationsRuleName,
} from "./no-invalid-equations"
import {
  declContainsInvalidFunctions,
  noInvalidFunctionsRuleName,
} from "./no-invalid-functions"

export const noDeprecatedTokensRuleName = "no-deprecated-tokens"

/**
 * This linter will report any deprecated tokens, and replace them with their new CSS variable replacement IF POSSIBLE.
 * If the linter determines it can't migrate, it will report an unmigratable declaration.
 *
 * Note: There is definitely some weirdness here. In order to clean it up, we really need a better value parser, in particular one that has a better hierarchical structure (one which we can go up and down between parents and children) and a better understanding of SASS and LESS constructs like negation and string interpolation.
 */
export const noDeprecatedTokensRule = (
  styleSheetNode: Root,
  options: Options
) => {
  walkDeclsWithKaizenTokens(
    styleSheetNode,
    ({ value, parsedValue, postcssNode }) => {
      if (postcssNode.type === "decl") {
        const decl = postcssNode
        // If the value contains a kaizen variable, label it as "unmigratable"
        // e.g. $foo: $kz-color-wisteria-800;
        if (decl.variable) {
          options.reporter({
            message: unmigratableDeclarationMessage(
              decl,
              "Can't auto-migrate transitive token usages"
            ),
            node: decl,
            autofixAvailable: false,
          })
          return
        }

        if (declContainsInvalidEquations(decl, parsedValue, options)) {
          options.reporter({
            message: unmigratableDeclarationMessage(
              decl,
              `token used within equation, consider turning on the rule: '${noInvalidEquationsRuleName}'`
            ),
            node: decl,
            autofixAvailable: false,
          })
          return
        }
        if (declContainsInvalidFunctions(decl, options)) {
          options.reporter({
            message: unmigratableDeclarationMessage(
              decl,
              `token used within unsupported function, consider turning on the rule: '${noInvalidFunctionsRuleName}'`
            ),
            node: decl,
            autofixAvailable: false,
          })
          return
        }

        const oldValue = decl.value
        let newValue = decl.value
        walkVariablesOnValue(parsedValue, (node, variable) => {
          if (!variable.kaizenToken) return

          // If the token is not a CSS variable, it should be migrated
          if (!variable.kaizenToken?.cssVariable) {
            const replacementToken =
              kaizenTokensByName[variable.name.replace("kz", "kz-var")]
            if (!replacementToken) {
              options.reporter({
                message: unmigratableDeclarationMessage(
                  decl,
                  `Could not find replacement token for ${variable.name}`
                ),
                node: decl,
                autofixAvailable: false,
              })
              return
            }

            if (!options.fix) {
              options.reporter({
                message: deprecatedTokenUsage,
                node: decl,
                autofixAvailable: true,
              })
            } else {
              node.value = stringifyVariable(
                replaceTokenInVariable(variable, replacementToken)
              )
              newValue = postcssValueParser.stringify(parsedValue.nodes)
            }
          }
        })
        if (newValue !== oldValue && options.fix) {
          decl.replaceWith(
            decl.clone({
              value: newValue,
            })
          )
        }
      } else if (postcssNode.type === "atrule") {
        options.reporter({
          message: unmigratableDeclarationMessage(postcssNode),
          node: postcssNode,
          autofixAvailable: false,
        })
        return
      }
    }
  )
}
