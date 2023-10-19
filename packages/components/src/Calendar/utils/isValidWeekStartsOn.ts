import { DayPickerProps } from "react-day-picker"
import { DayOfWeek } from "../enums"

export const isValidWeekStartsOn = (
  day: DayOfWeek | undefined
): day is DayPickerProps["weekStartsOn"] =>
  [0, 1, 2, 3, 4, 5, 6, undefined].includes(day)
