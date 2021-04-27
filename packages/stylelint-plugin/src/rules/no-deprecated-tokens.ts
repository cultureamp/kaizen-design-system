import { Root } from "postcss"
import postcssValueParser from "postcss-value-parser"
import {
  cantFindReplacementTokenForDeprecatedMessage,
  cantUseTokenInAtRuleParamsMessage,
  deprecatedTokenUsedWithinAnotherVariableMessage,
  deprecatedTokenUsedWithinUnsupportedFunction,
  invalidEquationContainingDeprecatedTokenMessage,
} from "../messages"
import { kaizenTokensByName } from "../kaizenTokens"
import { Options } from "../types"
import {
  isVariable,
  replaceTokenInVariable,
  stringifyVariable,
} from "../variableUtils"
import { walkDeclsWithKaizenTokens, walkVariablesOnValue } from "../walkers"
import { declContainsInvalidEquations } from "./no-invalid-equations"
import { declContainsInvalidFunctions } from "./no-invalid-functions"

// The AtRules which shouldn't contain CSS variables in their parameters
// https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule
const disallowedAtRules = new Set([
  "media",
  "supports",
  "document",
  "page",
  "font-face",
  "keyframes",
  "viewport",
  "counter-style",
  "font-feature-values",
  "property",
  "color-profile",
])
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
    ({ value, parsedValue, kaizenVariables, postcssNode }) => {
      if (postcssNode.type === "decl") {
        const unmigratedVariables = kaizenVariables.filter(
          ({ kaizenToken }) => !kaizenToken.cssVariable
        )
        // If the whole declaration contains only new CSS variable tokens, nothing needs to be done, so just return.
        if (!unmigratedVariables.length) {
          return
        }

        const decl = postcssNode
        // If the value contains a kaizen variable, label it as "unmigratable"
        // e.g. $foo: $kz-color-wisteria-800;
        if (isVariable(decl)) {
          options.reporter({
            message: deprecatedTokenUsedWithinAnotherVariableMessage,
            node: decl,
            autofixAvailable: false,
          })
          return
        }

        // These next two blocks bail out if a token is used in an equation or in an unsupported function. Admittedly it's a bit weird because there is a double up on reporting if you include the rules that relate to these predicate functions.
        if (declContainsInvalidEquations(decl, parsedValue, options)) {
          options.reporter({
            message: invalidEquationContainingDeprecatedTokenMessage,
            node: decl,
            autofixAvailable: false,
          })
          return
        }
        if (declContainsInvalidFunctions(decl, options)) {
          options.reporter({
            message: deprecatedTokenUsedWithinUnsupportedFunction,
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
                message: cantFindReplacementTokenForDeprecatedMessage(
                  variable.name
                ),
                node: decl,
                autofixAvailable: false,
              })
              return
            }

            if (!options.fix) {
              options.reporter({
                message: (variable.name, replacementToken.name),
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
      } else if (
        postcssNode.type === "atrule" &&
        disallowedAtRules.has(postcssNode.name)
      ) {
        walkVariablesOnValue(
          postcssValueParser(postcssNode.params),
          (node, variable) => {
            if (!variable.name.startsWith("kz-layout")) {
              options.reporter({
                message: cantUseTokenInAtRuleParamsMessage(variable.name),
                node: postcssNode,
                autofixAvailable: false,
              })
              return false
            }
          }
        )

        return
      }
    }
  )
}
