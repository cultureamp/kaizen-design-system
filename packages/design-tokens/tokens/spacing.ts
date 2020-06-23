import * as spacingTokens from "./spacing.json"

export type SpacingTokens = typeof spacingTokens.kz.spacing

export interface Spacing {
  kz: {
    spacing: SpacingTokens
  }
}

export const spacing: Spacing = spacingTokens
