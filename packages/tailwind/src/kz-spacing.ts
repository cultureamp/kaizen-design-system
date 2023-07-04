import { heartTheme } from "@kaizen/design-tokens"

const tokenDenyList: string[] = [
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "xxl",
  "xxxl",
  "xxxxl",
  "xxxxxl",
  "xs-id",
  "sm-id",
  "md-id",
  "lg-id",
  "xl-id",
  "xxl-id",
  "xxxl-id",
  "xxxxl-id",
  "xxxxxl-id",
]

/**
 * checks if a key from design tokens should be filtered from tailwind
 */
const isValidToken = (key: string | number): boolean => {
  if (tokenDenyList.indexOf(`${key}`) < 0) return true
  return false
}

// Filters out non-pixel-based spacing tokens, such as shirt sizes
export const filterDenyListValues = (
  spacingTokensObject: Record<string, string>
): Record<string, string> => {
  const keyValuePairs = Object.entries(spacingTokensObject)

  return Object.fromEntries(keyValuePairs.filter(([key]) => isValidToken(key)))
}

export const kzSpacing = filterDenyListValues(heartTheme.spacing)
