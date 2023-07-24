import React, { useEffect, useRef } from "react"
import { enAU } from "date-fns/locale"
import { DayPicker, DayPickerSingleProps } from "react-day-picker"
import { OverrideClassName } from "@kaizen/component-base"
import { DayOfWeek } from "../../enums"
import { isInvalidDate } from "../../utils/isInvalidDate"
import { IconLeft, IconRight } from "../Icons"
import { calendarSingleClasses } from "./CalendarClasses"
import { isValidWeekStartsOn } from "./utils/isValidWeekStartsOn"

export type CalendarSingleElement = HTMLDivElement

export interface CalendarSingleProps
  extends OverrideClassName<Omit<DayPickerSingleProps, "mode">> {
  id?: string
  onMount?: (calendarElement: CalendarSingleElement) => void
}

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
    if (calendarRef.current) onMount && onMount(calendarRef.current)
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
          IconRight,
          IconLeft,
        }}
        locale={locale}
        {...restProps}
      />
    </div>
  )
}

CalendarSingle.displayName = "CalendarSingle"
