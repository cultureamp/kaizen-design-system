import React, { useEffect, useRef } from 'react'
import { enAU } from 'date-fns/locale'
import { DayPicker, type DayPickerRangeProps } from 'react-day-picker'
import { Icon } from '~components/__rc__/Icon'
import { baseCalendarClassNames } from '../baseCalendarClassNames'
import { type CalendarRangeElement, type CalendarRangeProps } from '../types'
import { isInvalidDate } from '../utils'
import styles from './CalendarRange.module.scss'

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
    if (calendarRef.current) onMount?.(calendarRef.current)
  }, [calendarRef, onMount])

  const monthToShow = selected?.from ?? defaultMonth
  const selectedMonth = monthToShow && isInvalidDate(monthToShow) ? undefined : monthToShow

  /* eslint-disable camelcase */
  const classNames = {
    ...baseCalendarClassNames,
    month: hasDivider ? styles.monthWithDivider : styles.month,
    caption_end: styles.captionEnd,
    nav: styles.nav,
    day_range_start: styles.dayRangeStart,
    day_range_end: styles.dayRangeEnd,
    day_range_middle: styles.dayRangeMiddle,
  } satisfies DayPickerRangeProps['classNames']
  /* eslint-enable camelcase */

  return (
    <div ref={calendarRef} id={id} className={classNameOverride}>
      <DayPicker
        mode="range"
        selected={selected}
        defaultMonth={selectedMonth}
        classNames={classNames}
        components={{
          IconRight: () => <Icon name="arrow_forward" isPresentational shouldMirrorInRTL />,
          IconLeft: () => <Icon name="arrow_back" isPresentational shouldMirrorInRTL />,
        }}
        numberOfMonths={2}
        locale={locale}
        {...restProps}
      />
    </div>
  )
}

CalendarRange.displayName = 'CalendarRange'
