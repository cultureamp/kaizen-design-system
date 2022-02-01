import { Label } from "@kaizen/draft-form"
import { Icon } from "@kaizen/component-library"
import React from "react"
import dateStart from "@kaizen/component-library/icons/date-start.icon.svg"
import arrowRight from "@kaizen/component-library/icons/arrow-right.icon.svg"
import arrowLeft from "@kaizen/component-library/icons/arrow-left.icon.svg"
import classnames from "classnames"
import DayPickerInput from "react-day-picker/DayPickerInput"
import "react-day-picker/lib/style.css"
import DayPicker from "react-day-picker/DayPicker"
import { ReactElement } from "react-select/node_modules/@types/react"
import styles from "./DatePicker.scss"
import calendarStyles from "./Calendar.scss"

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

export const defaultDatePickerClasses = {
  container: "DayPicker",
  wrapper: "DayPicker-wrapper",
  interactionDisabled: `${calendarStyles.interactionDisabled} DayPicker--interactionDisabled`,
  months: "DayPicker-Months",
  month: "DayPicker-Month",
  navBar: "DayPicker-NavBar",
  navButtonPrev: "DayPicker-NavButton DayPicker-NavButton--prev",
  navButtonNext: "DayPicker-NavButton DayPicker-NavButton--next",
  navButtonInteractionDisabled: "DayPicker-NavButton--interactionDisabled",
  caption: `${calendarStyles.caption} DayPicker-Caption`,
  weekdays: "DayPicker-Weekdays",
  weekdaysRow: "DayPicker-WeekdaysRow",
  weekday: `${calendarStyles.weekday} DayPicker-Weekday`,
  body: `${calendarStyles.body} DayPicker-Body`,
  week: "DayPicker-Week",
  weekNumber: "DayPicker-WeekNumber",
  day: `${calendarStyles.day} DayPicker-Day`,
  footer: "DayPicker-Footer",
  todayButton: "DayPicker-TodayButton",
  today: `${calendarStyles.today} DayPicker-Day--today`,
  selected: `${calendarStyles.selected} DayPicker-Day--selected`,
  disabled: `${calendarStyles.disabled} DayPicker-Day--disabled`,
  outside: `${calendarStyles.outside} DayPicker-Day--outside`,
}

function Navbar({ onPreviousClick, onNextClick, localeUtils }) {
  return (
    <div className={calendarStyles.navbar}>
      <span onClick={() => onPreviousClick()}>
        <Icon icon={arrowLeft} role="presentation" />
      </span>
      <span onClick={() => onNextClick()}>
        <Icon icon={arrowRight} role="presentation" />
      </span>
    </div>
  )
}

type CalendarProps = {
  selectedDate?: Date
  handleDayChange: (day: Date) => void
}

export const Calendar: React.FunctionComponent<CalendarProps> = ({
  selectedDate,
  handleDayChange,
}) => (
  <DayPicker
    navbarElement={<Navbar />}
    classNames={defaultDatePickerClasses}
    className={calendarStyles.calendar}
    selectedDays={selectedDate}
    onDayClick={handleDayChange}
    disabledDays={[new Date(2022, 1, 16), { daysOfWeek: [0, 6] }]}
  />
)
