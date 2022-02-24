import React from "react"
import { Icon } from "@kaizen/component-library"
import arrowRight from "@kaizen/component-library/icons/arrow-right.icon.svg"
import arrowLeft from "@kaizen/component-library/icons/arrow-left.icon.svg"
import { NavbarElementProps } from "react-day-picker/types/Props"
import styles from "./CalendarNav.scss"

export type CalendarNavProps = Pick<
  NavbarElementProps,
  "onPreviousClick" | "onNextClick"
>

export const CalendarNav: React.VFC<CalendarNavProps> = ({
  onPreviousClick,
  onNextClick,
}) => (
  <div className={styles.navbar}>
    <button
      className={styles.arrows}
      onClick={() => onPreviousClick()}
      type="button"
      aria-label="Previous month"
    >
      <Icon icon={arrowLeft} role="presentation" />
    </button>
    <button
      className={styles.arrows}
      onClick={() => onNextClick()}
      type="button"
      aria-label="Next month"
    >
      <Icon icon={arrowRight} role="presentation" />
    </button>
  </div>
)
