import type { Locale } from 'date-fns'
import { formatDateAsText, type DisabledDays } from '~components/Calendar'

export const transformDateToInputValue = (
  date: Date | undefined,
  disabledDays: DisabledDays,
  locale: Locale,
): string => (date ? formatDateAsText(date, disabledDays, locale) : '')
