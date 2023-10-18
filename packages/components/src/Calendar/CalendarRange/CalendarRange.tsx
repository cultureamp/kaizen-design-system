import React, { useEffect, useRef } from "react"
import { enAU } from "date-fns/locale"
import { DayPicker, DayPickerRangeProps } from "react-day-picker"
import { ArrowBackwardIcon, ArrowForwardIcon } from "~components/Icon"
import { OverrideClassName } from "~types/OverrideClassName"
import { calendarRangeClasses } from "../calendarClassNames"
import { DayOfWeek } from "../enums"
import { isInvalidDate } from "../utils"

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

  return (
    <div ref={calendarRef} id={id} className={classNameOverride}>
      <DayPicker
        mode="range"
        selected={selected}
        defaultMonth={selectedMonth}
        weekStartsOn={DayOfWeek.Mon}
        classNames={calendarRangeClasses(hasDivider)}
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
