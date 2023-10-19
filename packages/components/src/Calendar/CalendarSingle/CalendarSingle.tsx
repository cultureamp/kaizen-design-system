import React, { useEffect, useRef } from "react"
import { enAU } from "date-fns/locale"
import { DayPicker, DayPickerSingleProps } from "react-day-picker"
import { ArrowBackwardIcon, ArrowForwardIcon } from "~components/Icon"
import { OverrideClassName } from "~types/OverrideClassName"
import { baseCalendarClassNames } from "../baseCalendarClassNames"
import { DayOfWeek } from "../enums"
import { isInvalidDate, isValidWeekStartsOn } from "../utils"
import styles from "./CalendarSingle.module.scss"

export type CalendarSingleElement = HTMLDivElement

export type CalendarSingleProps = {
  id?: string
  onMount?: (calendarElement: CalendarSingleElement) => void
} & OverrideClassName<Omit<DayPickerSingleProps, "mode">>

export const CalendarSingle = ({
  id,
  onMount,
  classNameOverride,
  selected,
  defaultMonth,
  weekStartsOn = DayOfWeek.Mon,
  locale = enAU,
  ...restProps
}: CalendarSingleProps): JSX.Element => {
  const calendarRef = useRef<CalendarSingleElement>(null)

  useEffect(() => {
    if (calendarRef.current) onMount?.(calendarRef.current)
  }, [calendarRef])

  const monthToShow = selected || defaultMonth
  const selectedMonth =
    monthToShow && isInvalidDate(monthToShow) ? undefined : monthToShow

  /* eslint-disable camelcase */
  const classNames = {
    ...baseCalendarClassNames,
    nav: styles.nav,
    nav_button_next: styles.navButtonNext,
  } satisfies DayPickerSingleProps["classNames"]
  /* eslint-enable camelcase */

  return (
    <div ref={calendarRef} id={id} className={classNameOverride}>
      <DayPicker
        mode="single"
        selected={selected && isInvalidDate(selected) ? undefined : selected}
        defaultMonth={selectedMonth}
        weekStartsOn={
          isValidWeekStartsOn(weekStartsOn) ? weekStartsOn : undefined
        }
        classNames={classNames}
        components={{
          IconRight: () => <ArrowForwardIcon role="presentation" />,
          IconLeft: () => <ArrowBackwardIcon role="presentation" />,
        }}
        locale={locale}
        {...restProps}
      />
    </div>
  )
}

CalendarSingle.displayName = "CalendarSingle"
