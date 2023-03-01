import { heartTheme } from "@kaizen/design-tokens"

// Filters out non-pixel-based spacing tokens, such as shirt sizes
export const filterOutNonPixelTokens = (
  spacingTokensObject: Record<string, string>
): Record<string, string> => {
  const keyValuePairs = Object.entries(spacingTokensObject)

  return Object.fromEntries(
    keyValuePairs.filter(([key, value]) => !Number.isNaN(Number(key)))
  )
}

export const kzSpacing = filterOutNonPixelTokens(heartTheme.spacing)
