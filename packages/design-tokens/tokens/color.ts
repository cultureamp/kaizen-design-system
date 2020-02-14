import * as colorTokens from "./color.json"

export type ColorTokens = typeof colorTokens.kz.color
export type DeprecatedColorTokens = typeof colorTokens.kz.DEPRECATED.color
export type ColorNames = keyof ColorTokens

export interface Color {
  kz: {
    color: ColorTokens
    DEPRECATED: {
      color: DeprecatedColorTokens
    }
  }
}

export const get: <N extends ColorNames>(
  name: N,
  variant: keyof ColorTokens[N]
) => string = (n, v) => colorTokens.kz.color[n][String(v)]

export const color: Color = colorTokens
