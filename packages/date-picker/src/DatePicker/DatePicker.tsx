import React, { RefObject, useEffect, useRef, useState } from "react"
import { format } from "date-fns"
import { DateRange, DateInterval } from "react-day-picker"
import { FocusOn } from "react-focus-on"
import { usePopper } from "react-popper"
import dateStart from "@kaizen/component-library/icons/date-start.icon.svg"
import { FieldMessageStatus } from "@kaizen/draft-form"
import { calculateDisabledDays } from "../utils/calculateDisabledDays"
import { isInvalidDate } from "../utils/isInvalidDate"
import { isDisabledDate } from "../utils/isDisabledDate"
import { DateFormat, DayOfWeek } from "./enums"
import { Calendar, CalendarElement, CalendarProps } from "./components/Calendar"
import { DateInput, DateInputProps } from "./components/DateInput"
import calendarStyles from "./components/Calendar/Calendar.scss"

type OmittedDateInputProps =
  | "isOpen"
  | "icon"
  | "onButtonClick"
  | "calendarId"
  | "valueDate"
  | "onBlur"
  | "disabledDays"

export interface DatePickerProps
  extends Omit<DateInputProps, OmittedDateInputProps> {
  id: string
  labelText: string
  buttonRef?: RefObject<HTMLButtonElement>
  onButtonClick?: DateInputProps["onButtonClick"]
  onClick?: DateInputProps["onClick"]
  /**
   * Accepts a DayOfWeek value to start the week on that day. By default,
   * it's set to Monday.
   */
  weekStartsOn?: CalendarProps["weekStartsOn"]

  /**
   * Accepts a date to display that month on first render.
   */
  defaultMonth?: CalendarProps["defaultMonth"]

  /**
   *  The date passed in from the consumer that renders in the input and calendar.
   */
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
  disabledRange?: DateRange

  /**
   * Accepts an object with a before and after date. Disables any date
   * outside of that range.
   * { before: new Date(2022, 1, 12), after: new Date(2022, 1, 16) }
   */
  disabledBeforeAfter?: DateInterval

  /**
   * Accepts single date and disables all days before it.
   * */
  disabledBefore?: Date

  /**
   * Accepts single date and disables all days after it.
   */
  disabledAfter?: Date

  /**
   * Accepts an array of DayOfWeek values and disables those days throughout
   * the calendar.
   * e.g. disabledDaysOfWeek={[DayOfWeek.Mon, DayOfWeek.Tue]}
   */
  disabledDaysOfWeek?: DayOfWeek[]
  /**
   * Callback when a date is attempted to be selected.
   */
  onValidate: (validationResponse: ValidationResponse) => void
  /**
   * Updates the styling of the validation FieldMessage.
   */
  status: FieldMessageStatus | undefined
  /**
   * A descriptive message for the 'status' states.
   */
  validationMessage: string | React.ReactNode | undefined
}

export type ValidationResponse = {
  date?: Date
  inputValue?: string // Input value upon validation
  status?: FieldMessageStatus
  validationMessage?: string
  isDisabled: boolean
  isInvalid: boolean
  isEmpty: boolean
  isValidDate: boolean // A date is !isDisabled && !isInvalid && !isEmpty
}

/**
 * {@link https://cultureamp.design/components/date-picker/ Guidance} |
 * {@link https://cultureamp.design/storybook/?path=/docs/components-date-picker-date-picker--default-story Storybook}
 */
export const DatePicker: React.VFC<DatePickerProps> = ({
  id,
  buttonRef = useRef<HTMLButtonElement>(null),
  labelText,
  disabledDates,
  disabledDaysOfWeek,
  disabledRange,
  disabledBeforeAfter,
  disabledBefore,
  disabledAfter,
  weekStartsOn,
  defaultMonth,
  selectedDay,
  onButtonClick,
  onDayChange,
  onValidate,
  onClick,
  ...restDateInputProps
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  // const calendarRef = useRef<HTMLDivElement>(null)

  const [isOpen, setIsOpen] = useState(false)
  const [shouldFocusOnCalendar, setShouldFocusOnCalendar] =
    useState<boolean>(true)
  const [referenceElement, setReferenceElement] =
    useState<HTMLDivElement | null>(null)
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  )

  const [lastTrigger, setLastTrigger] = useState<"inputClick" | "inputKeydown" | "calendarButton">()

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

  const handleDayChange = (
    date: Date | undefined,
    inputValue?: string
  ): void => {
    const baseResponse = {
      date,
      inputValue,
      status: undefined,
      validationMessage: undefined,
      isInvalid: false,
      isDisabled: false,
      isEmpty: false,
      isValidDate: false,
    }

    if (date === undefined) {
      onValidate({
        ...baseResponse,
        isEmpty: true,
      })
      return onDayChange(undefined)
    }

    if (isInvalidDate(date)) {
      onValidate({
        ...baseResponse,
        status: "error",
        validationMessage: inputValue
          ? `${inputValue} is an invalid date`
          : "Date is invalid",
        isInvalid: true,
      })
      return onDayChange(undefined)
    }

    if (isDisabledDate(date, disabledDays)) {
      onValidate({
        ...baseResponse,
        status: "error",
        validationMessage: `${inputValue} is not available, try another date`,
        isDisabled: true,
      })
      return onDayChange(undefined)
    }

    onValidate({ ...baseResponse, isValidDate: true })
    onDayChange(date)
  }

  const handleOnCalendarDayChange = (date: Date): void => {
    if (!isDisabledDate(date, disabledDays)) {
      handleDayChange(date)
      setIsOpen(false)
    }
  }

  const handleInputChange = (
    date: Date | undefined,
    inputValue: string
  ): void => handleDayChange(date, inputValue)

  const handleReturnFocus = (): void => {
    if (buttonRef.current) {
      buttonRef.current.focus()
    }
  }

  const handleButtonClick = (): void => {
    setIsOpen(!isOpen)
    // setShouldFocusOnCalendar(true)
    setLastTrigger("calendarButton")
    onButtonClick && onButtonClick()
  }

  const handleInputClick: React.MouseEventHandler<HTMLInputElement> = e => {
    setIsOpen(true)
    // setShouldFocusOnCalendar(false)
    setLastTrigger("inputClick")
    onClick && onClick(e)
  }

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement> | React.KeyboardEvent<Element>
  ): void => {
    // check whether event key is arrow down or alt + arrow down, open calendar if so.
    if (e.key === "ArrowDown" || (e.key === "ArrowDown" && e.altKey === true)) {
      e.preventDefault()
      setIsOpen(true)
      setLastTrigger("inputKeydown")
      // setShouldFocusOnCalendar(true)
    }
  }

const isHTMLElement = (element: Element | undefined): element is HTMLElement => element instanceof HTMLElement

  const focusInCalendar = (calendarElement: CalendarElement): void => {
    const dayToFocus = calendarElement.getElementsByClassName(
      selectedDay ? calendarStyles.daySelected : calendarStyles.dayToday)[0]

    if (isHTMLElement(dayToFocus)) dayToFocus.focus()
  }

  const handleCalendarMount = (calendarElement: CalendarElement): void => {
    console.log("onMount called",calendarElement)
    switch (lastTrigger) {
      case "inputClick":
        console.log("last trigger inputClick", lastTrigger)
        return
      default:
        console.log("onMount default", lastTrigger)
        focusInCalendar(calendarElement)
    }
  }

  useEffect(() => {
    if (selectedDay && isInvalidDate(selectedDay)) {
      onValidate({
        date: undefined,
        inputValue: "Invalid Date",
        status: "error",
        validationMessage: "Date is invalid",
        isInvalid: true,
        isDisabled: false,
        isEmpty: false,
        isValidDate: false,
      })
      return
    }
    if (selectedDay && isDisabledDate(selectedDay, disabledDays)) {
      const inputValue = format(selectedDay, DateFormat.Numeral)
      onValidate({
        date: undefined,
        inputValue,
        status: "error",
        validationMessage: `${inputValue} is not available, try another date`,
        isInvalid: false,
        isDisabled: true,
        isEmpty: false,
        isValidDate: false,
      })
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
          onBlur={handleInputChange}
          labelText={labelText}
          icon={dateStart}
          onButtonClick={handleButtonClick}
          calendarId={`${id}-calendar-dialog`}
          onKeyDown={handleKeyDown}
          valueDate={selectedDay}
          disabledDays={disabledDays}
          onClick={handleInputClick}
          {...restDateInputProps}
        />
      </div>
      {isOpen && (
        <FocusOn
          scrollLock={false}
          onDeactivation={handleReturnFocus}
          onClickOutside={() => setIsOpen(false)}
          onEscapeKey={() => setIsOpen(false)}
          shards={[inputRef, buttonRef]}
        >
          <Calendar
            mode="single"
            id={`${id}-calendar-dialog`}
            setPopperElement={setPopperElement}
            popperStyles={styles}
            popperAttributes={attributes}
            value={selectedDay}
            defaultMonth={defaultMonth}
            weekStartsOn={weekStartsOn}
            disabledDays={disabledDays}
            onDayChange={handleOnCalendarDayChange}
            // shouldFocusOnCalendar={shouldFocusOnCalendar}
            onMount={handleCalendarMount}
          />
        </FocusOn>
      )}
    </div>
  )
}

DatePicker.displayName = "DatePicker"
