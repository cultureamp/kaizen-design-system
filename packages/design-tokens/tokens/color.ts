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

/**
 * A helper to access deeply nested tokens
 * @param name The color name
 * @param variant A variant typically between 100-900
 */
export const get: <
  N extends Exclude<ColorNames, "white" | "ash" | "stone">,
  Variant extends keyof ColorTokens[N]
>(
  name: N,
  variant: Variant
) => ColorTokens[N][Variant] = (n, v) =>
  colorTokens.kz.color[n][String(v) as typeof v]

export const color: Color = colorTokens
