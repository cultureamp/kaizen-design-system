import type { Locale } from "date-fns"
import { DisabledDays, formatDateAsText } from "~components/Calendar"

export const transformDateToInputValue = (
  date: Date | undefined,
  disabledDays: DisabledDays,
  locale: Locale
): string => (date ? formatDateAsText(date, disabledDays, locale) : "")
