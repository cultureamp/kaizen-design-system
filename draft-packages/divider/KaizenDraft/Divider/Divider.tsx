import classNames from "classnames"
import * as React from "react"
import styles from "./styles.module.scss"

export interface DividerProps {
  isReversed?: boolean
  variant: "content" | "canvas" | "menuSeparator"
}

export const Divider = ({ isReversed = false, variant }: DividerProps) => (
  <hr
    aria-hidden="true"
    className={classNames(styles.wrapper, {
      [styles.reversed]: isReversed,
      [styles.content]: variant === "content",
      [styles.canvas]: variant === "canvas",
      [styles.menuSeparator]: variant === "menuSeparator",
    })}
  />
)
