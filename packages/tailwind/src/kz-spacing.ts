const { heartTheme } = require("@kaizen/design-tokens")

const allSpacingTokenPairs: Array<[string | number, string]> = Object.entries(
  heartTheme.spacing
)

// Filters out non-pixel-based spacing tokens
export const kzSpacing = Object.fromEntries(
  allSpacingTokenPairs.filter(([key, value]) => !Number.isNaN(Number(key)))
)
