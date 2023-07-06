import { DisabledDays, formatDateAsText } from "@kaizen/date-picker"

export const transformDateToInputValue = (
  date: Date | undefined,
  disabledDays: DisabledDays,
  locale: Locale
): string => (date ? formatDateAsText(date, disabledDays, locale) : "")
