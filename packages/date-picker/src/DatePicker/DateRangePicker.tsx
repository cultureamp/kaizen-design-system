import { Label } from "@kaizen/draft-form"
import React, { RefObject, useEffect, useRef, useState } from "react"
import dateStart from "@kaizen/component-library/icons/date-start.icon.svg"
import "react-day-picker/dist/style.css"
import { usePopper } from "react-popper"
import cx from "classnames"
import { Icon } from "@kaizen/component-library"
import { FocusOn } from "react-focus-on"
import {
  DateRange,
  DateInterval,
  ActiveModifiers,
  isMatch,
  DateBefore,
} from "react-day-picker"
import { calculateDisabledDays } from "../utils/calculateDisabledDays"
import datePickerStyles from "./DatePicker.scss"
import { defaultCalendarClasses } from "./components/Calendar/CalendarClasses"
import { Calendar } from "./components/Calendar"

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
  firstDayOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined

  // Accepts a date to display that month on first render.
  defaultMonth?: Date

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

enum DayOfWeek {
  Sun = 0,
  Mon = 1,
  Tue = 2,
  Wed = 3,
  Thu = 4,
  Fri = 5,
  Sat = 6,
}

/**
 * {@link https://cultureamp.design/components/date-range-picker/ Guidance} |
 * {@link https://cultureamp.design/storybook/?path=/docs/components-date-picker-date-range-picker--date-range-picker-sticker-sheet Storybook}
 */
export const DateRangePicker: React.VFC<DateRangePickerProps> = ({
  id,
  buttonRef = useRef<HTMLButtonElement>(null),
  description,
  onChange,
  labelText,
  isDisabled = false,
  classNameOverride,
  disabledDates,
  disabledDaysOfWeek,
  disabledRange,
  disabledBeforeAfter,
  disabledBefore,
  disabledAfter,
  firstDayOfWeek = 1,
  defaultMonth,
  selectedDateRange,
  value,
  ...inputProps
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const [referenceElement, setReferenceElement] =
    useState<HTMLDivElement | null>(null)
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  )
  const wrapperRef = useRef<HTMLDivElement>(null)

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

  const handleOpenClose = () => {
    setIsOpen(!isOpen)
  }

  const handleReturnFocus = () => {
    if (buttonRef.current) {
      buttonRef.current.focus()
    }
  }

  const disabledDays = calculateDisabledDays({
    disabledDates,
    disabledDaysOfWeek,
    disabledRange,
    disabledBeforeAfter,
    disabledBefore,
    disabledAfter,
  })

  const handleDayClick = (day: Date, modifiers: ActiveModifiers) => {
    /** react-day-picker will fire events for disabled days by default.
     *  We're checking here if it includes the CSS Modules class for disabled
     *  on the modifier to then return early.
     * */
    if (Object.keys(modifiers).includes(defaultCalendarClasses.disabled)) {
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

  const isSelectingFirstDay = (range: DateRange, day: Date) => {
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
    <div ref={wrapperRef}>
      <div ref={setReferenceElement}>
        <Label disabled={isDisabled} htmlFor={id} labelText={labelText} />
        <button
          id={id}
          className={cx(
            datePickerStyles.button,
            datePickerStyles.withStartIconAdornment,
            {
              [datePickerStyles.disabled]: isDisabled,
            }
          )}
          disabled={isDisabled}
          ref={buttonRef}
          onClick={handleOpenClose}
          {...inputProps}
          aria-label={
            selectedDateRange?.from ? `Change date: ${value}` : "Choose date"
          }
        >
          <div className={datePickerStyles.startIconAdornment}>
            <Icon icon={dateStart} role="presentation" />
          </div>
          <span className={datePickerStyles.value}>
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
        >
          <Calendar
            mode="range"
            id="calendar-dialog"
            setPopperElement={setPopperElement}
            styles={styles}
            attributes={attributes}
            classNameOverride={classNameOverride}
            defaultMonth={defaultMonth}
            weekStartsOn={firstDayOfWeek}
            disabledDays={disabledDays}
            modifiers={modifiers}
            selectedRange={selectedDateRange}
            onDayChange={handleDayClick}
          />
        </FocusOn>
      )}
    </div>
  )
}
