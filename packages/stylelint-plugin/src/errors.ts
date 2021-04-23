import { AtRule, Declaration } from "postcss"

export const unmigratableDeclarationMessage = (
  node: Declaration | AtRule,
  extraDetail?: string
) =>
  `Detected usage of deprecated token that can't be automatically migrated${
    extraDetail ? ` (${extraDetail})` : ""
  }: \`${(node.type === "decl" ? node.value : node.params)
    .replace(/(\s)+/g, " ")
    .trim()}\``

export const missingRequiredKaizeImport = (path: string) =>
  `Missing required Kaizen token import: ${path}`
export const unnecessaryKaizenImport = (path: string) =>
  `Unnecessary Kaizen token import: ${path}`

export const deprecatedTokenUsage =
  "Expected kz-var token, but a deprecated token was used."
export const invalidRgbaUsage = (replacementVariable: string) =>
  `Invalid parameter to rgba or add-alpha function. Expected '-rgb-params' suffixed replacement: ${replacementVariable}`

export const negatedKaizenVariableMessage =
  "Negated Kaizen Variable. You must use calc() if you want to perform operations on them."

export const tokenNotInterpolatedInCalcMessage =
  "Invalid expression within calc() function. You must wrap variables in a string interpolation, e.g. #{$kz-var-spacing-md}"

export const kaizenVariableUsedNextToOperatorMessage =
  "Kaizen variable used next to math operator"
