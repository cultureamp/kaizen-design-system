/* eslint-disable camelcase */
import { ClassNames } from "react-day-picker"
import styles from "./baseCalendarClassNames.module.scss"

export const baseCalendarClassNames: ClassNames = {
  vhidden: styles.vHidden,
  root: styles.root,
  months: styles.months,
  button_reset: styles.buttonReset,
  button: styles.button,
  caption: styles.caption,
  caption_label: styles.captionLabel,
  nav_button: styles.navButton,
  table: styles.table,
  head_cell: styles.weekday,
  cell: styles.cell,
  day: styles.day,
  tbody: styles.tbody,
  day_selected: styles.daySelected,
  day_today: styles.dayToday,
  day_disabled: styles.dayDisabled,
}
