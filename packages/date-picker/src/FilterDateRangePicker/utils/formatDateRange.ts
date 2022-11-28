import { DateRange } from "../../types"
import { formatDateAsText } from "../../utils/formatDateAsText"

export const formatDateRange = (
  dateRange: DateRange | undefined,
  locale: Locale
): string => {
  if (dateRange === undefined) {
    return ""
  }

  const dateFrom = dateRange.from
  const dateTo = dateRange.to

  if (!dateFrom || !dateTo) {
    return ""
  }

  const formattedDateFrom = formatDateAsText(dateFrom, undefined, locale)
  const formattedDateTo = formatDateAsText(dateTo, undefined, locale)

  return `${formattedDateFrom} - ${formattedDateTo}`
}
