import { DateRange } from "react-day-picker"

const dateFormatOptions: Intl.DateTimeFormatOptions = {
  month: "short",
  year: "numeric",
  day: "numeric",
}

const dateWithoutYearFormatOptions: Intl.DateTimeFormatOptions = {
  month: "short",
  day: "numeric",
}

export const formatDateRangeValue = (dateRange: DateRange): string => {
  if (dateRange.to) {
    const isSameYear =
      dateRange.from?.getFullYear() === dateRange?.to?.getFullYear()

    const from = isSameYear
      ? dateRange.from?.toLocaleDateString(
          "en-US",
          dateWithoutYearFormatOptions
        )
      : dateRange.from?.toLocaleDateString("en-US", dateFormatOptions)

    const to = dateRange.to.toLocaleDateString("en-US", dateFormatOptions)

    return `${from} – ${to}`
  } else {
    const from = dateRange.from
      ? dateRange.from.toLocaleDateString("en-US", dateFormatOptions)
      : ""

    return from
  }
}
