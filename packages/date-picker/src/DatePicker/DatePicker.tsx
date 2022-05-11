import React, { RefObject, useRef, useState } from "react"
import dateStart from "@kaizen/component-library/icons/date-start.icon.svg"
import "react-day-picker/lib/style.css"
import { usePopper } from "react-popper"
import {
  DayModifiers,
  RangeModifier,
  BeforeAfterModifier,
} from "react-day-picker/types/Modifiers"
import { FocusOn } from "react-focus-on"
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

  onValidation: (validationObj: DatePickerValidation) => void
  /**
   * A descriptive message for `error` states
   */
  validationMessage?: string | React.ReactNode
  status?: "default" | "error"
  invalidDateValidationMessage?: string
  disabledValidationMessage?: string
}

export type DatePickerValidation = {
  status?: "default" | "error"
  validationMessage?: string
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

/**
 * {@link https://cultureamp.design/components/date-picker/ Guidance} |
 * {@link https://cultureamp.design/storybook/?path=/docs/components-date-picker-date-picker--default-story Storybook}
 */
export const DatePicker: React.VFC<DatePickerProps> = ({
  id,
  buttonRef = useRef<HTMLButtonElement>(null),
  labelText,
  isDisabled = false,
  validationMessage,
  status,
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
  onValidation,
  invalidDateValidationMessage = "Disabled Date.",
  disabledValidationMessage = "Invalid Date.",
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

  const handleOnDayChange = (day: Date): void => {
    if (isDisabledDate(day, disabledDays)) {
      onValidation({
        status: "error",
        validationMessage: disabledValidationMessage,
      })
      return
    }
    onValidation({
      status: "default",
      validationMessage: undefined,
    })
    onDayChange(day)
    setIsOpen(false)
  }

  const handleInputChange = (date: Date | undefined): void => {
    if (date !== undefined && isInvalidDate(date)) {
      onDayChange(undefined)
      onValidation({
        status: "error",
        validationMessage: invalidDateValidationMessage,
      })
      return
    }

    if (date !== undefined && isDisabledDate(date, disabledDays)) {
      onDayChange(undefined)
      onValidation({
        status: "error",
        validationMessage: disabledValidationMessage,
      })
      return
    }
    onDayChange(date)
    onValidation({
      status: "default",
      validationMessage: undefined,
    })
    return
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
          onValidation={onValidation}
          valueDate={selectedDay}
          disabledDays={disabledDays}
          validationMessage={validationMessage}
          status={status}
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
            onDayChange={handleOnDayChange}
            onKeyDown={handleKeyDown}
          />
        </FocusOn>
      )}
    </div>
  )
}

DatePicker.displayName = "DatePicker"
