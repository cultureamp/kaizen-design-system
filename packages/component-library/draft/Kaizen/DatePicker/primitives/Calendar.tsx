import { Button, Text } from "@cultureamp/kaizen-component-library"
import classnames from "classnames"
import moment, { Moment } from "moment"
import React, { useCallback, useState } from "react"
import { IconButton } from "../../../../components"

const styles = require("./styles.scss")
const arrowLeftIcon = require("@cultureamp/kaizen-component-library/icons/arrow-left.icon.svg")
  .default
const arrowRightIcon = require("@cultureamp/kaizen-component-library/icons/arrow-right.icon.svg")
  .default

type Calendar = React.FC<{
  selectedDates?: Moment[]
  onChange: (dates: Moment[]) => void
  allowDateRange?: boolean
}>

const Calendar: Calendar = ({
  selectedDates = [],
  onChange,
  allowDateRange = false,
}) => {
  const [currentMonth, setCurrentMonth] = useState<Moment>(
    moment().startOf("month")
  )
  //const [selectedDates, setSelectedDates] = useState<Moment[]>([])
  const [hoverDate, setHoverDate] = useState<Moment>()

  const months = moment.months()
  const weekdays = moment.weekdaysShort()
  const firstDayOfMonth = currentMonth.startOf("month").weekday()
  const rowsNumber = Math.ceil(currentMonth.daysInMonth() / 7)

  const handleSelect = useCallback(
    (date: Moment) => {
      const newDates =
        allowDateRange && selectedDates.length < 2
          ? [...selectedDates, date]
          : [date]
      onChange(newDates)
    },
    [selectedDates, onChange]
  )

  let rows: JSX.Element[] = []
  for (let row = 0; row < rowsNumber; row++) {
    rows.push(
      <div className={styles.row} key={`row-${row}`}>
        {weekdays.map((_, i) => {
          const day = row * weekdays.length + i - firstDayOfMonth + 1
          const date = moment(currentMonth).add(day - 1, "days")
          const disabled = day <= 0 || day > currentMonth.daysInMonth()

          return (
            <button
              key={`day-${day}`}
              className={classnames({
                [styles.day]: true,
                [styles.empty]: disabled,
                [styles.between]:
                  allowDateRange &&
                  selectedDates.length === 1 &&
                  hoverDate &&
                  date.isBetween(selectedDates[0], hoverDate, undefined, "(]"),
                [styles.selected]:
                  (selectedDates.length === 1 &&
                    selectedDates.find(d => d.isSame(date))) ||
                  (selectedDates.length === 2 &&
                    date.isBetween(
                      selectedDates[0],
                      selectedDates[1],
                      undefined,
                      "[]"
                    )),
              })}
              disabled={disabled}
              onMouseEnter={() => !disabled && setHoverDate(date)}
              onClick={() => handleSelect(date)}
            >
              {day > 0 && day <= currentMonth.daysInMonth() && day}
            </button>
          )
        })}
      </div>
    )
  }

  return (
    <div className={styles.calendar}>
      <div className={styles.controls}>
        <IconButton
          label=""
          icon={arrowLeftIcon}
          onClick={() => setCurrentMonth(m => moment(m).subtract(1, "month"))}
        />
        <Text style="heading" tag="p">
          {`${months[currentMonth.month()]} ${currentMonth.year()}`}
        </Text>
        <IconButton
          label=""
          icon={arrowRightIcon}
          onClick={() => setCurrentMonth(m => moment(m).add(1, "month"))}
        />
      </div>
      <div className={styles.weekdays}>
        {weekdays.map(day => (
          <div key={day} className={styles.dayName}>
            {day}
          </div>
        ))}
      </div>
      <div>{rows}</div>
    </div>
  )
}

export default Calendar
