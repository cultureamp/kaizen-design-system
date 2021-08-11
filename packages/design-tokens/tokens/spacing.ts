import * as spacingTokens from "./spacing.json"

export type SpacingTokens = typeof spacingTokens.spacing

export interface Spacing {
  spacing: SpacingTokens
}

export const spacing: Spacing = spacingTokens
