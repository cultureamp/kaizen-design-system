import { DisabledDays } from "~types/date-controls"
import { formatDateAsText } from "~utils/date-controls"

export const transformDateToInputValue = (
  date: Date | undefined,
  disabledDays: DisabledDays,
  locale: Locale
): string => (date ? formatDateAsText(date, disabledDays, locale) : "")
