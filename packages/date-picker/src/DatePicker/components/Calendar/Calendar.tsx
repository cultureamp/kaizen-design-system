import React, { Dispatch, SetStateAction, useEffect, useRef } from "react"
import { DayPicker, DateRange } from "react-day-picker"
import { DayModifiers } from "react-day-picker/dist/types/Modifiers"
import { DayClickEventHandler } from "react-day-picker/dist/types/EventHandlers"
import { Matcher } from "react-day-picker/src/types/Matchers"
import classnames from "classnames"
import { Icon } from "@kaizen/component-library"
import arrowRight from "@kaizen/component-library/icons/arrow-right.icon.svg"
import arrowLeft from "@kaizen/component-library/icons/arrow-left.icon.svg"
import { DayOfWeek } from "../../enums"
import { defaultCalendarClasses } from "./CalendarClasses"
import calendarStyles from "./Calendar.scss"

export type CalendarProps = {
  id: string
  setPopperElement: Dispatch<SetStateAction<HTMLDivElement | null>>
  styles: { [key: string]: React.CSSProperties }
  attributes: {
    [key: string]:
      | {
          [key: string]: string
        }
      | undefined
  }
  classNameOverride?: string
  value?: Date
  defaultMonth?: Date
  weekStartsOn?: DayOfWeek
  disabledDays?: Matcher[]
  onDayChange: DayClickEventHandler
  selectedRange?: DateRange
  mode: "single" | "range"
  modifiers?: DateRange
}

const isValidWeekStartsOn = (
  day: DayOfWeek | undefined
): day is 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined =>
  [0, 1, 2, 3, 4, 5, 6, undefined].includes(day)

export const Calendar: React.VFC<CalendarProps> = ({
  id,
  setPopperElement,
  styles,
  attributes,
  classNameOverride,
  value,
  defaultMonth,
  weekStartsOn = DayOfWeek.Mon,
  disabledDays,
  onDayChange,
  selectedRange,
  modifiers,
  mode,
}) => {
  const calendarRef = useRef<HTMLDivElement>(null)

  // Initial focus when opening the calendar
  useEffect(() => {
    if (!calendarRef.current) return

    if (value || selectedRange?.from) {
      const selectedDay = calendarRef.current.getElementsByClassName(
        calendarStyles.selected
      )[0] as HTMLElement
      selectedDay?.focus()
      return
    } else {
      const today = calendarRef.current.getElementsByClassName(
        calendarStyles.today
      )[0] as HTMLElement
      today?.focus()
      return
    }
  }, [])

  const getdefaultMonth = () => selectedRange?.from || value || defaultMonth

  const IconRight: React.VFC = () => (
    <Icon icon={arrowRight} role="presentation" />
  )
  const IconLeft: React.VFC = () => (
    <Icon icon={arrowLeft} role="presentation" />
  )

  return (
    <div ref={calendarRef}>
      <div
        id={id}
        ref={setPopperElement}
        style={styles.popper}
        {...attributes.popper}
        className={classnames(calendarStyles.calendar, classNameOverride)}
        role="dialog"
        aria-modal="true"
      >
        {mode === "single" && (
          <DayPicker
            mode="single"
            selected={value}
            defaultMonth={getdefaultMonth()}
            weekStartsOn={
              isValidWeekStartsOn(weekStartsOn) ? weekStartsOn : undefined
            }
            disabled={disabledDays}
            onDayClick={onDayChange}
            classNames={defaultCalendarClasses}
            components={{
              IconRight,
              IconLeft,
            }}
          />
        )}
        {mode === "range" && (
          <DayPicker
            mode="range"
            selected={selectedRange}
            defaultMonth={getdefaultMonth()}
            weekStartsOn={
              isValidWeekStartsOn(weekStartsOn) ? weekStartsOn : undefined
            }
            disabled={disabledDays}
            onDayClick={onDayChange}
            classNames={defaultCalendarClasses}
            components={{
              IconRight,
              IconLeft,
            }}
            modifiers={
              {
                [calendarStyles.from]: modifiers?.from,
                [calendarStyles.to]: modifiers?.to,
              } as DayModifiers
            }
          />
        )}
      </div>
    </div>
  )
}

Calendar.displayName = "Calendar"
