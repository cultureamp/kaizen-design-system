import React from "react"
import cx from "classnames"
import styles from "./Responsive.scss"

export type GridSizes = {
  small?: "1" | "2"
  medium?: "1" | "2" | "3"
  large?: "1" | "2" | "3"
  xl?: "1" | "2" | "3" | "4"
  children?: React.ReactChild
}

export default function Responsive({ small, medium, large, xlarge, children }) {
  return (
    <div
      className={cx(styles.gridWrapper, {
        [styles[`small-${small}`]]: small,
        [styles[`medium-${medium}`]]: medium,
        [styles[`large-${large}`]]: large,
        [styles[`xlarge-${xlarge}`]]: xlarge,
      })}
    >
      {children}
    </div>
  )
}
