import React, { useEffect, useRef } from "react"
import { enAU } from "date-fns/locale"
import { DayPicker, DayPickerSingleProps } from "react-day-picker"
import { OverrideClassName } from "@kaizen/component-base"
import { DayOfWeek } from "../../enums"
import { isInvalidDate } from "../../utils/isInvalidDate"
import { calendarSingleClasses } from "./CalendarClasses"
import { IconLeft } from "./components/IconLeft"
import { IconRight } from "./components/IconRight"
import { isValidWeekStartsOn } from "./utils/isValidWeekStartsOn"

export type CalendarSingleElement = HTMLDivElement

export interface CalendarSingleProps
  extends OverrideClassName<Omit<DayPickerSingleProps, "mode">> {
  id?: string
  onMount?: (calendarElement: CalendarSingleElement) => void
}

export const CalendarSingle: React.VFC<CalendarSingleProps> = ({
  id,
  onMount,
  classNameOverride,
  selected,
  defaultMonth,
  weekStartsOn = DayOfWeek.Mon,
  locale = enAU,
  ...restProps
}) => {
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
