import React, { useEffect, useRef } from 'react'
import { enAU } from 'date-fns/locale'
import { DayPicker, type DayPickerSingleProps } from 'react-day-picker'
import { Icon } from '~components/__next__/Icon'
import { type OverrideClassName } from '~components/types/OverrideClassName'
import { baseCalendarClassNames } from '../baseCalendarClassNames'
import { isInvalidDate, isValidWeekStartsOn } from '../utils'
import styles from './CalendarSingle.module.scss'

export type CalendarSingleElement = HTMLDivElement

export type CalendarSingleProps = {
  id?: string
  onMount?: (calendarElement: CalendarSingleElement) => void
} & OverrideClassName<Omit<DayPickerSingleProps, 'mode'>>

export const CalendarSingle = ({
  id,
  onMount,
  classNameOverride,
  selected,
  defaultMonth,
  weekStartsOn,
  locale = enAU,
  ...restProps
}: CalendarSingleProps): JSX.Element => {
  const calendarRef = useRef<CalendarSingleElement>(null)

  useEffect(() => {
    if (calendarRef.current) onMount?.(calendarRef.current)
  }, [calendarRef, onMount])

  const monthToShow = selected ?? defaultMonth
  const selectedMonth = monthToShow && isInvalidDate(monthToShow) ? undefined : monthToShow

  /* eslint-disable camelcase */
  const classNames = {
    ...baseCalendarClassNames,
    nav: styles.nav,
    nav_button_next: styles.navButtonNext,
  } satisfies DayPickerSingleProps['classNames']
  /* eslint-enable camelcase */

  return (
    <div ref={calendarRef} id={id} className={classNameOverride}>
      <DayPicker
        mode="single"
        selected={selected && isInvalidDate(selected) ? undefined : selected}
        defaultMonth={selectedMonth}
        weekStartsOn={isValidWeekStartsOn(weekStartsOn) ? weekStartsOn : undefined}
        classNames={classNames}
        components={{
          IconRight: () => <Icon name="arrow_forward" isPresentational shouldMirrorInRTL />,
          IconLeft: () => <Icon name="arrow_back" isPresentational shouldMirrorInRTL />,
        }}
        locale={locale}
        {...restProps}
      />
    </div>
  )
}

CalendarSingle.displayName = 'CalendarSingle'
