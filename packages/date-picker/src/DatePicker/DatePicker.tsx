import React, { RefObject, useEffect, useRef, useState } from "react"
import dateStart from "@kaizen/component-library/icons/date-start.icon.svg"
import "react-day-picker/lib/style.css"
import { usePopper } from "react-popper"
import {
  DayModifiers,
  RangeModifier,
  BeforeAfterModifier,
} from "react-day-picker/types/Modifiers"
import { ModifiersUtils } from "react-day-picker"
import { FocusOn } from "react-focus-on"
import { isValid, parse, format } from "date-fns"
import { calculateDisabledDays } from "../utils/calculateDisabledDays"
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
  /** Accepts a DayOfWeek value to start the week on that day. By default,
   * it's set to Monday.
   */
  firstDayOfWeek?: DayOfWeek

  // Accepts a date to display that month on first render.
  initialMonth?: Date

  // The date passed in from the consumer that renders in the input and calendar.
  valueDate: Date | undefined

  // Setter for updating the selected date used by the consumer.
  setValueDate: React.Dispatch<React.SetStateAction<Date | undefined>>

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

type DateFormat = "P" | "PP"

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
  description,
  placeholder,
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
  valueDate,
  setValueDate,
  ...inputProps
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [valueString, setValueString] = useState<string | undefined>()
  const [isTextValid, setIsTextValid] = useState<boolean>(true)
  const [currentDateFormat, setCurrentDateFormat] = useState<DateFormat>("P")
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

  const handleOnDayChange = (day: Date, modifiers: DayModifiers) => {
    /** react-day-picker will fire events for disabled days by default.
     *  We're checking here if it includes the CSS Modules class for disabled
     *  on the modifier to then return early.
     * */
    if (Object.keys(modifiers).includes(defaultCalendarClasses.disabled)) {
      return
    }

    setValueString(format(day, "PP"))
    setCurrentDateFormat("PP")
    setValueDate(day)
    setIsOpen(false)
    setIsTextValid(true)
  }

  const handleOpenClose = () => {
    setIsOpen(!isOpen)
  }

  const handleReturnFocus = () => {
    if (buttonRef.current) {
      buttonRef.current.focus()
    }
  }

  const handleFormatChange = (input: string) => {
    /** The format of the input displayed toggles between
     * "P" => 1/1/1111 or "PP" => 1, Jan 1111
     * In order to switch between formats we must parse and validate
     * the given input. We also check if it includes the CSS Modules class for disabled
     * on the modifier.
     * If the input is valid, check what the currentDateFormat is set to and set
     * the currentDateFormat and valueString to be the opposing format.
     * */
    if (input === "") {
      setIsTextValid(true)
      return
    }

    const parsedDate = parse(input, currentDateFormat, new Date())

    // isValid will return true for "Invalid Date" which is a truthy Date object
    if (parsedDate.toString() === "Invalid Date") {
      setIsTextValid(false)
    }

    // Check if typed day has disabled modifier
    const isTypedDayDisabled = ModifiersUtils.getModifiersForDay(parsedDate, {
      [defaultCalendarClasses.disabled]: disabledDays,
    })

    const isValidDate = isValid(!isTypedDayDisabled.length && parsedDate)
    setIsTextValid(isValidDate)

    if (!isValidDate) return

    if (currentDateFormat === "P") {
      setValueString(format(parsedDate, "PP"))
      setCurrentDateFormat("PP")
      setValueDate(parsedDate)
    } else {
      setValueString(format(parsedDate, "P"))
      setCurrentDateFormat("P")
      setValueDate(parsedDate)
    }
  }

  const handleTextChange = e => {
    const target = e.target as HTMLInputElement
    setValueString(target.value)
  }

  const handleKeyDown = e => {
    // check whether event key is arrow down or alt + arrow down, open calendar if so.
    if (e.key === "ArrowDown" || (e.key === "ArrowDown" && e.altKey === true)) {
      e.preventDefault()
      setIsOpen(true)
    }
    return
  }

  /** Watcher to toggle the current date format when
   * both values are present.
   * * */
  useEffect(() => {
    if (valueString && valueDate) {
      const dateNumeral = parse(valueString, "P", new Date())
      const dateText = parse(valueString, "PP", new Date())

      // isValid will return true for "Invalid Date" which is a truthy Date object
      if (dateNumeral.toString() !== "Invalid Date") {
        setCurrentDateFormat("P")
      } else if (dateText.toString() !== "Invalid Date") {
        setCurrentDateFormat("PP")
      }
    }
  }, [valueString, valueDate])

  /** On first render, if consumer has passed in a valueDate
   * we render it as a string within the input.
   * * */
  useEffect(() => {
    if (valueDate && !valueString) {
      try {
        // format() can't be passed an invalid date, so we need to catch the range error.
        const formattedDate = format(new Date(valueDate), "PP")
        if (formattedDate.toString() !== "Invalid Date") {
          setValueString(formattedDate)
        }
      } catch (error) {
        setIsTextValid(false)
        setValueDate(undefined)
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
          handleOnBlur={() =>
            valueString !== undefined && handleFormatChange(valueString)
          }
          onFocus={() =>
            valueString !== undefined && handleFormatChange(valueString)
          }
          labelText={labelText}
          placeholder={placeholder}
          description={description}
          icon={dateStart}
          validationMessages={validationMessages}
          onButtonClick={handleOpenClose}
          onChange={handleTextChange}
          calendarId={"calendar-dialog"}
          onKeyDown={e => handleKeyDown(e)}
          status={!isTextValid ? "error" : "default"}
          {...inputProps}
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
            classNameOverride={classNameOverride}
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
