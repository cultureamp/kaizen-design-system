import postcssValueParser, {
  FunctionNode,
  WordNode,
} from "postcss-value-parser"
import {
  kaizenVariableUsedNextToOperatorMessage,
  negatedKaizenVariableMessage,
  tokenNotInterpolatedInCalcMessage,
} from "../errors"
import { isKaizenTokenVariable, isOperator } from "../patterns"
import { Options } from "../types"
import { parseVariable, stringifyVariable } from "../utils"
import { walkWithParent } from "../walkers"

/**
 * E.g. `$kz-spacing-md * 2`, `-$kz-spacing-lg`, `(5 / 2) * $kz-spacing-md`, $kz-var-spacing-md * 5, calc($kz-var-spacing-md + 2px).
 * calc(#{$kz-var-spacing-md} + 2px) is valid;
 */
export const lintEquation = (value: string, options: Options) => {
  const parsed = postcssValueParser(value)
  let invalid = false
  let reason: string | undefined
  let amended: string | undefined
  // Will use this to detect whether two invalid word nodes are used next to each other
  // Will reset when the parent changes
  const lastTwoWordNodesInScope: WordNode[] = []
  let lastParent: FunctionNode | undefined
  walkWithParent(parsed, (node, parent) => {
    // Reset scope if parents change. We don't want to know about two things next to each other if one is in a function, and the other isn't
    if (lastParent !== parent) {
      lastTwoWordNodesInScope.splice(0, lastTwoWordNodesInScope.length)
    }
    lastParent = parent
    const isWithinCalcFunction = parent?.value === "calc"
    if (node.type === "word") {
      // Detect the cose of the node being a negated variable (because postcss-value-parser doesn't detect the operator and variable as seprate nodes)
      const parsedVariable = parseVariable(node)
      if (parsedVariable?.negated && parsedVariable?.kaizenToken) {
        invalid = true
        reason = negatedKaizenVariableMessage
        if (options.language === "scss") {
          // just wrap the value in brackets if we're already in a calc function
          const fixedVariable = `${
            isWithinCalcFunction ? "" : "calc"
          }(-1 * ${stringifyVariable({
            ...parsedVariable,
            interpolated: true,
            negated: false,
          })})`
          node.value = fixedVariable
          amended = postcssValueParser.stringify(parsed.nodes)
        }

        return false
      }

      lastTwoWordNodesInScope.unshift(node)
      if (lastTwoWordNodesInScope.length === 3) {
        lastTwoWordNodesInScope.pop()
      }
      if (lastTwoWordNodesInScope.length === 2) {
        const parsedVariable0 = parseVariable(lastTwoWordNodesInScope[0])
        const parsedVariable1 = parseVariable(lastTwoWordNodesInScope[1])
        const variableInEquation = parsedVariable0 || parsedVariable1
        // If there exists an operator and a variable next to each other, it's invalid
        if (
          (isOperator(lastTwoWordNodesInScope[0].value) &&
            parsedVariable1?.kaizenToken) ||
          (isOperator(lastTwoWordNodesInScope[1].value) &&
            parsedVariable0?.kaizenToken)
        ) {
          if (isWithinCalcFunction) {
            // If the variable is interpolated within a calc function, its fine
            if (variableInEquation?.interpolated) {
              return false
            }
            invalid = true
            reason = tokenNotInterpolatedInCalcMessage
            if (options.language === "scss") {
              if (variableInEquation?.kaizenToken) {
                variableInEquation.node.value = stringifyVariable({
                  ...variableInEquation,
                  interpolated: true,
                })
              }

              amended = postcssValueParser.stringify(parsed.nodes)
            }
          } else {
            invalid = true
            reason = kaizenVariableUsedNextToOperatorMessage
          }

          // Return false to break the walk
          return false
        }
      }
    }
  })
  return { invalid, reason, amended }
}
