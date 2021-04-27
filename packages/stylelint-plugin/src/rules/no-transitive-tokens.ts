import { Root } from "postcss"
import postcssValueParser from "postcss-value-parser"
import { transitiveKaizenTokenUsage } from "../messages"
import { Options } from "../types"
import {
  getStylesheetTransitiveKaizenVariables,
  isVariable,
} from "../variableUtils"
import { walkVariables } from "../walkers"

export const noTransitiveTokensRuleName = "no-transitive-tokens"
export const noTransitiveTokensRule = (
  stylesheetNode: Root,
  options: Options
) => {
  const transitiveKaizenVariables = getStylesheetTransitiveKaizenVariables(
    stylesheetNode
  )
  walkVariables(
    stylesheetNode,
    ({ variable, variableNode, parsedValue, postcssNode }) => {
      // We want to only modify declaration values that aren't variable declarations, e.g. `$foo: red`
      // AND most certainly not already a variable that contains a kaizen token.
      // AND the declaration contains a use of a transitive kaizen variable
      if (
        postcssNode.type === "decl" &&
        !isVariable(postcssNode) &&
        !transitiveKaizenVariables[postcssNode.prop] &&
        transitiveKaizenVariables[variable.nameWithPrefix]
      ) {
        const transitiveVariableName = variable.nameWithPrefix

        // The variable within the stylesheet that contains kaizen e.g `$foo: $kz-color-wisteria-800`
        const transitiveVariable =
          transitiveKaizenVariables[variable.nameWithPrefix]

        if (options.fix) {
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
            autofixAvailable: true,
            node: postcssNode,
          })
        }
      }
    }
  )
}
