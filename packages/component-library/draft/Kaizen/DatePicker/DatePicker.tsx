import { Popover, TextField } from "@cultureamp/kaizen-component-library/draft"
import * as React from "react"
import Calendar from "./primitives/Calendar"

const dateIcon = require("@cultureamp/kaizen-component-library/icons/date-start.icon.svg")
  .default

const styles = require("./styles.scss")

export type DatePickerProps = {
  id: string
  automationId?: string
  //   onChange?: (event: React.ChangeEvent<HTMLInputElement>) => any
  //   disabled?: boolean
}

type DatePicker = React.FunctionComponent<DatePickerProps>

const DatePicker: DatePicker = ({ id, automationId, children }) => (
  <div className={styles.container}>
    <TextField
      id={id}
      inputType="text"
      labelText=" "
      inputValue="1/1/2019"
      onChange={() => {}}
      icon={dateIcon}
    />
    <Popover position="center" side="top" size="large">
      <Calendar />
    </Popover>
  </div>
)

export default DatePicker
