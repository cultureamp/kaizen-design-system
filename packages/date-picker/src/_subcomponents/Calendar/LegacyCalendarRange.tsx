import React from "react"
import {
  DayPicker,
  DateRange,
  DayClickEventHandler,
  Matcher,
} from "react-day-picker"
import { DayOfWeek } from "../../enums"
import { isInvalidDate } from "../../utils/isInvalidDate"
import { IconLeft, IconRight } from "../Icons"
import { legacyCalendarRangeClasses } from "./CalendarClasses"
import { isValidWeekStartsOn } from "./utils/isValidWeekStartsOn"

export type LegacyCalendarRangeElement = HTMLDivElement

export type LegacyCalendarRangeProps = {
  id?: string
  classNameOverride?: string
  defaultMonth?: Date
  weekStartsOn?: DayOfWeek
  disabledDays?: Matcher[]
  selectedRange?: DateRange
  locale: Locale
  onDayChange: DayClickEventHandler
}

export const LegacyCalendarRange = ({
  id,
  classNameOverride,
  defaultMonth,
  weekStartsOn = DayOfWeek.Mon,
  disabledDays,
  selectedRange,
  locale,
  onDayChange,
}: LegacyCalendarRangeProps): JSX.Element => {
  const monthToShow = selectedRange?.from || defaultMonth
  const selectedMonth =
    monthToShow && isInvalidDate(monthToShow) ? undefined : monthToShow

  return (
    <div id={id} className={classNameOverride}>
      <DayPicker
        mode="range"
        selected={selectedRange}
        defaultMonth={selectedMonth}
        weekStartsOn={
          isValidWeekStartsOn(weekStartsOn) ? weekStartsOn : undefined
        }
        disabled={disabledDays}
        onDayClick={onDayChange}
        classNames={legacyCalendarRangeClasses}
        components={{
          IconRight,
          IconLeft,
        }}
        locale={locale}
      />
    </div>
  )
}

LegacyCalendarRange.displayName = "LegacyCalendarRange"
