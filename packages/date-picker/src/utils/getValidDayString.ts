import { format, isValid } from "date-fns"
import { DateFormat } from "../.."

export const getValidDayString = (
  selectedDay: Date | undefined
): string | undefined => {
  if (selectedDay !== undefined && isValid(selectedDay))
    return format(selectedDay, DateFormat.Text)
  return undefined
}
