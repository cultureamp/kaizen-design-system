import { Label } from "@kaizen/draft-form"
import React from "react"
import DayPickerInput from "react-day-picker/DayPickerInput"
import "react-day-picker/lib/style.css"
import styles from "./DatePicker.scss"

type DatePickerProps = {
  selectedDate?: Date
  handleDayChange: (day: Date) => void
  label?: string
}

export const DatePickerWrapper: React.FunctionComponent<DatePickerProps> = ({
  selectedDate,
  handleDayChange,
  label,
}) => (
  <>
    {label && <Label>{label}</Label>}
    <div className={styles.wrapper}>
      <DayPickerInput
        value={selectedDate}
        onDayChange={handleDayChange}
        dayPickerProps={{
          selectedDays: selectedDate,
          disabledDays: {
            daysOfWeek: [0, 6],
          },
        }}
      />

      {/* Inputs aren't able to have pseudo elements like ::after on them,
          so we have to create an element ourselves for the focus ring */}
      <div className={styles.focusRing} />
    </div>
  </>
)
