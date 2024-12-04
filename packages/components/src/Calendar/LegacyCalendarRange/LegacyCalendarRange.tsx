import React from 'react'
import type { Locale } from 'date-fns'
import {
  DayPicker,
  DateRange,
  DayClickEventHandler,
  Matcher,
  DayPickerRangeProps,
} from 'react-day-picker'
import { Icon } from '~components/__future__/Icon'
import { baseCalendarClassNames } from '../baseCalendarClassNames'
import { DayOfWeek } from '../enums'
import { isInvalidDate, isValidWeekStartsOn } from '../utils'
import styles from './LegacyCalendarRange.module.scss'

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
  const selectedMonth = monthToShow && isInvalidDate(monthToShow) ? undefined : monthToShow

  /* eslint-disable camelcase */
  const classNames = {
    ...baseCalendarClassNames,
    nav: styles.nav,
    nav_button_next: styles.navButtonNext,
    day_range_start: styles.dayRangeStart,
    day_range_end: styles.dayRangeEnd,
    day_range_middle: styles.dayRangeMiddle,
  } satisfies DayPickerRangeProps['classNames']
  /* eslint-enable camelcase */

  return (
    <div className={classNameOverride}>
      <DayPicker
        mode="range"
        selected={selectedRange}
        defaultMonth={selectedMonth}
        weekStartsOn={isValidWeekStartsOn(weekStartsOn) ? weekStartsOn : undefined}
        disabled={disabledDays}
        onDayClick={onDayChange}
        classNames={classNames}
        components={{
          IconRight: () => <Icon name="arrow_forward" isPresentational shouldMirrorInRTL />,
          IconLeft: () => <Icon name="arrow_back" isPresentational shouldMirrorInRTL />,
        }}
        locale={locale}
      />
    </div>
  )
}

LegacyCalendarRange.displayName = 'LegacyCalendarRange'
