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

export const noMatchingRgbParamsVariableMessage = (tokenName: string) =>
  `No matching -rgb-params variable found for ${tokenName}`

export const deprecatedTokenUsedWithinAnotherVariableMessage =
  "Deprecated Kaizen token used as the value of another variable."
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
  `${tokenName} cannot be used within AtRule parameters like @media. Only tokens that begin with "kz-layout-" are supported.`
