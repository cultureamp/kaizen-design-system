export const variantTypes = [
  "positive",
  "negative",
  "informative",
  "cautionary",
  "default",
  "assertive",
  "prominent",
] as const

export type WellVariantType = (typeof variantTypes)[number]

export const borderStyleTypes = ["solid", "dashed", "none"] as const

export type WellBorderStyleType = (typeof borderStyleTypes)[number]
