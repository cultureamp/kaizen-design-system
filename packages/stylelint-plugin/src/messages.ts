export const missingRequiredKaizenImport = (path: string) =>
  `Missing required Kaizen token import: ${path}..`
export const unnecessaryKaizenImport = (path: string) =>
  `Unnecessary Kaizen token import: ${path}.`

export const deprecatedTokenUsageMessage = (oldName: string, newName: string) =>
  `Deprecated Kaizen token "${oldName}" should be migrated to "${newName}".`

export const deprecatedTokenUsageWithoutReplacementMessage = (
  deprecatedTokenName: string
) => `${deprecatedTokenName} is deprecated and should not be used anymore.`
export const invalidRgbaUsage = (replacementVariable: string) =>
  `Invalid parameter to rgba or add-alpha function. Expected '-rgb' suffixed replacement: ${replacementVariable}.`

export const negatedKaizenVariableMessage =
  "Negated Kaizen Variable. You must use calc() if you want to perform operations on them."

export const tokenNotInterpolatedInCalcMessage =
  "Invalid expression within calc() function. You must wrap variables in a string interpolation, e.g. #{$kz-var-spacing-md}."

export const kaizenVariableUsedNextToOperatorMessage =
  "Kaizen variable used next to math operator."

export const noMatchingRgbParamsVariableMessage = (tokenName: string) =>
  `No matching -rgb variable found for ${tokenName}.`

export const invalidEquationContainingDeprecatedTokenMessage =
  "Equation contains a deprecated Kaizen token."

export const deprecatedTokenUsedWithinUnsupportedFunction =
  "Deprecated Kaizen token used within unsupported function."

export const replacementCssVariableUsedWithinUnsupportedFunction = (
  oldTokenName: string,
  newTokenName: string,
  functionName: string
) =>
  `${deprecatedTokenUsageMessage(
    oldTokenName,
    newTokenName
  )} It can't be automatically fixed because it's replacement is a CSS variable, and ${functionName}() does not support them.`

export const cssVariableUsedWithinUnsupportedFunction = (
  tokenName: string,
  functionName: string
) =>
  `Kaizen token ${tokenName} is a CSS variable and therefore cannot be used within ${functionName}().`

export const cantFindReplacementTokenForDeprecatedMessage = (
  deprecatedTokenName: string
) => `Could not find replacement token for ${deprecatedTokenName}.`

export const cantReplaceDeprecatedTokenInAtRuleMessage = (
  oldTokenName: string,
  newTokenName: string
) =>
  `${deprecatedTokenUsageMessage(
    oldTokenName,
    newTokenName
  )} But, ${newTokenName} cannot be used within some AtRules like @media because it is a CSS variable.`

export const transitiveKaizenTokenUsage = (
  nameOfVariableThatContainsKaizen: string
) =>
  `Variable ${nameOfVariableThatContainsKaizen} contains a Kaizen token, and is not allowed because it prevents other rules from detecting invalid kaizen tokens.`

export const deprecatedTokenInVariableMessage = (
  oldTokenName: string,
  newTokenName: string
) =>
  `${deprecatedTokenUsageMessage(
    oldTokenName,
    newTokenName
  )} It can't be automatically fixed because it is used within a variable.`
