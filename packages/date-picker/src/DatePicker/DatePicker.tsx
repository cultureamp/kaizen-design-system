import React, { RefObject, useRef, useState } from "react"
import dateStart from "@kaizen/component-library/icons/date-start.icon.svg"
import "react-day-picker/lib/style.css"
import { usePopper } from "react-popper"
import {
  RangeModifier,
  BeforeAfterModifier,
} from "react-day-picker/types/Modifiers"
import { FocusOn } from "react-focus-on"
import { FieldMessageStatus } from "@kaizen/draft-form"
import { calculateDisabledDays } from "../utils/calculateDisabledDays"
import { isInvalidDate } from "../utils/isInvalidDate"
import { isDisabledDate } from "../utils/isDisabledDate"
import { Calendar } from "./components/Calendar"
import { DateInput, DateInputProps } from "./components/DateInput"

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
  isDisabled?: boolean
  buttonRef?: RefObject<HTMLButtonElement>
  onButtonClick?: DateInputProps["onButtonClick"]
  /**
   * Accepts a DayOfWeek value to start the week on that day. By default,
   * it's set to Monday.
   *  @default 1
   */
  firstDayOfWeek?: DayOfWeek

  /**
   * Accepts a date to display that month on first render.
   */
  initialMonth?: Date

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
  disabledRange?: RangeModifier

  /**
   * Accepts an object with a before and after date. Disables any date
   * outside of that range.
   * { before: new Date(2022, 1, 12), after: new Date(2022, 1, 16) }
   */
  disabledBeforeAfter?: BeforeAfterModifier

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
   * ValidationResponse object will be returned.
   * @returns {ValidationResponse}
   */
  onValidate: (validationResponse: ValidationResponse) => void
  /**
   * Updates the styling of the validation FieldMessage.
   */
  status?: FieldMessageStatus
  /**
   * A descriptive message for the 'status' states.
   */
  validationMessage?: string | React.ReactNode
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

export enum DayOfWeek {
  Sun = 0,
  Mon = 1,
  Tue = 2,
  Wed = 3,
  Thu = 4,
  Fri = 5,
  Sat = 6,
}

/**
 * {@link https://cultureamp.design/components/date-picker/ Guidance} |
 * {@link https://cultureamp.design/storybook/?path=/docs/components-date-picker-date-picker--default-story Storybook}
 */
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
  onValidate,
  ...restDateInputProps
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
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
        /** @TODO Ask Jason for validation messages*/
        validationMessage: "Date isn’t valid",
        isInvalid: true,
      })
      return onDayChange(undefined)
    }

    if (isDisabledDate(date, disabledDays)) {
      onValidate({
        ...baseResponse,
        status: "error",
        /** @TODO Ask Jason for validation messages*/
        validationMessage: "Date not available, choose another",
        isDisabled: true,
      })
      return onDayChange(undefined)
    }

    onValidate({ ...baseResponse, isValidDate: true })
    onDayChange(date)
  }

  const handleOnCalendarDayChange = (date: Date): void => {
    handleDayChange(date)
    setIsOpen(false)
  }

  const handleInputChange = (
    date: Date | undefined,
    inputValue: string
  ): void => {
    handleDayChange(date, inputValue)
  }

  const handleOpenClose = (): void => setIsOpen(!isOpen)

  const handleReturnFocus = (): void => {
    if (buttonRef.current) {
      buttonRef.current.focus()
    }
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

  return (
    <div ref={wrapperRef}>
      <div ref={setReferenceElement}>
        <DateInput
          id={id}
          inputRef={inputRef}
          buttonRef={buttonRef}
          isOpen={isOpen}
          disabled={isDisabled}
          onBlur={handleInputChange}
          labelText={labelText}
          icon={dateStart}
          onButtonClick={handleButtonClick}
          calendarId={`${id}-calendar-dialog`}
          onKeyDown={handleKeyDown}
          valueDate={selectedDay}
          disabledDays={disabledDays}
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
            id={`${id}-calendar-dialog`}
            setPopperElement={setPopperElement}
            styles={styles}
            attributes={attributes}
            value={selectedDay}
            initialMonth={initialMonth}
            firstDayOfWeek={firstDayOfWeek}
            disabledDays={disabledDays}
            onDayChange={handleOnCalendarDayChange}
            onKeyDown={handleKeyDown}
          />
        </FocusOn>
      )}
    </div>
  )
}

DatePicker.displayName = "DatePicker"
