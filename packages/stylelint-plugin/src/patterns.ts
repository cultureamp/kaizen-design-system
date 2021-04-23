import postcssValueParser from "postcss-value-parser"
import { kaizenTokensByName } from "./kaizenTokens"

export const quotesPattern = /("|')/g

export const operatorPattern = /[\+\-\*\/]/

export const migrateToNewVarPattern = /kz-(?!(var))/

export const sassInterpolationPattern = /^#\{(.*)\}$/

export const isOperator = (value: string) => operatorPattern.test(value)
// Contains a regex of all kaizen tokens that are exposed in SASS and LESS.
// Will look like: `(@|\$)(kz-color-wisteria-100|kz-color-wisteria-200|...|kz-var-color-wisteria-800|...|kz-var-spacing-md|...)`
export const kaizenTokenPattern = new RegExp(
  `(@|\\$)(${Object.keys(kaizenTokensByName).join("|")})`
)
// Same as above but doesn't do partial matches within a line
export const entireLineKaizenTokenPattern = new RegExp(
  `^${kaizenTokenPattern.source}$`
)
export const isKaizenTokenVariable = (value: string) =>
  entireLineKaizenTokenPattern.test(value)

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
