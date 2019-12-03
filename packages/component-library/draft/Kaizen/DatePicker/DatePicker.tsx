import { Popover, TextField } from "@cultureamp/kaizen-component-library/draft"
import { Moment } from "moment"
import React, { useMemo, useState } from "react"
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

  return (
    <div className={styles.container}>
      <TextField
        id={id}
        inputType="text"
        labelText=" "
        inputValue={datesString()}
        onChange={() => {}}
        icon={allowDateRange ? dateRangeIcon : dateIcon}
      />
      <Popover position="center" side="top" size="large">
        <Calendar onChange={setSelectedDates} allowDateRange={allowDateRange} />
      </Popover>
    </div>
  )
}

export default DatePicker
