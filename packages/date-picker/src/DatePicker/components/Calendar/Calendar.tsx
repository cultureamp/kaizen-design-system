import React, { Dispatch, SetStateAction, useEffect, useRef } from "react"
import DayPicker from "react-day-picker/DayPicker"
import FocusLock from "react-focus-lock"
import cx from "classnames"
import { NavbarElementProps } from "react-day-picker/types/Props"
import {
  BeforeAfterModifier,
  DayModifiers,
  RangeModifier,
} from "react-day-picker/types/Modifiers"
import { daysToNumbers } from "../../../utils/daysToNumbers"
import { defaultDatePickerClasses } from "../../DatePickerClasses"
import datePickerStyles from "../../DatePicker.scss"
import { DayOfWeek } from "../../DatePicker"
import { CalendarNav } from "../CalendarNav"

export type CalendarProps = {
  setPopperElement: Dispatch<SetStateAction<HTMLDivElement | null>>
  styles: { [key: string]: React.CSSProperties }
  attributes: {
    [key: string]:
      | {
          [key: string]: string
        }
      | undefined
  }
  classNameAndIHaveSpokenToDST?: string
  value?: Date
  initialMonth?: Date
  firstDayOfWeek: number
  disabledDates?: Date[]
  disabledDaysOfWeek?: DayOfWeek[]
  disabledRange?: RangeModifier
  disabledBefore?: Date
  disabledAfter?: Date
  disabledBeforeAfter?: BeforeAfterModifier
  handleOnDayChange: (day: Date, modifiers: DayModifiers) => void
  handleKeyDown: (e: any) => void
}

export type CalendarNavProps = Pick<
  NavbarElementProps,
  "onPreviousClick" | "onNextClick"
>

export const Calendar: React.VFC<CalendarProps> = ({
  setPopperElement,
  styles,
  attributes,
  classNameAndIHaveSpokenToDST,
  value,
  initialMonth,
  firstDayOfWeek,
  disabledDates,
  disabledDaysOfWeek,
  disabledRange,
  disabledBefore,
  disabledAfter,
  disabledBeforeAfter,
  handleOnDayChange,
  handleKeyDown,
}) => {
  const calendarRef = useRef<HTMLDivElement>(null)

  const getNavbar = ({ ...navbarProps }: CalendarNavProps) => (
    <CalendarNav {...navbarProps} />
  )

  useEffect(() => {
    if (!calendarRef.current) return

    if (value) {
      const selectedDay = calendarRef.current.getElementsByClassName(
        "DayPicker-Day--selected"
      )[0] as HTMLElement

      selectedDay?.focus()
    } else {
      const today = calendarRef.current.getElementsByClassName(
        "DayPicker-Day--today"
      )[0] as HTMLElement

      today?.focus()
    }
  }, [])

  return (
    <div ref={calendarRef}>
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
          value ? `Change date, ${value.toLocaleDateString()}` : "Choose date"
        }
      >
        <DayPicker
          selectedDays={value}
          initialMonth={initialMonth ? initialMonth : value}
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
    </div>
  )
}
