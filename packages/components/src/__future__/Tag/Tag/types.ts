export const TagColorKeys = [
  "gray",
  "blue",
  "green",
  "yellow",
  "orange",
  "red",
  "purple",
] as const

export type TagColors = (typeof TagColorKeys)[number]
