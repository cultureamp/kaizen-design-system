import React, { RefObject, useEffect, useRef, useState } from "react"
import { parse } from "date-fns"
import { DateRange, DateInterval, DayClickEventHandler } from "react-day-picker"
import { FocusOn } from "react-focus-on"
import dateStart from "@kaizen/component-library/icons/date-start.icon.svg"
import { FieldMessageStatus } from "@kaizen/draft-form"
import { calculateDisabledDays } from "../utils/calculateDisabledDays"
import { isInvalidDate } from "../utils/isInvalidDate"
import { isDisabledDate } from "../utils/isDisabledDate"
import { setFocusInCalendar } from "../utils/setFocusInCalendar"
import { formatDateAsText } from "../utils/formatDateAsText"
import { formatDateAsNumeral } from "../utils/formatDateAsNumeral"
import { getLocale } from "../utils/getLocale"
import { SupportedLocales } from "../types"
import { DateFormat, DayOfWeek } from "../enums"
import {
  Calendar,
  CalendarElement,
  CalendarProps,
} from "../_primitives/Calendar"
import calendarStyles from "../_primitives/Calendar/Calendar.scss"
import { CalendarWrapper } from "../_primitives/CalendarWrapper"
import { DateInput, DateInputProps } from "./components/DateInput"

type OmittedDateInputProps =
  | "isCalendarOpen"
  | "icon"
  | "onClick"
  | "onFocus"
  | "onChange"
  | "onBlur"
  | "onButtonClick"
  | "calendarId"
  | "value"
  | "locale"

export interface DatePickerProps
  extends Omit<DateInputProps, OmittedDateInputProps> {
  id: string
  buttonRef?: RefObject<HTMLButtonElement>
  onInputClick?: DateInputProps["onClick"]
  onInputFocus?: DateInputProps["onFocus"]
  onInputChange?: DateInputProps["onChange"]
  onInputBlur?: DateInputProps["onBlur"]
  onButtonClick?: DateInputProps["onButtonClick"]
  locale: SupportedLocales
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
  locale: propsLocale,
  disabledDates,
  disabledDaysOfWeek,
  disabledRange,
  disabledBeforeAfter,
  disabledBefore,
  disabledAfter,
  weekStartsOn,
  defaultMonth,
  selectedDay,
  onInputClick,
  onInputFocus,
  onInputChange,
  onInputBlur,
  onButtonClick,
  onDayChange,
  onValidate,
  ...restDateInputProps
}) => {
  const containerRef = useRef<HTMLInputElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const [inputValue, setInputValue] = useState<string>("")
  const [isOpen, setIsOpen] = useState(false)

  const locale = getLocale(propsLocale)

  const [lastTrigger, setLastTrigger] = useState<
    "inputFocus" | "inputKeydown" | "calendarButton"
  >()

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
    newInputValue?: string
  ): void => {
    const baseResponse = {
      date,
      inputValue: newInputValue,
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
        validationMessage: newInputValue
          ? `${newInputValue} is an invalid date`
          : "Date is invalid",
        isInvalid: true,
      })
      return onDayChange(undefined)
    }

    if (isDisabledDate(date, disabledDays)) {
      onValidate({
        ...baseResponse,
        status: "error",
        validationMessage: `${newInputValue} is not available, try another date`,
        isDisabled: true,
      })
      return onDayChange(undefined)
    }

    onValidate({ ...baseResponse, isValidDate: true })
    onDayChange(date)
  }

  const handleCalendarDayChange: DayClickEventHandler = date => {
    if (!isDisabledDate(date, disabledDays)) {
      if (lastTrigger === "calendarButton") {
        setInputValue(formatDateAsText(date, disabledDays, locale))
      } else {
        setInputValue(formatDateAsNumeral(date, locale))
      }

      handleDayChange(date)
      setIsOpen(false)
    }
  }

  const handleInputClick: React.MouseEventHandler<HTMLInputElement> = e => {
    setIsOpen(true)
    onInputClick && onInputClick(e)
  }

  const handleInputFocus: React.FocusEventHandler<HTMLInputElement> = e => {
    setLastTrigger("inputFocus")
    if (selectedDay) {
      const newInputValue = isInvalidDate(selectedDay)
        ? ""
        : formatDateAsNumeral(selectedDay, locale)
      setInputValue(newInputValue)
    }
    onInputFocus && onInputFocus(e)
  }

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    setInputValue(e.target.value)
    onInputChange && onInputChange(e)
  }

  const handleInputBlur: React.FocusEventHandler<HTMLInputElement> = e => {
    const isSelectingDayInCalendar = e.relatedTarget?.classList.contains(
      calendarStyles.day
    )
    if (isSelectingDayInCalendar) return

    if (inputValue !== "") {
      const parsedDate = parse(inputValue, DateFormat.Numeral, new Date(), {
        locale,
      })

      if (!isInvalidDate(parsedDate)) {
        setInputValue(formatDateAsText(parsedDate, disabledDays, locale))
      }

      handleDayChange(parsedDate, inputValue)
      onInputBlur && onInputBlur(e)
      return
    }

    handleDayChange(undefined, inputValue)
    onInputBlur && onInputBlur(e)
  }

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = e => {
    if (e.key === "ArrowDown" || (e.key === "ArrowDown" && e.altKey === true)) {
      e.preventDefault()
      setIsOpen(true)
      setLastTrigger("inputKeydown")
    }
  }

  const handleButtonClick: React.MouseEventHandler<HTMLButtonElement> = e => {
    setIsOpen(!isOpen)
    setLastTrigger("calendarButton")
    onButtonClick && onButtonClick(e)
  }

  const handleCalendarMount = (calendarElement: CalendarElement): void => {
    if (lastTrigger === "inputFocus") return

    setFocusInCalendar(calendarElement, selectedDay)
  }

  const handleReturnFocus = (): void => {
    if (lastTrigger === "inputKeydown" || lastTrigger === "inputFocus") {
      return inputRef.current?.focus()
    }

    buttonRef.current?.focus()
  }

  useEffect(() => {
    selectedDay &&
      setInputValue(formatDateAsText(selectedDay, disabledDays, locale))

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
      const formattedDate = formatDateAsNumeral(selectedDay, locale)

      onValidate({
        date: undefined,
        inputValue: formattedDate,
        status: "error",
        validationMessage: `${formattedDate} is not available, try another date`,
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
      <div ref={containerRef}>
        <DateInput
          inputRef={inputRef}
          buttonRef={buttonRef}
          id={id}
          calendarId={`${id}-calendar-dialog`}
          value={inputValue}
          locale={locale}
          isCalendarOpen={isOpen}
          icon={dateStart}
          onButtonClick={handleButtonClick}
          onClick={handleInputClick}
          onFocus={handleInputFocus}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onKeyDown={handleKeyDown}
          {...restDateInputProps}
        />
      </div>

      {isOpen && (
        <CalendarWrapper referenceElement={containerRef.current}>
          <Calendar
            id={`${id}-calendar-dialog`}
            mode="single"
            value={selectedDay}
            defaultMonth={defaultMonth}
            weekStartsOn={weekStartsOn}
            disabledDays={disabledDays}
            locale={locale}
            onDayChange={handleCalendarDayChange}
            onMount={handleCalendarMount}
          />
        </CalendarWrapper>
      )}
    </FocusOn>
  )
}

DatePicker.displayName = "DatePicker"
