import React from 'react'
import type { Locale } from 'date-fns'
import {
  DayPicker,
  type DateRange,
  type DayEventHandler,
  type Matcher,
  type PropsBase,
} from 'react-day-picker'
import { Icon } from '~components/__next__/Icon'
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
  onDayChange: DayEventHandler<React.MouseEvent>
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
  const monthToShow = selectedRange?.from ?? defaultMonth
  const selectedMonth = monthToShow && isInvalidDate(monthToShow) ? undefined : monthToShow

  /* eslint-disable camelcase */
  const classNames: PropsBase['classNames'] = {
    ...baseCalendarClassNames,
    nav: styles.nav,
    range_start: styles.dayRangeStart,
    range_end: styles.dayRangeEnd,
    range_middle: styles.dayRangeMiddle,
  }
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
          Chevron: (props) => {
            if (props.orientation === 'left') {
              return <Icon name="arrow_back" isPresentational shouldMirrorInRTL />
            }

            return <Icon name="arrow_forward" isPresentational shouldMirrorInRTL />
          },
        }}
        locale={locale}
      />
    </div>
  )
}

LegacyCalendarRange.displayName = 'LegacyCalendarRange'
