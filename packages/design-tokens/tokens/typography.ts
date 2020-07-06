import * as typographyTokens from "./typography.json"

type TypeDefinition = {
  fontFamily: string
  fontWeight: string
  fontSize: string
  lineHeight: string
  letterSpacing: string
}

type TypeWeightVariant = {
  fontWeight: string
}

export interface Typography {
  kz: {
    typography: {
      [key: string]: TypeDefinition | TypeWeightVariant
    }
  }
}

export const typography: Typography = typographyTokens
