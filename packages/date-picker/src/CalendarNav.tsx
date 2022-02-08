import React from "react"
import { Icon } from "@kaizen/component-library"
import arrowRight from "@kaizen/component-library/icons/arrow-right.icon.svg"
import arrowLeft from "@kaizen/component-library/icons/arrow-left.icon.svg"
import styles from "./DatePicker.scss"

export type CalendarNavProps = {
  onPreviousClick: () => void
  onNextClick: () => void
}

export const CalendarNav: React.VFC<CalendarNavProps> = ({
  onPreviousClick,
  onNextClick,
}) => (
  <div className={styles.navbar}>
    <button
      className={styles.arrows}
      onClick={() => onPreviousClick()}
      type="button"
      aria-label="Previous Month"
    >
      <Icon icon={arrowLeft} role="presentation" />
    </button>
    <button
      className={styles.arrows}
      onClick={() => onNextClick()}
      type="button"
      aria-label="Next Month"
    >
      <Icon icon={arrowRight} role="presentation" />
    </button>
  </div>
)
