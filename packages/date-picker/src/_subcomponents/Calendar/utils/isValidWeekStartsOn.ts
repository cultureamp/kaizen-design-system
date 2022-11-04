import { DayOfWeek } from "../../../enums"
import { WeekStartsOn } from "../../../types"

export const isValidWeekStartsOn = (
  day: DayOfWeek | undefined
): day is WeekStartsOn => [0, 1, 2, 3, 4, 5, 6, undefined].includes(day)
