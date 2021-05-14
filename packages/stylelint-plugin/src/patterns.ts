import postcssValueParser from "postcss-value-parser"
import { cssStandardFunctions } from "./cssStandardFunctions"

export const quotesPattern = /("|')/g

export const operatorPattern = /^\s*[\+\-\*\/]\s*$/

export const migrateToNewVarPattern = /kz-(?!(var))/

export const sassInterpolationPattern = /^#\{(.*)\}$/

// Returns true if a value contains an unmigratable function such as `add-tint`.
// e.g. `color: add-tint`
export const containsUnmigratableFunction = (declarationValue: string) => {
  let found = false
  postcssValueParser(declarationValue).walk(node => {
    // assert node.value.length because value parser treats anything in brackets as a function
    if (
      node.type === "function" &&
      node.value.length &&
      !cssStandardFunctions.has(node.value)
    ) {
      found = true
    }
  })
  return found
}
