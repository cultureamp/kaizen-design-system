import React, { Dispatch, SetStateAction, useEffect, useRef } from "react"
import {
  DayPicker,
  DateRange,
  DaySelectionMode,
  DateFormatter,
  WeekNumberFormatter,
} from "react-day-picker"
import { DayModifiers } from "react-day-picker/dist/types/Modifiers"
import { DayClickEventHandler } from "react-day-picker/dist/types/EventHandlers"
import { Matcher } from "react-day-picker/src/types/Matchers"
import classnames from "classnames"
import { Icon } from "@kaizen/component-library"
import arrowRight from "@kaizen/component-library/icons/arrow-right.icon.svg"
import arrowLeft from "@kaizen/component-library/icons/arrow-left.icon.svg"
import { format } from "date-fns"
import { DayOfWeek } from "../../enums"
import { isInvalidDate } from "../../../utils/isInvalidDate"
import { Direction, LanguageLocale, WeekStartsOn } from "../.."
import { defaultCalendarClasses } from "./CalendarClasses"
import calendarStyles from "./Calendar.scss"

export type CalendarElement = HTMLDivElement

export type CalendarProps = {
  id: string
  setPopperElement: Dispatch<SetStateAction<HTMLDivElement | null>>
  popperStyles?: { [key: string]: React.CSSProperties }
  popperAttributes?: {
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
  modifiers?: DateRange
  mode: "single" | "range"
  onMount?: (calendarElement: CalendarElement) => void
  locale: LanguageLocale
}

const isValidWeekStartsOn = (
  day: DayOfWeek | undefined
): day is 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined =>
  [0, 1, 2, 3, 4, 5, 6, undefined].includes(day)

export const Calendar: React.VFC<CalendarProps> = ({
  id,
  setPopperElement,
  popperStyles,
  popperAttributes,
  classNameOverride,
  value,
  defaultMonth,
  weekStartsOn = DayOfWeek.Mon,
  disabledDays,
  onDayChange,
  selectedRange,
  modifiers,
  locale,
  mode,
  onMount,
}) => {
  const calendarRef = useRef<CalendarElement>(null)

  useEffect(() => {
    if (calendarRef.current) onMount && onMount(calendarRef.current)
  }, [calendarRef])

  const monthToShow = selectedRange?.from || value || defaultMonth
  const selectedMonth =
    monthToShow && isInvalidDate(monthToShow) ? undefined : monthToShow

  const formatDay: DateFormatter = (day: Date): string =>
    day.getDate().toLocaleString(locale.code)

  const formatWeekNumber: WeekNumberFormatter = (weekNumber: number) =>
    weekNumber.toLocaleString(locale.code)

  const formatCaption: DateFormatter = (date, options) => {
    const y = date.getFullYear().toLocaleString(locale.code)
    const m = format(date, "LLLL", { locale: options?.locale })
    return `${m} ${y}`
  }

  const getFirstDayOfWeek = (): WeekStartsOn =>
    isValidWeekStartsOn(weekStartsOn)
      ? weekStartsOn
      : locale.localeObj.options?.weekStartsOn!

  const IconLeft: React.VFC = () => (
    <Icon icon={arrowLeft} role="presentation" />
  )

  const IconRight: React.VFC = () => (
    <Icon icon={arrowRight} role="presentation" />
  )

  return (
    <div ref={calendarRef}>
      <div
        id={id}
        ref={setPopperElement}
        style={popperStyles?.popper}
        {...popperAttributes?.popper}
        className={classnames(calendarStyles.calendar, classNameOverride)}
        role="dialog"
        aria-modal="true"
      >
        {mode === "single" && (
          <DayPicker
            mode="single"
            selected={value && isInvalidDate(value) ? undefined : value}
            defaultMonth={selectedMonth}
            weekStartsOn={getFirstDayOfWeek()}
            disabled={disabledDays}
            onDayClick={onDayChange}
            classNames={defaultCalendarClasses}
            components={{
              IconRight,
              IconLeft,
            }}
            locale={locale.localeObj}
            dir={locale.dir}
            formatters={{ formatDay, formatCaption, formatWeekNumber }}
          />
        )}
        {mode === "range" && (
          <DayPicker
            mode="range"
            selected={selectedRange}
            defaultMonth={selectedMonth}
            weekStartsOn={getFirstDayOfWeek()}
            disabled={disabledDays}
            onDayClick={onDayChange}
            classNames={defaultCalendarClasses}
            components={{
              IconRight,
              IconLeft,
            }}
            locale={locale.localeObj}
            dir={locale.dir}
            formatters={{ formatDay, formatCaption, formatWeekNumber }}
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
