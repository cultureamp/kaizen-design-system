export const missingRequiredKaizenImport = (path: string): string =>
  `Missing required Kaizen token import: ${path}.`
export const unnecessaryKaizenImport = (path: string): string =>
  `Unnecessary Kaizen token import: ${path}.`

export const deprecatedTokenUsageMessage = (oldName: string, newName: string): string =>
  `Deprecated Kaizen token "${oldName}" should be migrated to "${newName}".`

export const containsDeprecatedKaizenTokenWithNoReplacement = (name: string): string =>
  `Deprecated Kaizen token ${name} detected`

export const deprecatedTokenUsageWithoutReplacementMessage = (
  deprecatedTokenName: string
): string => `${deprecatedTokenName} is deprecated and should not be used anymore.`

export const invalidRgbaUsage = (replacementVariable: string): string =>
  `Invalid parameter to rgba or add-alpha function. Expected '-rgb' suffixed replacement: ${replacementVariable}.`

export const negatedKaizenVariableMessage =
  "Negated Kaizen Variable. You must use calc() if you want to perform operations on them."

export const tokenNotInterpolatedInCalcMessage =
  "Invalid expression within calc() function. You must wrap variables in a string interpolation, e.g. #{$kz-var-spacing-md}."

export const kaizenVariableUsedNextToOperatorMessage =
  "Kaizen CSS variable token used next to math operator."

export const noMatchingRgbParamsVariableMessage = (tokenName: string): string =>
  `No matching -rgb variable found for ${tokenName}.`

export const invalidEquationContainingKaizenTokenMessage =
  "Kaizen token used incorrectly within an equation."
export const cannotMigrateTokenBecauseOfInvalidEquation =
  "Migrating deprecated Kaizen tokens would cause an invalid equation"

export const deprecatedTokenUsedWithinUnsupportedFunction =
  "Deprecated Kaizen token used within unsupported function."

export const replacementCssVariableUsedWithinUnsupportedFunction = (
  oldTokenName: string,
  newTokenName: string,
  functionName: string
): string =>
  `${deprecatedTokenUsageMessage(
    oldTokenName,
    newTokenName
  )} It can't be automatically fixed because it's replacement is a CSS variable, and ${functionName}() does not support them.`

export const cssVariableUsedWithinUnsupportedFunction = (
  tokenName: string,
  functionName: string
): string =>
  `Kaizen token ${tokenName} is a CSS variable and therefore cannot be used within ${functionName}().`

export const cantFindReplacementTokenForDeprecatedMessage = (
  deprecatedTokenName: string
): string => `Could not find replacement token for ${deprecatedTokenName}.`

export const cantReplaceDeprecatedTokenInAtRuleMessage = (
  oldTokenName: string,
  newTokenName: string
): string =>
  `${deprecatedTokenUsageMessage(
    oldTokenName,
    newTokenName
  )} But, ${newTokenName} cannot be used within some AtRules like @media because it is a CSS variable.`

export const transitiveKaizenTokenUsage = (
  nameOfVariableThatContainsKaizen: string
): string =>
  `Variable ${nameOfVariableThatContainsKaizen} contains a Kaizen token, and is not allowed because it prevents other rules from detecting invalid kaizen tokens.`

export const deprecatedTokenInVariableMessage = (
  oldTokenName: string,
  newTokenName: string
): string =>
  `${deprecatedTokenUsageMessage(
    oldTokenName,
    newTokenName
  )} It can't be automatically fixed because it is used within a variable.`

export const deprecatedComponentLibraryColorImport =
  "@kaizen/component-library/styles/color.scss has been deprecated"

export const deprecatedComponentLibraryTypeImport =
  "@kaizen/component-library/styles/type.scss has been deprecated"

export const deprecatedComponentLibraryLayoutImport =
  "@kaizen/component-library/styles/layout.scss has been deprecated"
