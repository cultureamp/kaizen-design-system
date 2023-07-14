import React, { useEffect, useRef } from "react"
import { enAU } from "date-fns/locale"
import { DayPicker, DayPickerRangeProps } from "react-day-picker"
import { OverrideClassName } from "@kaizen/component-base"
import { DayOfWeek } from "../../enums"
import { isInvalidDate } from "../../utils/isInvalidDate"
import { IconRight, IconLeft } from "../Icons"
import { calendarRangeClasses } from "./CalendarClasses"

export type CalendarRangeElement = HTMLDivElement

export interface CalendarRangeProps
  extends OverrideClassName<Omit<DayPickerRangeProps, "mode">> {
  id?: string
  onMount?: (calendarElement: CalendarRangeElement) => void
  hasDivider?: boolean
}

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
          IconRight,
          IconLeft,
        }}
        numberOfMonths={2}
        locale={locale}
        {...restProps}
      />
    </div>
  )
}

CalendarRange.displayName = "CalendarRange"
