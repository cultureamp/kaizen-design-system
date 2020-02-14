import * as typographyTokens from "./typography.json"

export interface Typography {
  kz: {
    typography: {
      [key: string]: {
        fontFamily: string,
        fontWeight: string,
        fontSize: string,
        lineHeight: string,
        letterSpacing?: string
      }
    }
  }
}

export const typography: Typography = typographyTokens
