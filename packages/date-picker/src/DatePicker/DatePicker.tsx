import { Label } from "@kaizen/draft-form"
import React, { RefObject, useRef, useState } from "react"
import dateStart from "@kaizen/component-library/icons/date-start.icon.svg"
import "react-day-picker/lib/style.css"
import { usePopper } from "react-popper"
import cx from "classnames"
import {
  DayModifiers,
  RangeModifier,
  BeforeAfterModifier,
} from "react-day-picker/types/Modifiers"
import { Icon } from "@kaizen/component-library"
import FocusLock from "react-focus-lock"
import { useClickOutside } from "../hooks/useClickOutside"
import { handleDisabledDays } from "../utils/handleDisabledDays"
import datePickerStyles from "./DatePicker.scss"
import { defaultCalendarClasses } from "./components/Calendar/CalendarClasses"
import { Calendar } from "./components/Calendar"

export interface DatePickerProps {
  id: string
  classNameAndIHaveSpokenToDST?: string
  labelText: string
  isDisabled?: boolean
  buttonRef?: RefObject<HTMLButtonElement>
  description?: string

  /** Accepts a DayOfWeek value to start the week on that day. By default,
   * it's set to Monday.
   */
  firstDayOfWeek?: DayOfWeek

  // Accepts a date to display that month on first render.
  initialMonth?: Date

  // The date passed in from the consumer that renders in the input and calendar.
  value?: Date

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
  buttonRef = useRef<HTMLButtonElement>(null),
  description,
  value,
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
          offset: [0, 15],
        },
      },
    ],
    placement: "bottom-start",
  })

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
    if (Object.keys(modifiers).includes(defaultCalendarClasses.disabled)) {
      return
    }
    onChange(day)
    setIsOpen(false)
  }

  const handleOpenClose = () => {
    setIsOpen(!isOpen)
  }

  const handleReturnFocus = () => {
    if (buttonRef.current) {
      buttonRef.current.focus()
    }
  }

  const disabledDays = handleDisabledDays(
    disabledDates,
    disabledDaysOfWeek,
    disabledRange,
    disabledBeforeAfter,
    disabledBefore,
    disabledAfter
  )

  return (
    <div ref={wrapperRef}>
      <div ref={setReferenceElement}>
        <Label disabled={isDisabled} htmlFor={id} labelText={labelText} />
        <button
          className={cx(
            datePickerStyles.button,
            datePickerStyles.withStartIconAdornment,
            {
              [datePickerStyles.disabled]: isDisabled,
            }
          )}
          id={id}
          disabled={isDisabled}
          ref={buttonRef}
          onClick={handleOpenClose}
          onKeyDown={e => handleKeyDown(e)}
          {...inputProps}
        >
          <div className={datePickerStyles.startIconAdornment}>
            <Icon icon={dateStart} role="presentation" />
          </div>
          <span className={datePickerStyles.value}>
            {value ? value.toLocaleDateString("en-US", dateFormatOptions) : ""}
          </span>
        </button>
      </div>
      {isOpen && (
        <FocusLock onDeactivation={handleReturnFocus}>
          <Calendar
            setPopperElement={setPopperElement}
            styles={styles}
            attributes={attributes}
            classNameAndIHaveSpokenToDST={classNameAndIHaveSpokenToDST}
            value={value}
            initialMonth={initialMonth}
            firstDayOfWeek={firstDayOfWeek}
            disabledDays={disabledDays}
            onDayChange={handleOnDayChange}
            onKeyDown={handleKeyDown}
          />
        </FocusLock>
      )}
    </div>
  )
}
