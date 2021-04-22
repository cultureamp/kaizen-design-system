import postcssValueParser, { WordNode } from "postcss-value-parser"
import { isKaizenTokenVariable, isOperator } from "../patterns"
import { Options } from "../types"
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
  const lastTwoWordNodes: WordNode[] = []

  walkWithParent(parsed, (node, parent) => {
    if (node.type === "word") {
      lastTwoWordNodes.unshift(node)
      if (lastTwoWordNodes.length === 3) {
        lastTwoWordNodes.pop()
      }
      if (lastTwoWordNodes.length === 2) {
        // If there exists an operator and a variable next to each other, it's invalid
        // This won't return invalid if the variable is used within a string interpolation
        if (
          (isOperator(lastTwoWordNodes[0].value) &&
            isKaizenTokenVariable(lastTwoWordNodes[1].value)) ||
          (isOperator(lastTwoWordNodes[1].value) &&
            isKaizenTokenVariable(lastTwoWordNodes[0].value))
        ) {
          invalid = true
          if (parent?.value === "calc") {
            reason = `Invalid expression within calc() function: '${lastTwoWordNodes
              .map(n => n.value)
              .join(
                " "
              )}'. You must wrap variables in a string interpolation, e.g. #{$kz-var-spacing-md}`
            if (options.language === "scss") {
              lastTwoWordNodes.forEach(n => {
                if (isKaizenTokenVariable(n.value)) {
                  n.value = `#{${n.value}}`
                }
              })
              amended = postcssValueParser.stringify(parsed.nodes)
            }
          } else {
            reason = `Kaizen variable used next to math operator: ${lastTwoWordNodes
              .map(n => n.value)
              .join(" ")}`
          }

          // Return false to break the walk
          return false
        }
      }
    }
  })
  return { invalid, reason, amended }
}
