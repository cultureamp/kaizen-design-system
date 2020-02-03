import * as tokens from "./color.json"

export type ColorTokens = typeof tokens.kz.color
export type DeprecatedColorTokens = typeof tokens.kz.DEPRECATED.color
export type ColorNames = keyof ColorTokens

export interface Color {
  kz: {
    color: ColorTokens
    DEPRECATED: {
      color: DeprecatedColorTokens
    }
  }
}

export const color: <N extends ColorNames>(
  name: N,
  variant: keyof ColorTokens[N]
) => string = (n, v) => tokens.kz.color[n][String(v)]

export const colorTokens: Color = tokens
