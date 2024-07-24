/** @deprecated */
export const variantTypes = [
  "positive",
  "negative",
  "informative",
  "cautionary",
  "default",
  "assertive",
  "prominent",
] as const

/** @deprecated use `WellColorType` and `color` prop instead  */
export type WellVariantType = (typeof variantTypes)[number]

export const wellColors = [
  "white",
  "gray",
  "blue",
  "yellow",
  "red",
  "green",
  "purple",
] as const

export type WellColorType = (typeof wellColors)[number]

export const borderStyleTypes = ["solid", "dashed", "none"] as const

export type WellBorderStyleType = (typeof borderStyleTypes)[number]
