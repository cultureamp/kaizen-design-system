import React, { RefObject, useEffect, useRef, useState } from "react"
import { DayClickEventHandler } from "react-day-picker"
import { FocusOn } from "react-focus-on"
import {
  CalendarSingle,
  CalendarSingleElement,
  CalendarSingleProps,
} from "../_subcomponents/Calendar"
import { FloatingCalendarWrapper } from "../_subcomponents/FloatingCalendarWrapper"
import {
  DisabledDayMatchers,
  SupportedLocales,
  ValidationResponse,
} from "../types"
import { calculateDisabledDays } from "../utils/calculateDisabledDays"
import { formatDateAsNumeral } from "../utils/formatDateAsNumeral"
import { formatDateAsText } from "../utils/formatDateAsText"
import { getLocale } from "../utils/getLocale"
import { isDisabledDate } from "../utils/isDisabledDate"
import { isInvalidDate } from "../utils/isInvalidDate"
import { isSelectingDayInCalendar } from "../utils/isSelectingDayInCalendar"
import { parseDateAsTextOrNumeral } from "../utils/parseDateAsTextOrNumeral"
import { setFocusInCalendar } from "../utils/setFocusInCalendar"
import { validateDate } from "../utils/validateDate"
import {
  DateInputField,
  DateInputFieldProps,
} from "./components/DateInputField"

type OmittedDateInputFieldProps =
  | "onClick"
  | "onFocus"
  | "onChange"
  | "onBlur"
  | "onButtonClick"
  | "value"
  | "locale"

export interface DatePickerProps
  extends DisabledDayMatchers,
    Omit<DateInputFieldProps, OmittedDateInputFieldProps> {
  id: string
  buttonRef?: RefObject<HTMLButtonElement>
  onInputClick?: DateInputFieldProps["onClick"]
  onInputFocus?: DateInputFieldProps["onFocus"]
  onInputChange?: DateInputFieldProps["onChange"]
  onInputBlur?: DateInputFieldProps["onBlur"]
  onButtonClick?: DateInputFieldProps["onButtonClick"]
  // @todo make this optional with default en-AU?
  locale: SupportedLocales
  /**
   * Accepts a DayOfWeek value to start the week on that day. By default,
   * it's set to Monday.
   */
  weekStartsOn?: CalendarSingleProps["weekStartsOn"]
  /**
   * Accepts a date to display that month on first render.
   */
  defaultMonth?: CalendarSingleProps["defaultMonth"]
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
   * Callback when a date is selected. Utilises internal validation if not set.
   */
  onValidate?: (validationResponse: ValidationResponse) => void
  /**
   * Updates the styling of the validation FieldMessage.
   */
  status?: DateInputFieldProps["status"] | undefined
  /**
   * A descriptive message for the 'status' states.
   */
  validationMessage?: DateInputFieldProps["validationMessage"] | undefined
}

/**
 * {@link https://cultureamp.design/components/date-picker/ Guidance} |
 * {@link https://cultureamp.design/storybook/?path=/docs/components-date-picker-date-picker--default-story Storybook}
 */
export const DatePicker = ({
  id,
  buttonRef: propsButtonRef = useRef<HTMLButtonElement>(null),
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
  ...restDateInputFieldProps
}: DatePickerProps): JSX.Element => {
  const containerRef = useRef<HTMLInputElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(propsButtonRef?.current || null)
  const dateInputRefs = useRef({
    inputRef,
    buttonRef,
  })
  const [inputValue, setInputValue] = useState<string>("")
  const [isOpen, setIsOpen] = useState(false)
  const [lastTrigger, setLastTrigger] = useState<
    "inputFocus" | "inputKeydown" | "calendarButton"
  >()
  const [inbuiltStatus, setInbuiltStatus] = useState<
    DateInputFieldProps["status"] | undefined
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
    const { validationResponse, newDate } = validateDate({
      date,
      inputValue: newInputValue,
      disabledDays,
    })
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
    onInputClick?.(e)
  }

  const handleInputFocus: React.FocusEventHandler<HTMLInputElement> = e => {
    setLastTrigger("inputFocus")
    if (selectedDay) {
      const newInputValue = formatDateAsNumeral(selectedDay, locale)
      setInputValue(newInputValue)
    }
    onInputFocus?.(e)
  }

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    setInputValue(e.target.value)
    onInputChange?.(e)
  }

  const handleInputBlur: React.FocusEventHandler<HTMLInputElement> = e => {
    if (isSelectingDayInCalendar(e.relatedTarget)) return

    if (inputValue !== "") {
      const parsedDate = parseDateAsTextOrNumeral(inputValue, locale)

      if (!isInvalidDate(parsedDate)) {
        setInputValue(formatDateAsText(parsedDate, disabledDays, locale))
      }

      handleDayChange(parsedDate, inputValue)
      onInputBlur?.(e)
      return
    }

    handleDayChange(undefined, inputValue)
    onInputBlur?.(e)
  }

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = e => {
    if (e.key === "Enter") {
      setIsOpen(false)
      const parsedDate = parseDateAsTextOrNumeral(inputValue, locale)
      handleDayChange(parsedDate, e.currentTarget.value)
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
    onButtonClick?.(e)
  }

  const handleCalendarMount = (
    calendarElement: CalendarSingleElement
  ): void => {
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
      const { validationResponse } = validateDate({
        date: selectedDay,
        inputValue: formattedDate,
        disabledDays,
      })

      if (!validationResponse.isValidDate && !validationResponse.isEmpty) {
        handleValidation(validationResponse)
      }
    }
  }, [selectedDay])

  const calendarId = `${id}-calendar-dialog`

  return (
    <FocusOn
      scrollLock={false}
      onDeactivation={handleReturnFocus}
      onClickOutside={(): void => setIsOpen(false)}
      onEscapeKey={(): void => setIsOpen(false)}
      enabled={isOpen}
    >
      <div ref={containerRef}>
        <DateInputField
          ref={dateInputRefs}
          id={id}
          role="combobox"
          aria-haspopup="dialog"
          aria-expanded={isOpen}
          aria-controls={calendarId}
          value={inputValue}
          locale={locale}
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
          {...restDateInputFieldProps}
        />
      </div>

      {isOpen && (
        <FloatingCalendarWrapper referenceElement={containerRef.current}>
          <CalendarSingle
            id={calendarId}
            selected={selectedDay}
            defaultMonth={defaultMonth}
            weekStartsOn={weekStartsOn}
            disabled={disabledDays}
            locale={locale}
            onDayClick={handleCalendarDayChange}
            onMount={handleCalendarMount}
          />
        </FloatingCalendarWrapper>
      )}
    </FocusOn>
  )
}

DatePicker.displayName = "DatePicker"
