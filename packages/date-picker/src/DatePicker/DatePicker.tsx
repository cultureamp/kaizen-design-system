import React, { RefObject, useEffect, useRef, useState } from "react"
import { format, parse } from "date-fns"
import { DateRange, DateInterval } from "react-day-picker"
import { FocusOn } from "react-focus-on"
import { usePopper } from "react-popper"
import dateStart from "@kaizen/component-library/icons/date-start.icon.svg"
import { FieldMessageStatus } from "@kaizen/draft-form"
import { calculateDisabledDays } from "../utils/calculateDisabledDays"
import { isInvalidDate } from "../utils/isInvalidDate"
import { isDisabledDate } from "../utils/isDisabledDate"
import { setFocusInCalendar } from "../utils/setFocusInCalendar"
import { formatDateAsText } from "../utils/formatDateAsText"
import calendarStyles from "./components/Calendar/Calendar.scss"
import { DateFormat, DayOfWeek } from "./enums"
import { Calendar, CalendarElement, CalendarProps } from "./components/Calendar"
import { DateInput, DateInputProps } from "./components/DateInput"

type OmittedDateInputProps =
  | "isOpen"
  | "icon"
  | "onButtonClick"
  | "calendarId"
  | "value"
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
  const [valueString, setValueString] = useState<string>("")
  const inputRef = useRef<HTMLInputElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [referenceElement, setReferenceElement] =
    useState<HTMLDivElement | null>(null)
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  )

  const [lastTrigger, setLastTrigger] = useState<
    "inputFocus" | "inputKeydown" | "calendarButton"
  >()

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

  const handleCalendarDayChange = (date: Date): void => {
    if (!isDisabledDate(date, disabledDays)) {
      if (lastTrigger === "calendarButton") {
        formatDateAsText(date, disabledDays, setValueString)
      } else {
        setValueString(format(date, DateFormat.Numeral))
      }
      handleDayChange(date)
      setIsOpen(false)
    }
  }

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>): void => {
    if (valueString !== "") {
      const parsedDate = parse(valueString, DateFormat.Numeral, new Date())

      if (isInvalidDate(parsedDate)) {
        return handleDayChange(parsedDate, valueString)
      }

      if (e.relatedTarget?.classList.contains(calendarStyles.day)) {
        return handleDayChange(parsedDate, valueString)
      }

      formatDateAsText(parsedDate, disabledDays, setValueString)
      return handleDayChange(parsedDate, valueString)
    }
    handleDayChange(undefined, valueString)
  }

  const handleInputFocus: React.FocusEventHandler<
    HTMLInputElement
  > = (): void => {
    setLastTrigger("inputFocus")
    selectedDay && setValueString(format(selectedDay, DateFormat.Numeral))
  }

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setValueString(e.target.value)
  }

  const handleReturnFocus = (): void => {
    if (lastTrigger === "inputKeydown" || lastTrigger === "inputFocus") {
      return inputRef.current?.focus()
    }

    if (buttonRef.current) {
      buttonRef.current.focus()
    }
  }

  const handleButtonClick = (): void => {
    setIsOpen(!isOpen)
    setLastTrigger("calendarButton")
    onButtonClick && onButtonClick()
  }

  const handleInputClick: React.MouseEventHandler<HTMLInputElement> = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>
  ): void => {
    setIsOpen(true)
    onClick && onClick(e)
  }

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement> | React.KeyboardEvent<Element>
  ): void => {
    if (e.key === "ArrowDown" || (e.key === "ArrowDown" && e.altKey === true)) {
      e.preventDefault()
      setIsOpen(true)
      setLastTrigger("inputKeydown")
    }
  }

  const handleCalendarMount = (calendarElement: CalendarElement): void => {
    switch (lastTrigger) {
      case "inputFocus":
        return
      default:
        setFocusInCalendar(calendarElement, selectedDay)
    }
  }

  useEffect(() => {
    selectedDay && formatDateAsText(selectedDay, disabledDays, setValueString)
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
    <FocusOn
      scrollLock={false}
      onDeactivation={handleReturnFocus}
      onClickOutside={() => setIsOpen(false)}
      onEscapeKey={() => setIsOpen(false)}
      enabled={isOpen}
    >
      <div>
        <div ref={setReferenceElement}>
          <DateInput
            id={id}
            inputRef={inputRef}
            buttonRef={buttonRef}
            isOpen={isOpen}
            onBlur={handleInputBlur}
            onFocus={handleInputFocus}
            onChange={handleInputChange}
            labelText={labelText}
            icon={dateStart}
            onButtonClick={handleButtonClick}
            calendarId={`${id}-calendar-dialog`}
            onKeyDown={handleKeyDown}
            value={valueString}
            disabledDays={disabledDays}
            onClick={handleInputClick}
            {...restDateInputProps}
          />
        </div>
        {isOpen && (
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
            onDayChange={handleCalendarDayChange}
            onMount={handleCalendarMount}
          />
        )}
      </div>
    </FocusOn>
  )
}

DatePicker.displayName = "DatePicker"
