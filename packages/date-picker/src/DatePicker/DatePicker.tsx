import React, { RefObject, useEffect, useRef, useState } from "react"
import dateStart from "@kaizen/component-library/icons/date-start.icon.svg"
import "react-day-picker/lib/style.css"
import { usePopper } from "react-popper"
import {
  DayModifiers,
  RangeModifier,
  BeforeAfterModifier,
} from "react-day-picker/types/Modifiers"
import { FocusOn } from "react-focus-on"
import { parse, format } from "date-fns"
import { calculateDisabledDays } from "../utils/calculateDisabledDays"
import { isInvalidDate } from "../utils/isInvalidDate"
import { isDisabledDate } from "../utils/isDisabledDate"
import { defaultCalendarClasses } from "./components/Calendar/CalendarClasses"
import { Calendar } from "./components/Calendar"
import { DateInput, DateInputProps } from "./components/DateInput"

type OmittedDateInputProps =
  | "value"
  | "isOpen"
  | "icon"
  | "onButtonClick"
  | "calendarId"

export interface DatePickerProps
  extends Omit<DateInputProps, OmittedDateInputProps> {
  id: string
  labelText: string
  isDisabled?: boolean
  buttonRef?: RefObject<HTMLButtonElement>
  onButtonClick?: DateInputProps["onButtonClick"]
  /**
   * Accepts a DayOfWeek value to start the week on that day. By default,
   * it's set to Monday.
   */
  firstDayOfWeek?: DayOfWeek

  // Accepts a date to display that month on first render.
  initialMonth?: Date

  // The date passed in from the consumer that renders in the input and calendar.
  selectedDay: Date | undefined

  /**
   * Callback when date is updated either by the calendar picker or by typing and bluring.
   * Date will return as undefined if invalid or disabled.
   */
  onDayChange: (date: Date | undefined) => void

  /**
   * Accepts an array of singluar dates and disables them.
   * e.g. disabledDates={[new Date(2022, 1, 12), new Date(2022, 1, 25)]}
   */
  disabledDates?: Date[]

  /**
   * Accepts an object with a from and to date. Disables any date
   * inside of that range.
   * disabledRange={ from: new Date(2022, 1, 12), to: new Date(2022, 1, 16) }
   */
  disabledRange?: RangeModifier

  /**
   * Accepts an object with a before and after date. Disables any date
   * outside of that range.
   * { before: new Date(2022, 1, 12), after: new Date(2022, 1, 16) }
   */
  disabledBeforeAfter?: BeforeAfterModifier

  // Accepts single date and disables all days before it.
  disabledBefore?: Date

  // Accepts single date and disables all days after it.
  disabledAfter?: Date

  /**
   * Accepts an array of DayOfWeek values and disables those days throughout
   * the calendar.
   * e.g. disabledDaysOfWeek={[DayOfWeek.Mon, DayOfWeek.Tue]}
   */
  disabledDaysOfWeek?: DayOfWeek[]
}

export enum DateFormat {
  Numeral = "P", // eg. 01/15/2022
  Text = "PP", // eg. Jan 15, 2022
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
  buttonRef = useRef<HTMLButtonElement>(null),
  labelText,
  isDisabled = false,
  disabledDates,
  disabledDaysOfWeek,
  disabledRange,
  disabledBeforeAfter,
  disabledBefore,
  disabledAfter,
  firstDayOfWeek = 1,
  initialMonth,
  selectedDay,
  onButtonClick,
  onDayChange,
  ...restDateInputProps
}) => {
  const valueDate = selectedDay
  const inputRef = useRef<HTMLInputElement>(null)
  const [valueString, setValueString] = useState<string | undefined>()
  const [currentDateFormat, setCurrentDateFormat] = useState<DateFormat>(
    DateFormat.Numeral
  )
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

  const disabledDays = calculateDisabledDays(
    disabledDates,
    disabledDaysOfWeek,
    disabledRange,
    disabledBeforeAfter,
    disabledBefore,
    disabledAfter
  )

  const handleOnDayChange = (day: Date, modifiers: DayModifiers): void => {
    /**
     * react-day-picker will fire events for disabled days by default.
     * We're checking here if it includes the CSS Modules class for disabled
     * on the modifier to then return early.
     */
    if (Object.keys(modifiers).includes(defaultCalendarClasses.disabled)) {
      return
    }

    setValueString(format(day, DateFormat.Text))
    setCurrentDateFormat(DateFormat.Text)
    onDayChange(day)
    setIsOpen(false)
  }

  const handleFormatChange = (input: string): void => {
    if (input === "") {
      onDayChange(undefined)
      return
    }

    const parsedDate = parse(input, currentDateFormat, new Date())

    if (isInvalidDate(parsedDate) || isDisabledDate(parsedDate, disabledDays)) {
      onDayChange(undefined)
      return
    }

    if (currentDateFormat === DateFormat.Numeral) {
      setValueString(format(parsedDate, DateFormat.Text))
      setCurrentDateFormat(DateFormat.Text)
      onDayChange(parsedDate)
    } else {
      setValueString(format(parsedDate, DateFormat.Numeral))
      setCurrentDateFormat(DateFormat.Numeral)
      onDayChange(parsedDate)
    }
  }

  const handleOpenClose = (): void => setIsOpen(!isOpen)

  const handleReturnFocus = (): void => {
    if (buttonRef.current) {
      buttonRef.current.focus()
    }
  }

  const handleTextChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target,
  }): void => {
    setValueString(target.value)
  }

  const handleButtonClick = (): void => {
    handleOpenClose()
    onButtonClick && onButtonClick()
  }

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement> | React.KeyboardEvent<Element>
  ): void => {
    // check whether event key is arrow down or alt + arrow down, open calendar if so.
    if (e.key === "ArrowDown" || (e.key === "ArrowDown" && e.altKey === true)) {
      e.preventDefault()
      setIsOpen(true)
    }
  }

  /**
   * Watcher to toggle the current date format when
   * both values are present.
   */
  useEffect(() => {
    if (valueString && valueDate) {
      const dateNumeral = parse(valueString, DateFormat.Numeral, new Date())
      const dateText = parse(valueString, DateFormat.Text, new Date())

      // isValid will return true for "Invalid Date" which is a truthy Date object
      if (dateNumeral.toString() !== "Invalid Date") {
        setCurrentDateFormat(DateFormat.Numeral)
      } else if (dateText.toString() !== "Invalid Date") {
        setCurrentDateFormat(DateFormat.Text)
      }
    }
  }, [valueString, valueDate])

  /**
   * On first render, if consumer has passed in a valueDate
   * we render it as a string within the input.
   */
  useEffect(() => {
    if (valueDate && !valueString) {
      try {
        // format() can't be passed an invalid date, so we need to catch the range error.
        const formattedDate = format(new Date(valueDate), DateFormat.Text)
        if (formattedDate.toString() !== "Invalid Date") {
          setValueString(formattedDate)
        }
      } catch (error) {
        onDayChange(undefined)
      }
    }
  }, [])

  return (
    <div ref={wrapperRef}>
      <div ref={setReferenceElement}>
        <DateInput
          id={id}
          inputRef={inputRef}
          buttonRef={buttonRef}
          isOpen={isOpen}
          value={valueString ? valueString : ""}
          disabled={isDisabled}
          onBlur={() =>
            valueString !== undefined && handleFormatChange(valueString)
          }
          onFocus={() =>
            valueString !== undefined && handleFormatChange(valueString)
          }
          labelText={labelText}
          description="Format: mm/dd/yyyy"
          icon={dateStart}
          onButtonClick={handleButtonClick}
          onChange={handleTextChange}
          calendarId={`${id}-calendar-dialog`}
          onKeyDown={e => handleKeyDown(e)}
          {...restDateInputProps}
        />
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
            setPopperElement={setPopperElement}
            styles={styles}
            attributes={attributes}
            value={valueDate}
            initialMonth={initialMonth}
            firstDayOfWeek={firstDayOfWeek}
            disabledDays={disabledDays}
            onDayChange={handleOnDayChange}
            inputRef={inputRef}
            onKeyDown={handleKeyDown}
          />
        </FocusOn>
      )}
    </div>
  )
}

DatePicker.displayName = "DatePicker"
