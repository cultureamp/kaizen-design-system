import { RangeModifier } from "react-day-picker/types/Modifiers"

const dateFormatOptions: Intl.DateTimeFormatOptions = {
  month: "short",
  year: "numeric",
  day: "numeric",
}
const dateNoYearFormatOptions: Intl.DateTimeFormatOptions = {
  month: "short",
  day: "numeric",
}

export const formatDateRangeValue = (range: RangeModifier) => {
  if (range.to) {
    const hasSameYear = range?.from?.getFullYear() === range?.to?.getFullYear()

    const from = hasSameYear
      ? range?.from?.toLocaleDateString("en-US", dateNoYearFormatOptions)
      : range?.from?.toLocaleDateString("en-US", dateFormatOptions)

    const to = range.to.toLocaleDateString("en-US", dateFormatOptions)
    return `${from} – ${to}`
  } else {
    const from = range?.from
      ? range.from.toLocaleDateString("en-US", dateFormatOptions)
      : ""
    return from
  }
}
