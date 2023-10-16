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
// eslint-disable-next-line @typescript-eslint/no-redeclare
export type DayOfWeek = (typeof DayOfWeek)[keyof typeof DayOfWeek]
