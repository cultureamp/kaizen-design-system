export const missingRequiredKaizenImport = (path: string) =>
  `Missing required Kaizen token import: ${path}`
export const unnecessaryKaizenImport = (path: string) =>
  `Unnecessary Kaizen token import: ${path}`

export const deprecatedTokenUsageMessage = (oldName: string, newName: string) =>
  `Deprecated Kaizen token "${oldName}" should be migrated to "${newName}"`
export const invalidRgbaUsage = (replacementVariable: string) =>
  `Invalid parameter to rgba or add-alpha function. Expected '-rgb-params' suffixed replacement: ${replacementVariable}`

export const negatedKaizenVariableMessage =
  "Negated Kaizen Variable. You must use calc() if you want to perform operations on them."

export const tokenNotInterpolatedInCalcMessage =
  "Invalid expression within calc() function. You must wrap variables in a string interpolation, e.g. #{$kz-var-spacing-md}"

export const kaizenVariableUsedNextToOperatorMessage =
  "Kaizen variable used next to math operator"

export const noMatchingRgbParamsVariableMessage = (tokenName: string) =>
  `No matching -rgb-params variable found for ${tokenName}`

export const invalidEquationContainingDeprecatedTokenMessage =
  "Equation contains a deprecated Kaizen token"

export const deprecatedTokenUsedWithinUnsupportedFunction =
  "Deprecated Kaizen token used within unsupported function"

export const unsupportedFunctionMessage =
  "Kaizen token used within unsupported function"
export const cantFindReplacementTokenForDeprecatedMessage = (
  deprecatedTokenName: string
) => `Could not find replacement token for ${deprecatedTokenName}`

export const cantUseTokenInAtRuleParamsMessage = (tokenName: string) =>
  `${tokenName} cannot be used within AtRule parameters like @media. Only variables that aren't deprecated (e.g. kz-layout-*) and don't contain CSS variables are allowed.`

export const transitiveKaizenTokenUsage = (
  nameOfVariableThatContainsKaizen: string
) =>
  `Variable ${nameOfVariableThatContainsKaizen} contains a Kaizen token, and is not allowed because it prevents other rules from detecting invalid kaizen tokens`

export const usageOfDeprecatedName = (oldName: string, newName: string) =>
  `The token "${oldName}" is now called "${newName}" and should be renamed`
