import { Root } from "postcss"
import postcssValueParser from "postcss-value-parser"
import {
  cantFindReplacementTokenForDeprecatedMessage,
  cantUseTokenInAtRuleParamsMessage,
  deprecatedTokenUsageMessage,
  deprecatedTokenUsedWithinUnsupportedFunction,
  invalidEquationContainingDeprecatedTokenMessage,
} from "../messages"
import { Options, RuleDefinition } from "../types"
import {
  getReplacementForDeprecatedOrRemovedToken,
  isKaizenTokenDeprecatedOrRemoved,
} from "../util/kaizenTokens"
import {
  isVariable,
  replaceTokenInVariable,
  stringifyVariable,
} from "../util/variableUtils"
import {
  walkAtRulesWithKaizenTokens,
  walkDeclsWithKaizenTokens,
} from "../util/walkers"
import { declContainsInvalidEquations } from "./no-invalid-use-of-var-tokens-in-equations"
import { declContainsInvalidFunctions } from "./no-invalid-use-of-var-tokens-in-functions"

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

/**
 * This linter will report any deprecated tokens, and replace them with their new CSS variable replacement IF POSSIBLE.
 * If the linter determines it can't migrate, it will report an unmigratable declaration.
 *
 * Note: There is definitely some weirdness here. In order to clean it up, we really need a better value parser, in particular one that has a better hierarchical structure (one which we can go up and down between parents and children) and a better understanding of SASS and LESS constructs like negation and string interpolation.
 */
export const noDeprecatedOrRemovedTokens: RuleDefinition = {
  name: "no-deprecated-or-removed-tokens",
  ruleFunction: (styleSheetNode: Root, options: Options) => {
    // Loop through every declaration within the stylesheet IF that declaration value contains a kaizen token.
    // An example declaration with a kaizen token is something like: `color: $kz-color-wisteria-800`.
    // An example of a declaration without a kaizen token: `padding: 1rem`.
    walkDeclsWithKaizenTokens(
      styleSheetNode,
      ({ parsedValue, kaizenVariables, postcssNode }) => {
        const deprecatedVariables = kaizenVariables.filter(variable =>
          isKaizenTokenDeprecatedOrRemoved(variable.name)
        )
        // If the whole declaration contains only valid tokens, nothing needs to be done, so just return.
        if (!deprecatedVariables.length) {
          return
        }

        const decl = postcssNode

        /*
        These next two blocks bail out if a token is used in an equation or in an unsupported function.
        Admittedly it's a bit weird because there is a double up on reporting if you include the rules that relate to these predicate functions.
        However, this is what determines if a deprecated token can't automatically be migrated.
        We want to be able to use the same logic as the other rules, but also keep them as separate rules...
      */
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

        deprecatedVariables.forEach(variable => {
          const replacementToken = getReplacementForDeprecatedOrRemovedToken(
            variable.name
          )
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

          if (isVariable(decl)) {
            options.reporter({
              message: deprecatedTokenUsageMessage(
                variable.name,
                replacementToken.name
              ),
              node: decl,
              autofixAvailable: false,
            })
            return
          }

          if (options.fix) {
            variable.node.value = stringifyVariable(
              replaceTokenInVariable(variable, replacementToken)
            )
            newValue = postcssValueParser.stringify(parsedValue.nodes)
          } else {
            options.reporter({
              message: deprecatedTokenUsageMessage(
                variable.name,
                replacementToken.name
              ),
              node: decl,
              autofixAvailable: true,
            })
          }
        })

        if (newValue !== oldValue && options.fix && !isVariable(decl)) {
          decl.replaceWith(
            decl.clone({
              value: newValue,
            })
          )
        }
      }
    )

    walkAtRulesWithKaizenTokens(
      styleSheetNode,
      ({ postcssNode, kaizenVariables, parsedValue }) => {
        let replacedNodeParams = postcssNode.params
        kaizenVariables.forEach(variable => {
          // We only care about deprecated tokens
          if (isKaizenTokenDeprecatedOrRemoved(variable.name)) {
            const kaizenToken = variable.kaizenToken

            const replacement = getReplacementForDeprecatedOrRemovedToken(
              variable.name
            )

            // If there is a replacement for the deprecated token, AND that replacement isn't a CSS variable, we can most certainly commit that replacement.
            // Or, if the AtRule is not disallowed (meaning, it's one that CAN have CSS variables) then we do a replacement
            // An example: an old token named `kz-layout-breakpoints-large` has the replacement of `layout-breakpoints-large`,
            // where the latter replacement isn't a CSS variable, so it's therefore always allowed even if its within a disallowed at-rule such as @media.
            if (
              replacement &&
              (!replacement.cssVariable ||
                !disallowedAtRules.has(postcssNode.name))
            ) {
              if (options.fix) {
                variable.node.value = variable.node.value.replace(
                  variable.name,
                  replacement.name
                )
                replacedNodeParams = postcssValueParser.stringify(
                  parsedValue.nodes
                )
              } else {
                options.reporter({
                  message: deprecatedTokenUsageMessage(
                    variable.name,
                    replacement.name
                  ),
                  node: postcssNode,
                  autofixAvailable: true,
                })
              }
              return
            }

            if (
              disallowedAtRules.has(postcssNode.name) &&
              replacement?.cssVariable
            ) {
              // If we're within an AtRule which cannot support CSS variables
              options.reporter({
                message: cantUseTokenInAtRuleParamsMessage(kaizenToken.name),
                node: postcssNode,
                autofixAvailable: false,
              })
              return false
            }

            options.reporter({
              message: deprecatedTokenUsageMessage(
                kaizenToken.name,
                replacement?.name || "...(couldn't find replacement variable?)"
              ),
              node: postcssNode,
              autofixAvailable: false,
            })
          }
        })

        if (options.fix) {
          postcssNode.replaceWith(
            postcssNode.clone({ params: replacedNodeParams })
          )
        }
      }
    )
  },
}
