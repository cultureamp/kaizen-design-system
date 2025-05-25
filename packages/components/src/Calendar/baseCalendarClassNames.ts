/* eslint-disable camelcase */
import { type PropsBase } from 'react-day-picker'
import styles from './baseCalendarClassNames.module.scss'

export const baseCalendarClassNames: PropsBase['classNames'] = {
  root: styles.root,
  months: styles.months,
  day_button: `${styles.buttonReset} ${styles.button} ${styles.day}`,
  button_next: `${styles.buttonReset} ${styles.button} ${styles.navButton}`,
  button_previous: `${styles.buttonReset} ${styles.button} ${styles.navButton}`,
  day: styles.cell,
  month_caption: styles.caption,
  caption_label: styles.captionLabel,
  month_grid: styles.table,
  weekday: styles.weekday,
  weeks: styles.tbody,
  selected: styles.daySelected,
  today: styles.dayToday,
  disabled: styles.dayDisabled,
}
