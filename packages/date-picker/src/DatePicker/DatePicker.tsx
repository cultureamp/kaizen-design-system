import { TextField } from "@kaizen/draft-form"
import React, { RefObject, useEffect, useRef, useState } from "react"
import dateStart from "@kaizen/component-library/icons/date-start.icon.svg"
import "react-day-picker/lib/style.css"
import DayPicker from "react-day-picker/DayPicker"
import { usePopper } from "react-popper"
import cx from "classnames"
import {
  DayModifiers,
  RangeModifier,
  BeforeAfterModifier,
} from "react-day-picker/types/Modifiers"
import { daysToNumbers } from "../utils/daysToNumbers"
import { useClickOutside } from "../hooks/useClickOutside"
import datePickerStyles from "./DatePicker.scss"
import { CalendarNav, CalendarNavProps } from "./CalendarNav"
import { defaultDatePickerClasses } from "./DatePickerClasses"

interface DatePickerProps {
  id: string
  classNameAndIHaveSpokenToDST?: string
  labelText?: string
  isDisabled?: boolean
  inputRef?: RefObject<HTMLInputElement> | undefined
  description?: string

  /** Accepts a DayOfWeek value to start the week on that day. By default,
   * it's set to Monday.
   */
  firstDayOfWeek?: DayOfWeek

  // Accepts a date to display that month on first render.
  initialMonth?: Date

  // The date passed in from the consumer that renders in the input and calendar.
  selectedDate?: Date

  // Event passed from consumer to handle the date on change.
  onChange: (day: Date) => void

  /** Accepts an array of singluar dates and disables them.
   * e.g. disabledDates={[new Date(2022, 1, 12), new Date(2022, 1, 25)]}
   *  */
  disabledDates?: Date[]

  /** Accepts an object with a from and to date. Disables any date
   *  inside of that range.
   *  disabledRange={ from: new Date(2022, 1, 12), to: new Date(2022, 1, 16) }
   * */
  disabledRange?: RangeModifier

  /** Accepts an object with a before and after date. Disables any date
   *  outside of that range.
   *  { before: new Date(2022, 1, 12), after: new Date(2022, 1, 16) }
   */
  disabledBeforeAfter?: BeforeAfterModifier

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

export enum DayOfWeek {
  Sun = 0,
  Mon = 1,
  Tue = 2,
  Wed = 3,
  Thu = 4,
  Fri = 5,
  Sat = 6,
}

export const DatePicker: React.FunctionComponent<DatePickerProps> = ({
  id,
  inputRef,
  description,
  selectedDate,
  onChange,
  labelText,
  isDisabled = false,
  classNameAndIHaveSpokenToDST,
  disabledDates,
  disabledDaysOfWeek,
  disabledRange,
  disabledBeforeAfter,
  disabledBefore,
  disabledAfter,
  firstDayOfWeek = 1,
  initialMonth,
  ...inputProps
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [referenceElement, setReferenceElement] =
    useState<HTMLDivElement | null>(null)
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  )
  const wrapperRef = useRef<HTMLDivElement>(null)

  const dateFormatOptions: Intl.DateTimeFormatOptions = {
    month: "short",
    year: "numeric",
    day: "numeric",
  }

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 10],
        },
      },
    ],
    placement: "bottom-start",
  })

  const getNavbar = ({ ...navbarProps }: CalendarNavProps) => (
    <CalendarNav {...navbarProps} />
  )

  useClickOutside(isOpen, setIsOpen, referenceElement, wrapperRef)

  const handleKeyDown = e => {
    switch (e.keyCode) {
      case 27:
        setIsOpen(false)
        break
    }
  }

  const handleOnDayChange = (day: Date, modifiers: DayModifiers) => {
    /** react-day-picker will fire events for disabled days by default.
     *  We're checking here if it includes the CSS Modules class for disabled
     *  on the modifier to then return early.
     * */
    if (Object.keys(modifiers).includes(defaultDatePickerClasses.disabled)) {
      return
    }
    onChange(day)
    setIsOpen(false)
  }

  return (
    <div ref={wrapperRef}>
      <div ref={setReferenceElement}>
        <TextField
          id={id}
          labelText={labelText}
          icon={dateStart}
          value={
            selectedDate
              ? selectedDate.toLocaleDateString("en-US", dateFormatOptions)
              : ""
          }
          disabled={isDisabled}
          inputRef={inputRef}
          description={description}
          onFocus={() => setIsOpen(true)}
          onKeyDown={e => handleKeyDown(e)}
          readOnly
          {...inputProps}
        />
      </div>
      {isOpen && (
        <div
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
          className={cx(datePickerStyles.calendar, {
            classNameAndIHaveSpokenToDST,
          })}
          role="dialog"
          aria-modal="true"
          aria-label={
            selectedDate
              ? `Change date, ${selectedDate.toLocaleDateString()}`
              : "Choose date"
          }
        >
          <DayPicker
            selectedDays={selectedDate}
            initialMonth={initialMonth}
            firstDayOfWeek={firstDayOfWeek}
            disabledDays={[
              ...(disabledDates ? disabledDates : []),
              {
                daysOfWeek: disabledDaysOfWeek
                  ? daysToNumbers(disabledDaysOfWeek)
                  : [],
              },
              disabledRange && {
                from: disabledRange.from,
                to: disabledRange.to,
              },
              disabledBefore && {
                before: disabledBefore,
              },
              disabledAfter && {
                after: disabledAfter,
              },
              disabledBeforeAfter && {
                before: disabledBeforeAfter.before,
                after: disabledBeforeAfter.after,
              },
            ]}
            onDayClick={handleOnDayChange}
            navbarElement={getNavbar}
            classNames={defaultDatePickerClasses}
            onKeyDown={e => handleKeyDown(e)}
          />
        </div>
      )}
    </div>
  )
}
