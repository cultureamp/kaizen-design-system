export type PopoverVariant =
  | "default"
  | "informative"
  | "positive"
  | "negative"
  | "cautionary"

export type Size = "small" | "large"

export const PlacementKeys = [
  "top",
  "bottom",
  "top-start",
  "top-end",
  "bottom-start",
  "bottom-end",
  "left",
  "right",
] as const

export type Placement = (typeof PlacementKeys)[number]
