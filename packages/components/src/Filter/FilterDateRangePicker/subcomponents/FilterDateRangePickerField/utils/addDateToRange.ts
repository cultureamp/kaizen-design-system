import { isBefore } from 'date-fns'
import { isInvalidDate, type DateRange } from '~components/Calendar'

/**
 * A click on a complete range starts a new one, so any range is reachable in two clicks.
 */
export const addDateToRange = (range: DateRange | undefined, date: Date): DateRange => {
  const from = range?.from && !isInvalidDate(range.from) ? range.from : undefined

  if (!from || range?.to) return { from: date, to: undefined }
  if (isBefore(date, from)) return { from: date, to: from }
  return { from, to: date }
}
