import React, { Dispatch, SetStateAction, useEffect, useRef } from "react"
import DayPicker from "react-day-picker/DayPicker"
import cx from "classnames"
import { NavbarElementProps } from "react-day-picker/types/Props"
import { Modifier, DayModifiers } from "react-day-picker/types/Modifiers"
import { CalendarNav } from "../CalendarNav/CalendarNav"
import { defaultCalendarClasses } from "./CalendarClasses"
import calendarStyles from "./Calendar.scss"

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
  disabledDays?: Modifier | Modifier[]
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
  disabledDays,
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
        className={cx(calendarStyles.calendar, {
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
          initialMonth={value ? value : initialMonth}
          firstDayOfWeek={firstDayOfWeek}
          disabledDays={disabledDays}
          onDayClick={handleOnDayChange}
          navbarElement={getNavbar}
          classNames={defaultCalendarClasses}
          onKeyDown={e => handleKeyDown(e)}
        />
      </div>
    </div>
  )
}
