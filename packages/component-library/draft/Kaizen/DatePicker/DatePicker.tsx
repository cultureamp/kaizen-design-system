import { Popover, TextField } from "@cultureamp/kaizen-component-library/draft"
import { Moment } from "moment"
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"
import Calendar from "./primitives/Calendar"

const dateIcon = require("@cultureamp/kaizen-component-library/icons/date-start.icon.svg")
  .default
const dateRangeIcon = require("@cultureamp/kaizen-component-library/icons/date-range.icon.svg")
  .default

const styles = require("./styles.scss")

export type DatePickerProps = {
  id: string
  allowDateRange?: boolean
}

type DatePicker = React.FunctionComponent<DatePickerProps>

const DatePicker: DatePicker = ({ id, allowDateRange = false }) => {
  const [selectedDates, setSelectedDates] = useState<Moment[]>([])
  const [calendarOpened, setCalendarOpened] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const calendarRef = useRef<HTMLDivElement>(null)

  const handleClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement
    const clickInsideTextField =
      containerRef.current && containerRef.current.contains(target)
    const clickInsideCalendar =
      calendarRef.current && calendarRef.current.contains(target)

    if (!clickInsideCalendar && !clickInsideTextField) {
      setCalendarOpened(false)
    }
  }

  useEffect(() => {
    window.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [handleClick])

  const datesString = () =>
    useMemo(() => {
      const format = "D MMM YYYY"
      const startDateString =
        selectedDates[0] && selectedDates[0].format(format)
      const endDateString = selectedDates[1] && selectedDates[1].format(format)
      return endDateString
        ? `${startDateString} - ${endDateString}`
        : startDateString
    }, [selectedDates])

  const handleDateChange = useCallback(
    (dates: Moment[]) => {
      setSelectedDates(dates)

      const shouldClose =
        !allowDateRange || (allowDateRange && dates.length === 2)
      setCalendarOpened(!shouldClose)
    },
    [setSelectedDates]
  )

  return (
    <div className={styles.container} ref={containerRef}>
      <TextField
        id={id}
        inputType="text"
        labelText=" "
        inputValue={datesString()}
        onChange={() => {}}
        onFocus={() => setCalendarOpened(true)}
        icon={allowDateRange ? dateRangeIcon : dateIcon}
      />
      {calendarOpened && (
        <Popover position="center" side="top" size="large">
          <div ref={calendarRef}>
            <Calendar
              selectedDates={selectedDates}
              onChange={handleDateChange}
              allowDateRange={allowDateRange}
            />
          </div>
        </Popover>
      )}
    </div>
  )
}

export default DatePicker
