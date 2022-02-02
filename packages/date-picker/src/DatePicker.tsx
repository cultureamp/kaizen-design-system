import { Label } from "@kaizen/draft-form"
import { Icon } from "@kaizen/component-library"
import React from "react"
import dateStart from "@kaizen/component-library/icons/date-start.icon.svg"
import arrowRight from "@kaizen/component-library/icons/arrow-right.icon.svg"
import arrowLeft from "@kaizen/component-library/icons/arrow-left.icon.svg"
import classnames from "classnames"
import DayPickerInput from "react-day-picker/DayPickerInput"
import "react-day-picker/lib/style.css"
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
}) => {
  const getNavbar = ({ ...navbarProps }: NavbarProps) => (
    <Navbar {...navbarProps} />
  )
  return (
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
          classNames={defaultDayPickerInputClasses}
          dayPickerProps={{
            selectedDays: selectedDate,
            disabledDays: {
              daysOfWeek: [0, 6],
            },
            navbarElement: getNavbar,
            classNames: defaultDatePickerClasses,
            className: calendarStyles.calendar,
            onDayClick: onDayChange,
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
}

export const defaultDayPickerInputClasses = {
  container: "DayPickerInput-Container",
  overlayWrapper: "DayPickerInput-OverlayWrapper",
  overlay: `${styles.overlay} DayPickerInput-Overlay`,
}

export const defaultDatePickerClasses = {
  container: "DayPicker",
  wrapper: `${calendarStyles.wrapper} DayPicker-wrapper`,
  interactionDisabled: `${calendarStyles.interactionDisabled} DayPicker--interactionDisabled`,
  months: `${calendarStyles.months} DayPicker-Months`,
  month: `${calendarStyles.month} DayPicker-Month`,
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

type NavbarProps = {
  onPreviousClick: () => void
  onNextClick: () => void
}

const Navbar: React.FunctionComponent<NavbarProps> = ({
  onPreviousClick,
  onNextClick,
}) => (
  <div className={calendarStyles.navbar}>
    <button
      className={calendarStyles.arrows}
      onClick={() => onPreviousClick()}
      type="button"
    >
      <Icon icon={arrowLeft} role="presentation" />
    </button>
    <button
      className={calendarStyles.arrows}
      onClick={() => onNextClick()}
      type="button"
    >
      <Icon icon={arrowRight} role="presentation" />
    </button>
  </div>
)
