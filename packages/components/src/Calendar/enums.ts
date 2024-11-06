export const DayOfWeek = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
} as const

// Intentionally naming the type the same as the const for tree-shaking
export type DayOfWeek = (typeof DayOfWeek)[keyof typeof DayOfWeek]

export const DateFormat = {
  Numeral: "P", // eg. 01/15/2022
  Text: "PP", // eg. Jan 15, 2022
} as const

// Intentionally naming the type the same as the const for tree-shaking
export type DateFormat = (typeof DateFormat)[keyof typeof DateFormat]
