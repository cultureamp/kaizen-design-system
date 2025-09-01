import React, { useEffect, useRef } from 'react'
import { enAU } from 'date-fns/locale'
import { DayPicker, type PropsBase, type PropsRange } from 'react-day-picker'
import { Icon } from '~components/Icon'
import { type OverrideClassName } from '~components/types/OverrideClassName'
import { baseCalendarClassNames } from '../baseCalendarClassNames'
import { isInvalidDate } from '../utils'
import styles from './CalendarRange.module.scss'

export type CalendarRangeElement = HTMLDivElement

export type CalendarRangeProps = {
  id?: string
  onMount?: (calendarElement: CalendarRangeElement) => void
  hasDivider?: boolean
} & OverrideClassName<Omit<PropsRange & Omit<PropsBase, 'mode'>, 'mode'>>

export const CalendarRange = ({
  id,
  onMount,
  hasDivider = false,
  classNameOverride,
  selected,
  defaultMonth,
  numberOfMonths = 2,
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
  const classNames: PropsBase['classNames'] = {
    ...baseCalendarClassNames,
    month: hasDivider ? styles.monthWithDivider : styles.month,
    nav: styles.nav,
    range_start: styles.dayRangeStart,
    range_end: styles.dayRangeEnd,
    range_middle: styles.dayRangeMiddle,
    hidden: styles.hidden,
  }
  /* eslint-enable camelcase */

  return (
    <div ref={calendarRef} id={id} className={classNameOverride}>
      <DayPicker
        mode="range"
        selected={selected}
        defaultMonth={selectedMonth}
        classNames={classNames}
        components={{
          Chevron: (props) => {
            if (props.orientation === 'left') {
              return <Icon name="arrow_back" isPresentational shouldMirrorInRTL />
            }

            return <Icon name="arrow_forward" isPresentational shouldMirrorInRTL />
          },
        }}
        numberOfMonths={numberOfMonths}
        locale={locale}
        {...restProps}
      />
    </div>
  )
}

CalendarRange.displayName = 'CalendarRange'
