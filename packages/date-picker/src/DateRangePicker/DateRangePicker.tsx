import { Label } from "@kaizen/draft-form"
import React, { RefObject, useRef, useState } from "react"
import dateStart from "@kaizen/component-library/icons/date-start.icon.svg"
import { usePopper } from "react-popper"
import cx from "classnames"
import { Icon } from "@kaizen/component-library"
import { FocusOn } from "react-focus-on"
import { DateRange, DateInterval, isMatch } from "react-day-picker"
import { enUS } from "date-fns/locale"
import { calculateDisabledDays } from "../utils/calculateDisabledDays"
import { isDisabledDate } from "../utils/isDisabledDate"
import { Calendar, CalendarProps } from "../_primitives/Calendar"
import { DayOfWeek } from "../enums"
import dateRangePickerStyles from "./DateRangePicker.scss"

export interface DateRangePickerProps {
  id: string
  classNameOverride?: string
  labelText: string
  isDisabled?: boolean
  buttonRef?: RefObject<HTMLButtonElement>
  description?: string
  /** Selected date range which is being updated in handleDayClick and checked
   * if within range/not disabled and then passed back to the client to update
   * the state.
   */
  selectedDateRange?: DateRange

  /** String that is formatted by the client with our helper formatDateRangeValue
   * and then passed into the button to display the readable range.
   */
  value?: string

  /** Accepts a DayOfWeek value to start the week on that day. By default,
   * it's set to Monday.
   */
  weekStartsOn?: CalendarProps["weekStartsOn"]

  // Accepts a date to display that month on first render.
  defaultMonth?: CalendarProps["defaultMonth"]

  // Event passed from consumer to handle the date on change.
  onChange: (dateRange: DateRange) => void

  /** Accepts an array of singluar dates and disables them.
   * e.g. disabledDates={[new Date(2022, 1, 12), new Date(2022, 1, 25)]}
   *  */
  disabledDates?: Date[]

  /** Accepts an object with a from and to date. Disables any date
   *  inside of that range.
   *  disabledRange={ from: new Date(2022, 1, 12), to: new Date(2022, 1, 16) }
   * */
  disabledRange?: DateRange

  /** Accepts an object with a before and after date. Disables any date
   *  outside of that range.
   *  { before: new Date(2022, 1, 12), after: new Date(2022, 1, 16) }
   */
  disabledBeforeAfter?: DateInterval

  // Accepts single date and disables all days before it.
  disabledBefore?: Date

  // Accepts single date and disables all days after it.
  disabledAfter?: Date

  /** Accepts an array of DayOfWeek values and disables those days throughout
   *  the calendar.
   * e.g. disabledDaysOfWeek={[DayOfWeek.Mon, DayOfWeek.Tue]}
   */
  disabledDaysOfWeek?: DayOfWeek[]
}

/**
 * {@link https://cultureamp.design/components/date-range-picker/ Guidance} |
 * {@link https://cultureamp.design/storybook/?path=/docs/components-date-picker-date-range-picker--date-range-picker-sticker-sheet Storybook}
 */
export const DateRangePicker: React.VFC<DateRangePickerProps> = ({
  id,
  buttonRef = useRef<HTMLButtonElement>(null),
  description,
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
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [referenceElement, setReferenceElement] =
    useState<HTMLDivElement | null>(null)
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  )

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 15],
        },
      },
    ],
    placement: "bottom-start",
  })

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

  const modifiers: DateRange = {
    from: selectedDateRange?.from,
    to: selectedDateRange?.to,
  }

  return (
    <div>
      <div ref={setReferenceElement}>
        <Label disabled={isDisabled} htmlFor={id} labelText={labelText} />
        <button
          id={id}
          className={cx(
            dateRangePickerStyles.button,
            dateRangePickerStyles.withStartIconAdornment,
            {
              [dateRangePickerStyles.disabled]: isDisabled,
            }
          )}
          disabled={isDisabled}
          ref={buttonRef}
          onClick={handleOpenClose}
          aria-label={
            selectedDateRange?.from ? `Change date: ${value}` : "Choose date"
          }
          {...inputProps}
        >
          <div className={dateRangePickerStyles.startIconAdornment}>
            <Icon icon={dateStart} role="presentation" />
          </div>
          <span className={dateRangePickerStyles.value}>
            {selectedDateRange?.from ? value : undefined}
          </span>
        </button>
      </div>
      {isOpen && (
        <FocusOn
          scrollLock={false}
          onDeactivation={handleReturnFocus}
          onClickOutside={() => {
            handleOpenClose()
          }}
          onEscapeKey={() => {
            handleOpenClose()
          }}
          enabled={isOpen}
        >
          <div
            ref={setPopperElement}
            style={styles?.popper}
            {...attributes?.popper}
            className={dateRangePickerStyles.popper}
          >
            <Calendar
              mode="range"
              id={`${id}-calendar-dialog`}
              selectedRange={selectedDateRange}
              defaultMonth={defaultMonth}
              weekStartsOn={weekStartsOn}
              disabledDays={disabledDays}
              onDayChange={handleDayClick}
              modifiers={modifiers}
              locale={enUS}
            />
          </div>
        </FocusOn>
      )}
    </div>
  )
}
