import { AtRule, Declaration, Root } from "postcss"
import postcssValueParser from "postcss-value-parser"
import { deprecatedTokenReplacements } from "../../deprecatedTokens"
import {
  cantReplaceDeprecatedTokenInAtRuleMessage,
  cssVariableUsedWithinUnsupportedFunction,
  deprecatedTokenInVariableMessage,
  deprecatedTokenUsageMessage,
  deprecatedTokenUsageWithoutReplacementMessage,
  invalidEquationContainingDeprecatedTokenMessage,
  replacementCssVariableUsedWithinUnsupportedFunction,
} from "../messages"
import { Options, RuleDefinition } from "../types"
import { cssStandardFunctions } from "../util/cssStandardFunctions"
import { kaizenTokensByName } from "../util/kaizenTokens"
import {
  isVariable,
  replaceTokenInVariable,
  stringifyVariable,
} from "../util/variableUtils"
import { walkVariablesOnValue } from "../util/walkers"
import { fixAlphaModificationFunctions } from "./lib/tokensInFunctions"
import { containsEquationThatDoesntWorkWithCSSVariables } from "./no-invalid-use-of-var-tokens-in-equations"

// Most CSS standard functions are allowed to contain CSS variables.
const functionsThatSupportCSSVariables = new Set(cssStandardFunctions)
// SASS overloads the "saturate" function and computes it at compile time.
// We therefore don't allow it to be used with CSS variable tokens.
functionsThatSupportCSSVariables.delete("saturate")

/**
 * This is the set of functions that we know don't support CSS variables.
 * Rather than have an allow-list of functions that we know do support CSS variables, a deny-list should
 * be a lot less strict on users.
 * It should say "we know that AT LEAST these functions won't support CSS variables"
 * rather than "you can only use CSS variables within these functions".
 * The former allows for use of CSS variables in functions we've never seen before, such as user defined ones like `ca-margin`.
 *
 * At the time of writing this, we've just populated this list with color manipulation functions, then subtracted ones
 * from the allow list so that any potential overloaded functions (ones that work both with the SASS compiler and natively in the browser, like rgba()) are allowed.
 * https://www.tutorialsteacher.com/sass/sass-color-functions
 */
const functionsThatDontSupportCSSVariables = new Set(
  [
    "mix",
    "shade",
    "tint",
    "darken",
    "lighten",
    "adjust-hue",
    "saturate",
    "desaturate",
    "add-alpha",
    "transparentize",
    "adjust-color",
    "scale-color",
    "change-color",
    "opacify",
  ].filter(i => !functionsThatSupportCSSVariables.has(i))
)

// The AtRules which shouldn't contain CSS variables in their parameters
// https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule
const atRulesThatDontSupportCSSVars = new Set([
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
 * This function attempts to detect and autofix invalid usages of tokens, including ones which are deprecated or used in an incorrect way within functions.
 * If the linter determines it can't automatically do a replacement, it will report an unfixable declaration (perhaps the replacement would cause an error).
 *
 * Note: There is definitely some weirdness here. In order to clean it up, we really need a better value parser, in particular one that has a better hierarchical structure (one which we can go up and down between parents and children) and a better understanding of SASS and LESS constructs like negation and string interpolation.
 */
function detectAndFixInvalidTokens(
  nodeValue: string,
  postcssNode: Declaration | AtRule,
  options: Options
): string | undefined {
  let parsedValue = postcssValueParser(nodeValue)
  let newValue = nodeValue

  // Since we have a strong focus on CSS variables, if we detect that there is an equation that currently does or would fail with them
  // we should just report and not do anything else.
  if (
    postcssNode.type === "decl" &&
    containsEquationThatDoesntWorkWithCSSVariables(
      postcssNode,
      parsedValue,
      options
    )
  ) {
    options.reporter({
      message: invalidEquationContainingDeprecatedTokenMessage,
      autofixAvailable: false,
      node: postcssNode,
    })
    return
  }

  const fixAlphaModificationFunctionsResult = fixAlphaModificationFunctions(
    nodeValue
  )

  if (fixAlphaModificationFunctionsResult.errors.length) {
    fixAlphaModificationFunctionsResult.errors.forEach(error =>
      options.reporter({
        message: error,
        autofixAvailable: false,
        node: postcssNode,
      })
    )
    return
  } else {
    // Apply any changes made by fixAlphaModificationFunctionsResult, and continue with deprecated variable replacements
    parsedValue = postcssValueParser(
      fixAlphaModificationFunctionsResult.newValue
    )
    newValue = fixAlphaModificationFunctionsResult.newValue
  }

  walkVariablesOnValue(parsedValue, (variableNode, variable, parent) => {
    const isDeprecated = deprecatedTokenReplacements.has(variable.name)

    // If the variable is a CSS variable, it's not deprecated, and is used within a function that doesn't support CSS variables, report and bail.
    // Without this, non-deprecated CSS variables which are used within functions that don't support CSS variables, won't be warned about.
    if (
      parent &&
      functionsThatDontSupportCSSVariables.has(parent.value) &&
      variable.kaizenToken?.cssVariable &&
      !isDeprecated
    ) {
      options.reporter({
        message: cssVariableUsedWithinUnsupportedFunction(
          variable.name,
          parent.value
        ),
        autofixAvailable: false,
        node: postcssNode,
      })
      return
    }

    if (!isDeprecated) {
      return
    }

    const replacement = deprecatedTokenReplacements.get(variable.name)

    // If there isn't a replacement we can't automatically replace anything, so just report and bail.
    if (!replacement) {
      options.reporter({
        message: deprecatedTokenUsageWithoutReplacementMessage(variable.name),
        node: postcssNode,
        autofixAvailable: false,
      })
      return
    }

    const replacementKaizenToken = kaizenTokensByName[replacement]

    // We have a spec that ensures this edge case doesn't happen, but we also don't want to use a TypeScript null assertion.
    // Adding this for dilligence.
    if (!replacementKaizenToken) {
      options.reporter({
        message:
          "Internal error. Replacement token is not an existing Kaizen token",
        node: postcssNode,
        autofixAvailable: false,
      })
      return
    }

    const commitReplacement = () => {
      if (!options.fix) {
        options.reporter({
          message: deprecatedTokenUsageMessage(variable.name, replacement),
          node: postcssNode,
          autofixAvailable: true,
        })
      } else {
        // Here is where we actually commit the replacement

        const replacementVariable = replaceTokenInVariable(
          variable,
          replacementKaizenToken
        )
        variableNode.value = stringifyVariable(replacementVariable)

        newValue = postcssValueParser.stringify(parsedValue.nodes)
      }
    }

    // Now decide whether an autofix can occur using a series of rules.
    // If we decide that it can't happen, report the reason then return so that we move on to the next node.

    const isCurrentTokenCssVariable = !!variable.kaizenToken?.cssVariable
    const isReplacementTokenCssVariable = !!replacementKaizenToken.cssVariable

    // If the current value is a CSS variable, OR the replacement is not a CSS variable, just commit the replacement because it shouldn't be a problematic change.
    if (isCurrentTokenCssVariable || !isReplacementTokenCssVariable) {
      commitReplacement()
      return
    }

    // If the potential replacement variable is a CSS variable, and is used within a function that doesn't support CSS variables, report and bail
    if (
      parent &&
      !functionsThatSupportCSSVariables.has(parent.value) &&
      replacementKaizenToken.cssVariable
    ) {
      options.reporter({
        message: replacementCssVariableUsedWithinUnsupportedFunction(
          variable.name,
          replacementKaizenToken.name,
          parent.value
        ),
        autofixAvailable: false,
        node: postcssNode,
      })

      return
    }

    // If we're in an AtRule that doesn't support CSS variables, and the replacement is a CSS variable, we shouldn't make the replacement.
    if (
      postcssNode.type === "atrule" &&
      replacementKaizenToken.cssVariable &&
      atRulesThatDontSupportCSSVars.has(postcssNode.name)
    ) {
      options.reporter({
        message: cantReplaceDeprecatedTokenInAtRuleMessage(
          variable.name,
          replacementKaizenToken.name
        ),
        autofixAvailable: false,
        node: postcssNode,
      })
      return
    }

    // We can only modify variable declarations (e.g. `$card-bg: $kz-var-color-wisteria-100;`) when its current value is a CSS variable, or the replacement isn't a CSS variable
    // (because the only change which isn't safe is going from NonCSSVariable -> CSSVariable)
    // If it's not, just report, and bail.
    if (postcssNode.type === "decl" && isVariable(postcssNode)) {
      options.reporter({
        message: deprecatedTokenInVariableMessage(variable.name, replacement),
        autofixAvailable: false,
        node: postcssNode,
      })
      return
    }

    commitReplacement()
  })

  return newValue
}

/**
 * This is a stylelint rule which detects and autofixes invalid usages of tokens.
 * See {@link detectAndFixInvalidTokens} for how this works.
 */
export const noInvalidUseOfTokens: RuleDefinition = {
  name: "no-invalid-use-of-tokens",
  ruleFunction: (styleSheetNode: Root, options: Options) => {
    styleSheetNode.walkAtRules(postcssNode => {
      const newValue = detectAndFixInvalidTokens(
        postcssNode.params,
        postcssNode,
        options
      )
      if (options.fix && newValue) {
        postcssNode.replaceWith(
          postcssNode.clone({
            params: newValue,
          })
        )
      }
    })
    styleSheetNode.walkDecls(postcssNode => {
      const newValue = detectAndFixInvalidTokens(
        postcssNode.value,
        postcssNode,
        options
      )
      if (options.fix && newValue) {
        postcssNode.replaceWith(
          postcssNode.clone({
            value: newValue,
          })
        )
      }
    })
  },
}
