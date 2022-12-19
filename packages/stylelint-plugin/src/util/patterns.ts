import { kaizenTokensByName } from "./kaizenTokens"

export const quotesPattern = /("|')/g

export const operatorPattern = /^\s*[\+\-\*\/]\s*$/

export const migrateToNewVarPattern = /kz-(?!(var))/

export const sassInterpolationPattern = /^#\{(.*)\}$/

export const isOperator = (value: string): boolean => operatorPattern.test(value)
// Contains a regex of all kaizen tokens that are exposed in SASS and LESS.
// Will look like: `(@|\$)(kz-color-wisteria-100|kz-color-wisteria-200|...|kz-var-color-wisteria-800|...|kz-var-spacing-md|...)`
export const kaizenTokenPattern = new RegExp(
  `(@|\\$)(${Object.keys(kaizenTokensByName).join("|")})`
)
// Same as above but doesn't do partial matches within a line
export const entireLineKaizenTokenPattern = new RegExp(
  `^${kaizenTokenPattern.source}$`
)
export const isKaizenTokenVariable = (value: string): boolean =>
  entireLineKaizenTokenPattern.test(value)
