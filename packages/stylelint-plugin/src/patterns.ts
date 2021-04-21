import postcssValueParser from "postcss-value-parser"
import { kaizenTokensByName } from "./kaizenTokens"

export const quotesPattern = /("|')/g

export const operatorPattern = /[\+\-\*\/]/
// Contains a regex of all kaizen tokens that are exposed in SASS and LESS.
// Will look like: `(@|\$)(kz-color-wisteria-100|kz-color-wisteria-200|...|kz-var-color-wisteria-800|...|kz-var-spacing-md|...)`
export const kaizenTokenPattern = new RegExp(
  `(@|\\$)(${Object.keys(kaizenTokensByName).join("|")})`
)

// A regex that is composed of the operator regex and the kaizenToken regex.
// Matches when a kaizen token is used next to an operator, cancelling out any brackets or space tokens, e.g. `(     $kz-var-spacing-md    ) * (5)` will match.
export const kaizenVariableNextToOperatorPattern = new RegExp(
  `${operatorPattern.source}(\\(|\\s)*${kaizenTokenPattern.source}|${kaizenTokenPattern.source}(\\)|\\s)*${operatorPattern.source}`
)
/**
 * E.g. `$kz-spacing-md * 2`, `-$kz-spacing-lg`, `(5 / 2) * $kz-spacing-md`.
 */
export const variableUsedAsEquationTerm = (value: string) =>
  kaizenVariableNextToOperatorPattern.test(value)

export const allowedFunctions = new Set([
  "rgba",
  "rgb",
  "add-alpha",
  "var",
  "calc",
])

// Returns true if a value contains an unmigratable function such as `add-tint`.
// e.g. `color: add-tint`
export const containsUnmigratableFunction = (declarationValue: string) => {
  let found = false
  postcssValueParser(declarationValue).walk(node => {
    // assert node.value.length because value parser treats anything in brackets as a function
    if (
      node.type === "function" &&
      node.value.length &&
      !allowedFunctions.has(node.value)
    ) {
      found = true
    }
  })
  return found
}
