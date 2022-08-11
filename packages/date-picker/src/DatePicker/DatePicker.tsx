import React, { useEffect, useRef, useState } from "react"
import { parse } from "date-fns"
import { DateRange, DateInterval, DayClickEventHandler } from "react-day-picker"
import { FocusOn } from "react-focus-on"
import dateStart from "@kaizen/component-library/icons/date-start.icon.svg"
import { calculateDisabledDays } from "../utils/calculateDisabledDays"
import { isInvalidDate } from "../utils/isInvalidDate"
import { isDisabledDate } from "../utils/isDisabledDate"
import { setFocusInCalendar } from "../utils/setFocusInCalendar"
import { formatDateAsText } from "../utils/formatDateAsText"
import { formatDateAsNumeral } from "../utils/formatDateAsNumeral"
import { getLocale } from "../utils/getLocale"
import { validateDate } from "../utils/validateDate"
import { SupportedLocales, ValidationResponse } from "../types"
import { DateFormat, DayOfWeek } from "../enums"
import {
  Calendar,
  CalendarElement,
  CalendarProps,
} from "../_primitives/Calendar"
import calendarStyles from "../_primitives/Calendar/Calendar.module.scss"
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
   * Accepts an object with a `from` and `to` date. Disables any date
   * inside of that range, including the specified dates.
   * disabledRange={ from: new Date(2022, 1, 12), to: new Date(2022, 1, 16) }
   */
  disabledRange?: DateRange

  /**
   * Accepts an object with a `before` and `after` date. Disables any date
   * inside of that range, excluding the specified dates.
   * { after: new Date(2022, 1, 12), before: new Date(2022, 1, 16) }
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
   * Callback when a date is selected. Utilises internal validation if not set.
   */
  onValidate?: (validationResponse: ValidationResponse) => void
  /**
   * Updates the styling of the validation FieldMessage.
   */
  status?: DateInputProps["status"] | undefined
  /**
   * A descriptive message for the 'status' states.
   */
  validationMessage?: DateInputProps["validationMessage"] | undefined
}

/**
 * {@link https://cultureamp.design/components/date-picker/ Guidance} |
 * {@link https://cultureamp.design/storybook/?path=/docs/components-date-picker-date-picker--default-story Storybook}
 */
export const DatePicker: React.VFC<DatePickerProps> = ({
  id,
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
  status,
  validationMessage,
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
  const buttonRef = useRef<HTMLButtonElement>(null)
  const ref = useRef({ inputRef, buttonRef })
  const [inputValue, setInputValue] = useState<string>("")
  const [isOpen, setIsOpen] = useState(false)
  const [lastTrigger, setLastTrigger] = useState<
    "inputFocus" | "inputKeydown" | "calendarButton"
  >()
  const [inbuiltStatus, setInbuiltStatus] = useState<
    DateInputProps["status"] | undefined
  >()
  const [inbuiltValidationMessage, setInbuiltValidationMessage] = useState<
    string | undefined
  >()

  const shouldUseInbuiltValidation = onValidate === undefined
  const locale = getLocale(propsLocale)
  const disabledDays = calculateDisabledDays({
    disabledDates,
    disabledDaysOfWeek,
    disabledRange,
    disabledBeforeAfter,
    disabledBefore,
    disabledAfter,
  })

  const handleValidation = (validationResponse: ValidationResponse): void => {
    if (shouldUseInbuiltValidation) {
      setInbuiltStatus(validationResponse.status)
      setInbuiltValidationMessage(validationResponse.validationMessage)
    } else {
      onValidate(validationResponse)
    }
  }

  const handleDayChange = (
    date: Date | undefined,
    newInputValue?: string
  ): void => {
    const { validationResponse, newDate } = validateDate(
      date,
      newInputValue,
      disabledDays
    )
    handleValidation(validationResponse)
    onDayChange(newDate)
  }

  const handleCalendarDayChange: DayClickEventHandler = date => {
    if (!isDisabledDate(date, disabledDays)) {
      const newInputValue =
        lastTrigger === "calendarButton"
          ? formatDateAsText(date, disabledDays, locale)
          : formatDateAsNumeral(date, locale)

      setInputValue(newInputValue)
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
      const newInputValue = formatDateAsNumeral(selectedDay, locale)
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
    if (e.key === "Enter") {
      setIsOpen(false)
      const parsedDate = parse(inputValue, DateFormat.Numeral, new Date(), {
        locale,
      })
      handleDayChange(parsedDate, e.target.value)
    }

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
    if (selectedDay) {
      setInputValue(formatDateAsText(selectedDay, disabledDays, locale))

      const formattedDate = formatDateAsNumeral(selectedDay, locale)
      const { validationResponse } = validateDate(
        selectedDay,
        formattedDate,
        disabledDays
      )

      if (!validationResponse.isValidDate && !validationResponse.isEmpty) {
        handleValidation(validationResponse)
      }
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
          ref={ref}
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
          status={
            status !== undefined || !shouldUseInbuiltValidation
              ? status
              : inbuiltStatus
          }
          validationMessage={
            validationMessage !== undefined || !shouldUseInbuiltValidation
              ? validationMessage
              : inbuiltValidationMessage
          }
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
