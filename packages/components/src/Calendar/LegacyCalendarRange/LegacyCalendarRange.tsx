import React from "react"
import {
  DayPicker,
  DateRange,
  DayClickEventHandler,
  Matcher,
} from "react-day-picker"
import { ArrowBackwardIcon, ArrowForwardIcon } from "~components/Icon"
import { isInvalidDate } from "~utils/date-controls"
import { legacyCalendarRangeClasses } from "../calendarClassNames"
import { DayOfWeek } from "../enums"
import { isValidWeekStartsOn } from "../utils/isValidWeekStartsOn"

export type LegacyCalendarRangeElement = HTMLDivElement

export type LegacyCalendarRangeProps = {
  classNameOverride?: string
  defaultMonth?: Date
  weekStartsOn?: DayOfWeek
  disabledDays?: Matcher[]
  selectedRange?: DateRange
  locale: Locale
  onDayChange: DayClickEventHandler
}

export const LegacyCalendarRange = ({
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
    <div className={classNameOverride}>
      <DayPicker
        mode="range"
        selected={selectedRange}
        defaultMonth={selectedMonth}
        weekStartsOn={
          isValidWeekStartsOn(weekStartsOn) ? weekStartsOn : undefined
        }
        disabled={disabledDays}
        onDayClick={onDayChange}
        classNames={legacyCalendarRangeClasses()}
        components={{
          IconRight: () => <ArrowForwardIcon role="presentation" />,
          IconLeft: () => <ArrowBackwardIcon role="presentation" />,
        }}
        locale={locale}
      />
    </div>
  )
}

LegacyCalendarRange.displayName = "LegacyCalendarRange"
