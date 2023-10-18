import React from "react"
import {
  DayPicker,
  DateRange,
  DayClickEventHandler,
  Matcher,
  DayPickerRangeProps,
} from "react-day-picker"
import { ArrowBackwardIcon, ArrowForwardIcon } from "~components/Icon"
import calendarRangeStyles from "../CalendarRange/CalendarRange.module.scss"
import calendarSingleStyles from "../CalendarSingle/CalendarSingle.module.scss"
import { baseCalendarClassNames } from "../baseCalendarClassNames"
import { DayOfWeek } from "../enums"
import { isInvalidDate, isValidWeekStartsOn } from "../utils"

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

  /* eslint-disable camelcase */
  const classNames = {
    ...baseCalendarClassNames,
    nav: calendarSingleStyles.nav,
    nav_button_next: calendarSingleStyles.navButtonNext,
    day_range_start: calendarRangeStyles.dayRangeStart,
    day_range_end: calendarRangeStyles.dayRangeEnd,
    day_range_middle: calendarRangeStyles.dayRangeMiddle,
  } satisfies DayPickerRangeProps["classNames"]
  /* eslint-enable camelcase */

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
        classNames={classNames}
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
