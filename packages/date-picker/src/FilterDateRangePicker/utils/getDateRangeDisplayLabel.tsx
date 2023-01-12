import React from "react"
import { DateRange } from "../../types"
import { DateRangeDisplayLabel } from "../components/DateRangeDisplayLabel"

export const getDateRangeDisplayLabel = (
  dateRange: DateRange | undefined,
  locale: Locale
): JSX.Element | undefined => {
  if (dateRange === undefined) {
    return undefined
  }

  const { from, to } = dateRange

  if (!from || !to) {
    return undefined
  }

  return <DateRangeDisplayLabel dateRange={{ from, to }} locale={locale} />
}
