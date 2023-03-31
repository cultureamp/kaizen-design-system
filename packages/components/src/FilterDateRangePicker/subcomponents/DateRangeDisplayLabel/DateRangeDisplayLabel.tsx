import React from "react"
import { formatDateAsText } from "@kaizen/date-picker/src/utils/formatDateAsText"
import styles from "./DateRangeDisplayLabel.module.scss"

export interface DateRangeDisplayLabelProps {
  dateRange: { from: Date; to: Date }
  locale: Locale
}

export const DateRangeDisplayLabel = ({
  dateRange,
  locale,
}: DateRangeDisplayLabelProps): JSX.Element | null => {
  const formattedDateFrom = formatDateAsText(dateRange.from, undefined, locale)
  const formattedDateTo = formatDateAsText(dateRange.to, undefined, locale)

  return (
    <span className={styles.dateRangeDisplayLabel}>
      <span>{formattedDateFrom}</span>
      <span>-</span>
      <span>{formattedDateTo}</span>
    </span>
  )
}

DateRangeDisplayLabel.displayName = "DateRangeDisplayLabel"
