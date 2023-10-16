export const DateFormat = {
  Numeral: "P", // eg. 01/15/2022
  Text: "PP", // eg. Jan 15, 2022
} as const

// Intentionally naming the type the same as the const for tree-shaking
// eslint-disable-next-line @typescript-eslint/no-redeclare
export type DateFormat = (typeof DateFormat)[keyof typeof DateFormat]
