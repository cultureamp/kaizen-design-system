import { Label } from "@kaizen/draft-form"
import React, { RefObject, useEffect, useRef, useState } from "react"
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
import { FocusOn } from "react-focus-on"
import { isValid, parse, format } from "date-fns"
import { calculateDisabledDays } from "../utils/calculateDisabledDays"
import datePickerStyles from "./DatePicker.scss"
import { defaultCalendarClasses } from "./components/Calendar/CalendarClasses"
import { Calendar } from "./components/Calendar"
import { DateInput, validationMessagesProps } from "./components/DateInput"

export interface DatePickerProps {
  id: string
  classNameOverride?: string
  labelText: string
  isDisabled?: boolean
  buttonRef?: RefObject<HTMLButtonElement>
  description?: string
  placeholder?: string
  validationMessages: validationMessagesProps
  variant?: "input" | "button"

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
  isInput?: boolean
  onTextChange?: () => void
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

export const DatePicker: React.VFC<DatePickerProps> = ({
  id,
  variant = "input",
  buttonRef = useRef<HTMLButtonElement>(null),
  description,
  placeholder,
  value,
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
  initialMonth,
  validationMessages,
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

  const disabledDays = calculateDisabledDays(
    disabledDates,
    disabledDaysOfWeek,
    disabledRange,
    disabledBeforeAfter,
    disabledBefore,
    disabledAfter
  )

  const handleOnDayChange = (day: Date, modifiers: DayModifiers) => {
    /** react-day-picker will fire events for disabled days by default.
     *  We're checking here if it includes the CSS Modules class for disabled
     *  on the modifier to then return early.
     * */
    if (Object.keys(modifiers).includes(defaultCalendarClasses.disabled)) {
      return
    }

    if (variant === "input") {
      setValueString(format(day, "PP"))
      setValueDate(day)
    } else {
      onChange(day)
    }
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

  const inputRef = useRef<HTMLInputElement>(null)
  const [valueString, setValueString] = useState<string | undefined>()
  const [valueDate, setValueDate] = useState<Date | undefined>()
  const [isTextValid, setIsTextValid] = useState<boolean>(true)

  const handleOnFocus = (inputText: string) => {
    const parsedDate = parse(inputText, "P", new Date())
    // isValid will return true for "Invalid Date" which is a truthy Date object
    if (parsedDate.toString() === "Invalid Date") return

    const isValidDate = isValid(parsedDate)
    setIsTextValid(isValidDate)

    if (!isTextValid) return

    setValueString(inputText)
    setValueDate(parsedDate)
  }

  const handleOnBlur = () => {
    if (valueString) {
      const parsedDate = parse(valueString, "P", new Date())
      // isValid will return true for "Invalid Date" which is a truthy Date object
      if (parsedDate.toString() === "Invalid Date") return

      const isValidDate = isValid(parsedDate)
      setIsTextValid(isValidDate)

      if (!isTextValid) return

      setValueString(format(parsedDate, "PP"))
    }
  }

  const handleTextChange = e => {
    const target = e.target as HTMLInputElement
    setValueString(target.value)
  }

  const handleKeyDown = e => {
    if (e.key === "ArrowDown" || (e.key === "ArrowDown" && e.altKey === true)) {
      e.preventDefault()
      setIsOpen(true)
    }
    return
  }

  return (
    <div ref={wrapperRef}>
      <div ref={setReferenceElement}>
        {variant === "button" && (
          <>
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
              {...inputProps}
            >
              <div className={datePickerStyles.startIconAdornment}>
                <Icon icon={dateStart} role="presentation" />
              </div>
              <span className={datePickerStyles.value}>
                {value
                  ? value.toLocaleDateString("en-US", dateFormatOptions)
                  : ""}
              </span>
            </button>
          </>
        )}
        {variant === "input" && (
          <DateInput
            id={id}
            inputRef={inputRef}
            buttonRef={buttonRef}
            isOpen={isOpen}
            value={valueString && valueString}
            disabled={isDisabled}
            handleOnBlur={() => handleOnBlur()}
            onFocus={() => valueDate && handleOnFocus(format(valueDate, "P"))}
            labelText={labelText}
            placeholder={placeholder}
            description={description}
            icon={dateStart}
            validationMessages={validationMessages}
            onButtonClick={handleOpenClose}
            onChange={handleTextChange}
            calendarId={"calendar-dialog"}
            onKeyDown={e => handleKeyDown(e)}
            {...inputProps}
          />
        )}
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
          // allow the input to be within focus lock when input variant
          shards={variant === "input" ? [inputRef, buttonRef] : undefined}
        >
          <Calendar
            id="calendar-dialog"
            setPopperElement={setPopperElement}
            styles={styles}
            attributes={attributes}
            classNameOverride={classNameOverride}
            value={valueDate}
            initialMonth={initialMonth}
            firstDayOfWeek={firstDayOfWeek}
            disabledDays={disabledDays}
            onDayChange={handleOnDayChange}
            inputRef={inputRef}
            isInput={variant === "input" ? true : false}
            onKeyDown={handleKeyDown}
          />
        </FocusOn>
      )}
    </div>
  )
}
