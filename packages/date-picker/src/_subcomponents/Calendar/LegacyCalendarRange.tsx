import React from "react"
import { DayPicker, DateRange } from "react-day-picker"
import { DayClickEventHandler } from "react-day-picker/dist/types/EventHandlers"
import { Matcher } from "react-day-picker/dist/types/Matchers"
import { DayOfWeek } from "../../enums"
import { isInvalidDate } from "../../utils/isInvalidDate"
import { IconLeft } from "./components/IconLeft"
import { IconRight } from "./components/IconRight"
import { isValidWeekStartsOn } from "./utils/isValidWeekStartsOn"
import { legacyCalendarRangeClasses } from "./CalendarClasses"

export type LegacyCalendarRangeElement = HTMLDivElement

export type LegacyCalendarRangeProps = {
  id: string
  classNameOverride?: string
  defaultMonth?: Date
  weekStartsOn?: DayOfWeek
  disabledDays?: Matcher[]
  selectedRange?: DateRange
  locale: Locale
  onDayChange: DayClickEventHandler
}

export const LegacyCalendarRange: React.VFC<LegacyCalendarRangeProps> = ({
  id,
  classNameOverride,
  defaultMonth,
  weekStartsOn = DayOfWeek.Mon,
  disabledDays,
  selectedRange,
  locale,
  onDayChange,
}) => {
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
