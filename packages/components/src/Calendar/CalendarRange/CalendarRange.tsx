import React, { useEffect, useRef } from "react"
import { enAU } from "date-fns/locale"
import { DayPicker, DayPickerRangeProps } from "react-day-picker"
import { ArrowBackwardIcon, ArrowForwardIcon } from "~components/Icon"
import { OverrideClassName } from "~types/OverrideClassName"
import { baseCalendarClassNames } from "../baseCalendarClassNames"
import { DayOfWeek } from "../enums"
import { isInvalidDate } from "../utils"
import styles from "./CalendarRange.module.scss"

export type CalendarRangeElement = HTMLDivElement

export type CalendarRangeProps = {
  id?: string
  onMount?: (calendarElement: CalendarRangeElement) => void
  hasDivider?: boolean
} & OverrideClassName<Omit<DayPickerRangeProps, "mode">>

export const CalendarRange = ({
  id,
  onMount,
  hasDivider = false,
  classNameOverride,
  selected,
  defaultMonth,
  locale = enAU,
  ...restProps
}: CalendarRangeProps): JSX.Element => {
  const calendarRef = useRef<CalendarRangeElement>(null)

  useEffect(() => {
    if (calendarRef.current) onMount && onMount(calendarRef.current)
  }, [calendarRef])

  const monthToShow = selected?.from || defaultMonth
  const selectedMonth =
    monthToShow && isInvalidDate(monthToShow) ? undefined : monthToShow

  /* eslint-disable camelcase */
  const classNames = {
    ...baseCalendarClassNames,
    month: hasDivider ? styles.monthWithDivider : styles.month,
    caption_end: styles.captionEnd,
    nav: styles.nav,
    day_range_start: styles.dayRangeStart,
    day_range_end: styles.dayRangeEnd,
    day_range_middle: styles.dayRangeMiddle,
  } satisfies DayPickerRangeProps["classNames"]
  /* eslint-enable camelcase */

  return (
    <div ref={calendarRef} id={id} className={classNameOverride}>
      <DayPicker
        mode="range"
        selected={selected}
        defaultMonth={selectedMonth}
        weekStartsOn={DayOfWeek.Mon}
        classNames={classNames}
        components={{
          IconRight: () => <ArrowForwardIcon role="presentation" />,
          IconLeft: () => <ArrowBackwardIcon role="presentation" />,
        }}
        numberOfMonths={2}
        locale={locale}
        {...restProps}
      />
    </div>
  )
}

CalendarRange.displayName = "CalendarRange"
