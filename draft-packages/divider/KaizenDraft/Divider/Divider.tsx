import classNames from "classnames"
import * as React from "react"
const styles = require("./styles.module.scss")

export interface DividerProps {
  isReversed?: boolean
  variant: "content" | "canvas"
}

export const Divider = ({ isReversed = false, variant }: DividerProps) => (
  <hr
    className={classNames(styles.wrapper, {
      [styles.reversed]: isReversed,
      [styles.content]: variant === "content",
      [styles.canvas]: variant === "canvas",
    })}
  />
)
