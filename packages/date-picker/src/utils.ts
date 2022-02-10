import { DayOfWeek } from "./DatePicker"

export const daysToNumbers = (days: DayOfWeek[]): number[] =>
  Array.from(days).map(day => day)
