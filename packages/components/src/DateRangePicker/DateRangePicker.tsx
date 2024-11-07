import React, { RefObject, useId, useRef, useState } from 'react'
import cx from 'classnames'
import { enUS } from 'date-fns/locale'
import { DateRange, isMatch } from 'react-day-picker'
import { FocusOn } from 'react-focus-on'
import { DisabledDayMatchers, calculateDisabledDays, isDisabledDate } from '~components/Calendar'
import { CalendarPopover } from '~components/Calendar/CalendarPopover'
import {
  LegacyCalendarRange,
  LegacyCalendarRangeProps,
} from '~components/Calendar/LegacyCalendarRange'
import { Label } from '~components/Label'
import { VisuallyHidden } from '~components/VisuallyHidden'
import { Icon } from '~components/__future__/Icon'
import styles from './DateRangePicker.module.scss'

export type DateRangePickerProps = {
  id?: string
  classNameOverride?: string
  labelText: string
  isDisabled?: boolean
  buttonRef?: RefObject<HTMLButtonElement>
  description?: string
  /**
   * Selected date range which is being updated in handleDayClick and checked
   * if within range/not disabled and then passed back to the client to update
   * the state.
   */
  selectedDateRange?: DateRange
  /**
   * String that is formatted by the client with our helper formatDateRangeValue
   * and then passed into the button to display the readable range.
   */
  value?: string
  /**
   * Accepts a DayOfWeek value to start the week on that day.
   * By default it adapts to the provided locale.
   */
  weekStartsOn?: LegacyCalendarRangeProps['weekStartsOn']
  /**
   * Accepts a date to display that month on first render.
   */
  defaultMonth?: LegacyCalendarRangeProps['defaultMonth']
  /**
   * Event passed from consumer to handle the date on change.
   */
  onChange: (dateRange: DateRange) => void
} & DisabledDayMatchers

/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3082094237/Date+Range+Picker Guidance} |
 * {@link https://cultureamp.design/storybook/?path=/docs/components-date-controls-daterangepicker--docs Storybook}
 */
export const DateRangePicker = ({
  id: propsId,
  buttonRef: propsRef,
  description: _description, // not used
  labelText,
  isDisabled = false,
  classNameOverride,
  disabledDates,
  disabledDaysOfWeek,
  disabledRange,
  disabledBeforeAfter,
  disabledBefore,
  disabledAfter,
  weekStartsOn,
  defaultMonth,
  selectedDateRange,
  value,
  onChange,
  ...inputProps
}: DateRangePickerProps): JSX.Element => {
  const fallbackRef = useRef<HTMLButtonElement>(null)
  const buttonRef = propsRef ?? fallbackRef
  const reactId = useId()
  const id = propsId ?? reactId

  const containerRef = useRef<HTMLInputElement>(null)
  const [isOpen, setIsOpen] = useState(false)

  const disabledDays = calculateDisabledDays({
    disabledDates,
    disabledDaysOfWeek,
    disabledRange,
    disabledBeforeAfter,
    disabledBefore,
    disabledAfter,
  })

  const handleOpenClose = (): void => {
    setIsOpen(!isOpen)
  }

  const handleReturnFocus = (): void => {
    if (buttonRef.current) {
      buttonRef.current.focus()
    }
  }

  const handleDayClick = (day: Date): void => {
    /** react-day-picker will fire events for disabled days by default.
     *  We're checking here if it includes the CSS Modules class for disabled
     *  on the modifier to then return early.
     * */

    if (isDisabledDate(day, disabledDays)) {
      return
    }

    if (!selectedDateRange) return

    /** If user has already selected range and then selects again, treat first
     * click as the start of the new range.
     *  */
    if (isSelectingFirstDay(selectedDateRange, day)) {
      onChange({
        from: day,
        to: undefined,
      })
    } else {
      // Otherwise, treat click as the final selection.
      onChange({
        from: selectedDateRange.from,
        to: day,
      })
      handleOpenClose()
    }
  }

  const isSelectingFirstDay = (range: DateRange, day: Date): boolean => {
    const isBeforeFirstDay =
      !!range.from &&
      isMatch(day, [
        {
          before: range.from,
        },
      ])

    const isRangeSelected = !!range.from && !!range.to

    return !range.from || isBeforeFirstDay || isRangeSelected
  }

  return (
    <div>
      <div ref={containerRef} className={classNameOverride}>
        <Label id={`${id}-input-label`} disabled={isDisabled} htmlFor={id} labelText={labelText} />
        <button
          type="button"
          id={id}
          className={cx(styles.button, styles.withStartIconAdornment, {
            [styles.disabled]: isDisabled,
          })}
          disabled={isDisabled}
          ref={buttonRef}
          onClick={handleOpenClose}
          aria-label={selectedDateRange?.from ? `Change date: ${value}` : 'Choose date'}
          {...inputProps}
        >
          <div className={styles.startIconAdornment}>
            <Icon name="today" isPresentational isFilled />
          </div>
          <span className={styles.value}>{selectedDateRange?.from ? value : undefined}</span>
        </button>
      </div>

      {isOpen && (
        <FocusOn
          scrollLock={false}
          onDeactivation={handleReturnFocus}
          onClickOutside={handleOpenClose}
          onEscapeKey={handleOpenClose}
          enabled={isOpen}
        >
          <CalendarPopover
            referenceElement={containerRef.current}
            aria-labelledby={`${id}-calendar-label ${id}-input-label`}
          >
            <VisuallyHidden id={`${id}-calendar-label`}>
              Select dates from calendar for:
            </VisuallyHidden>
            <LegacyCalendarRange
              selectedRange={selectedDateRange}
              defaultMonth={defaultMonth}
              weekStartsOn={weekStartsOn}
              disabledDays={disabledDays}
              onDayChange={handleDayClick}
              locale={enUS}
            />
          </CalendarPopover>
        </FocusOn>
      )}
    </div>
  )
}

DateRangePicker.displayName = 'DateRangePicker'
