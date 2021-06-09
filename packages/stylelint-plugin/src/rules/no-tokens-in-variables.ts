import { Root } from "postcss"
import postcssValueParser from "postcss-value-parser"
import { transitiveKaizenTokenUsage } from "../messages"
import { Options } from "../types"
import {
  getLexicalTransitiveKaizenVariables,
  isVariable,
} from "../util/variableUtils"
import { walkVariables } from "../util/walkers"

export const noTransitiveTokensRuleName = "no-tokens-in-variables"

/**
 * This rule will find and (optionally) transform usages of variables like `$foo` that are declared using Kaizen tokens in their values, e.g. `$foo: 5px $kz-spacing-md`.
 * In the above example, if would replace `$foo` with `5px $kz-var-spacing-md`.
 * A lot of manual work is required without this rule in large codebases because the prefer-var-tokens rule can't safely migrate Kaizen tokens within variable declarations
 * (e.g `$foo: 5px $kz-spacing-md` -> `$foo: 5px $kz-var-spacing-md`).
 * We can utilise all other rules when proxy/transitive variables aren't used.
 *
 * It is not recommended to turn this on by default, because transitive variables aren't inherently bad, they're just hard to run codemods on.
 * E.g. `$card-background-color: $kz-var-color-wisteria-800` is expressive and notifies the reader of the author's intention.
 *
 */
export const noTransitiveTokensRule = (
  stylesheetNode: Root,
  options: Options
) => {
  walkVariables(
    stylesheetNode,
    ({ variable, variableNode, parsedValue, postcssNode }) => {
      const transitiveKaizenVariables = getLexicalTransitiveKaizenVariables(
        stylesheetNode,
        postcssNode
      )
      // We want to only modify declaration values that aren't variable declarations, e.g. `$foo: red`
      // AND most certainly not already a variable that contains a kaizen token.
      // AND the declaration contains a use of a transitive kaizen variable
      if (
        postcssNode.type === "decl" &&
        !transitiveKaizenVariables[postcssNode.prop] &&
        transitiveKaizenVariables[variable.nameWithPrefix]
      ) {
        const transitiveVariableName = variable.nameWithPrefix

        // The variable within the stylesheet that contains kaizen e.g `$foo: $kz-color-wisteria-800`
        const transitiveVariable =
          transitiveKaizenVariables[variable.nameWithPrefix]

        if (options.fix && !isVariable(postcssNode)) {
          // The replacement should be in brackets if it is negated and if the value isn't just a single token
          const shouldReplacementBeInBrackets =
            variable.negated &&
            transitiveVariable.value !==
              transitiveVariable.kaizenVariablesInValue[0].nameWithPrefix

          // We can't just replace the whole variableNode.value with a new variable, because it might have been negated or interpolated
          // this is due to postcss-value-parser weirdness (it doesn't tokenize negations or interpolations)
          variableNode.value = variableNode.value.replace(
            variable.nameWithPrefix,
            shouldReplacementBeInBrackets
              ? `(${transitiveVariable.value})`
              : transitiveVariable.value
          )
          postcssNode.replaceWith(
            postcssNode.clone({
              value: postcssValueParser.stringify(parsedValue.nodes),
            })
          )
        } else {
          options.reporter({
            message: transitiveKaizenTokenUsage(transitiveVariableName),
            autofixAvailable: !isVariable(postcssNode),
            node: postcssNode,
          })
        }
      }
    }
  )
}
