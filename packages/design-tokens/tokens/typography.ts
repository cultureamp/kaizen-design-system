import * as typographyTokens from "./typography.json"

export type FamilyTokens = typeof typographyTokens.kz.typography.family
export type WeightTokens = typeof typographyTokens.kz.typography.weight

type Scale = { [key: string]: string }

export interface Typography {
  kz: {
    typography: {
      family: FamilyTokens
      weight: WeightTokens
      display: {
        fontSize: Scale
        lineHeight: Scale
      }
      text: {
        fontSize: Scale
        lineHeight: Scale
      }
      mono: {
        fontSize: Scale
        lineHeight: Scale
      }
    }
  }
}

export const typography: Typography = typographyTokens
