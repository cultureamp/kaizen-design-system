import { DisabledDays } from "~components/Calendar"
import { formatDateAsText } from "~utils/date-controls"

export const transformDateToInputValue = (
  date: Date | undefined,
  disabledDays: DisabledDays,
  locale: Locale
): string => (date ? formatDateAsText(date, disabledDays, locale) : "")
