import { format, type Locale } from 'date-fns'
import { DateFormat } from '../enums'
import { type DisabledDays } from '../types'
import { isDisabledDate } from './isDisabledDate'
import { isInvalidDate } from './isInvalidDate'

export const formatDateAsText = (
  date: Date,
  disabledDays: DisabledDays,
  locale: Locale,
): string => {
  if (isDisabledDate(date, disabledDays)) {
    return format(date, DateFormat.Numeral, { locale })
  }
  if (isInvalidDate(date)) {
    return 'Invalid Date'
  }
  return format(date, DateFormat.Text, { locale })
}
