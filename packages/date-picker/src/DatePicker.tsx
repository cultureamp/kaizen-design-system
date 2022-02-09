import { TextField } from "@kaizen/draft-form"
import React, { RefObject, useEffect, useRef, useState } from "react"
import dateStart from "@kaizen/component-library/icons/date-start.icon.svg"
import "react-day-picker/lib/style.css"
import DayPicker from "react-day-picker/DayPicker"
import { usePopper } from "react-popper"
import cx from "classnames"
import {
  DayModifiers,
  RangeModifier,
  BeforeModifier,
  BeforeAfterModifier,
  AfterModifier,
} from "react-day-picker/types/Modifiers"
import datePickerStyles from "./DatePicker.scss"
import { CalendarNav, CalendarNavProps } from "./CalendarNav"
import { defaultDatePickerClasses } from "./DatePickerClasses"

type DatePickerProps = {
  id: string
  selectedDate?: Date
  onDayChange: (day: Date) => void
  labelText?: string
  isDisabled?: boolean
  inputRef?: RefObject<HTMLInputElement> | undefined
  description?: string
  classNameAndIHaveSpokenToDST?: string
  firstDayOfWeek?: daysOfWeek
  initialMonth?: Date
  disabledDates?: Date[]
  disabledRange?: RangeModifier
  disabledBeforeAfter?: BeforeAfterModifier
  disabledBefore?: Date
  disabledAfter?: Date
  disabledDaysOfWeek?: daysOfWeek[]
}

export enum daysOfWeek {
  Sun = 0,
  Mon = 1,
  Tue = 2,
  Wed = 3,
  Thu = 4,
  Fri = 5,
  Sat = 6,
}

export const DatePickerWrapper: React.FunctionComponent<DatePickerProps> = ({
  id,
  inputRef,
  description,
  selectedDate,
  onDayChange,
  labelText,
  isDisabled = false,
  classNameAndIHaveSpokenToDST,
  disabledDates,
  disabledDaysOfWeek,
  disabledRange,
  disabledBeforeAfter,
  disabledBefore,
  disabledAfter,
  firstDayOfWeek = 1,
  initialMonth,
  ...inputProps
}) => {
  const getNavbar = ({ ...navbarProps }: CalendarNavProps) => (
    <CalendarNav {...navbarProps} />
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
          offset: [0, 10],
        },
      },
    ],
    placement: "bottom-start",
  })

  // Listens for clicks outside of ref and closes calendar.
  useEffect(() => {
    if (!isOpen) return undefined

    const callback = (e: Event) => {
      const elem = wrapperRef.current
      if (!elem) return

      const didClickOnPopover =
        elem === e.target || elem.contains(e.target as Node)
      const didClickOnReferenceElement =
        referenceElement &&
        (referenceElement === e.target ||
          referenceElement.contains(e.target as Node))
      if (!didClickOnPopover && !didClickOnReferenceElement) {
        setIsOpen(false)
      }
    }
    document.addEventListener("click", callback, false)

    return () => {
      document.removeEventListener("click", callback, false)
    }
  }, [isOpen, referenceElement])

  const daysToNumbers = (days: daysOfWeek[]): number[] =>
    Array.from(days).map(day => day)

  const handleKeyDown = e => {
    switch (e.keyCode) {
      case 27:
        setIsOpen(false)
        break
    }
  }

  const handleOnDayChange = (day: Date, modifiers: DayModifiers) => {
    /** react-day-picker will fire events for disabled days by default.
     *  We're checking here if it includes the CSS Modules class for disabled
     *  on the modifier to then return early.
     * */
    if (Object.keys(modifiers).includes(defaultDatePickerClasses.disabled)) {
      return
    }
    onDayChange(day)
    setIsOpen(false)
  }

  const dateFormatOptions: Intl.DateTimeFormatOptions = {
    month: "short",
    year: "numeric",
    day: "numeric",
  }

  return (
    <div ref={wrapperRef}>
      <div ref={setReferenceElement}>
        <TextField
          id={id}
          labelText={labelText}
          icon={dateStart}
          inputValue={
            selectedDate
              ? selectedDate.toLocaleDateString("en-US", dateFormatOptions)
              : undefined
          }
          disabled={isDisabled}
          inputRef={inputRef}
          description={description}
          onFocus={() => setIsOpen(true)}
          onKeyDown={e => handleKeyDown(e)}
          readOnly
          {...inputProps}
        />
      </div>
      {isOpen && (
        <div
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
          className={cx(datePickerStyles.calendar, {
            classNameAndIHaveSpokenToDST,
          })}
          role="dialog"
          aria-modal="true"
          aria-label={
            selectedDate
              ? `Change Date, ${selectedDate.toLocaleDateString()}`
              : "Choose Date"
          }
        >
          <DayPicker
            selectedDays={selectedDate}
            initialMonth={initialMonth}
            firstDayOfWeek={firstDayOfWeek}
            disabledDays={[
              ...(disabledDates ? disabledDates : []),
              {
                daysOfWeek: disabledDaysOfWeek
                  ? daysToNumbers(disabledDaysOfWeek)
                  : [],
              },
              disabledRange && {
                from: disabledRange.from,
                to: disabledRange.to,
              },
              disabledBefore && {
                before: disabledBefore,
              },
              disabledAfter && {
                after: disabledAfter,
              },
              disabledBeforeAfter && {
                before: disabledBeforeAfter.before,
                after: disabledBeforeAfter.after,
              },
            ]}
            onDayClick={handleOnDayChange}
            navbarElement={getNavbar}
            classNames={defaultDatePickerClasses}
            onKeyDown={e => handleKeyDown(e)}
          />
        </div>
      )}
    </div>
  )
}
