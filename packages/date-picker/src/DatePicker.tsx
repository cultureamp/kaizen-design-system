import { Label } from "@kaizen/draft-form"
import { Icon } from "@kaizen/component-library"
import React from "react"
import dateStart from "@kaizen/component-library/icons/date-start.icon.svg"
import classnames from "classnames"
import DayPickerInput from "react-day-picker/DayPickerInput"
import "react-day-picker/lib/style.css"
import styles from "./DatePicker.scss"

type DatePickerProps = {
  selectedDate?: Date
  onDayChange: (day: Date) => void
  labelText?: string
  isDisabled?: boolean
}

export const DatePickerWrapper: React.FunctionComponent<DatePickerProps> = ({
  selectedDate,
  onDayChange,
  labelText,
  isDisabled = false,
}) => (
  <>
    {labelText && <Label disabled={isDisabled} labelText={labelText} />}
    <div
      className={classnames(
        styles.wrapper,
        styles.withStartIconAdornment,
        styles.withSearch,
        {
          [styles.withDisabled]: isDisabled,
        }
      )}
    >
      <div className={styles.startIconAdornment}>
        <Icon icon={dateStart} role="presentation" />
      </div>
      <DayPickerInput
        value={selectedDate}
        onDayChange={onDayChange}
        dayPickerProps={{
          selectedDays: selectedDate,
          disabledDays: {
            daysOfWeek: [0, 6],
          },
        }}
        inputProps={{
          disabled: isDisabled,
          className: classnames(styles.input, {
            [styles.disabled]: isDisabled,
          }),
        }}
      />
    </div>
  </>
)
