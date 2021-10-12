import React from "react"
import cx from "classnames"
import styles from "./Responsive.scss"
// import { useMediaQueries } from "@kaizen/responsive"

export type GridSizes = {
  small?: "1" | "2"
  medium?: "2" | "3"
  large?: "2" | "3"
  xl?: "3" | "4"
}
// "small-1 medium-3 large-4"
export default function Responsive({ small, medium, large, xlarge }) {
  return (
    <div
      className={cx(styles.gridWrapper, {
        [`small-${small}`]: small,
        [`medium-${medium}`]: medium,
        [`large-${large}`]: large,
        [`xlarge-${xlarge}`]: xlarge,
      })}
    >
      <div className={styles.column}>1</div>
      <div className={styles.column}>2</div>
      <div className={styles.column}>3</div>
      <div className={styles.column}>4</div>
    </div>
  )
}
