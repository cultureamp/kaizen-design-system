import React, { useEffect, useRef } from "react"
import { enAU } from "date-fns/locale"
import { DayPicker, DayPickerSingleProps } from "react-day-picker"
import { ArrowBackwardIcon, ArrowForwardIcon } from "~components/Icon"
import { OverrideClassName } from "~types/OverrideClassName"
import { isInvalidDate } from "~utils/date-controls"
import { calendarSingleClasses } from "../calendarClassNames"
import { DayOfWeek } from "../enums"
import { isValidWeekStartsOn } from "../utils/isValidWeekStartsOn"

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

  return (
    <div ref={calendarRef} id={id} className={classNameOverride}>
      <DayPicker
        mode="single"
        selected={selected && isInvalidDate(selected) ? undefined : selected}
        defaultMonth={selectedMonth}
        weekStartsOn={
          isValidWeekStartsOn(weekStartsOn) ? weekStartsOn : undefined
        }
        classNames={calendarSingleClasses}
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
