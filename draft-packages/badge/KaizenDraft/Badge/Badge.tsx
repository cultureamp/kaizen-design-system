import classNames from "classnames"
import * as React from "react"

const styles = require("./styles.module.scss")

type Variant = "default" | "active"

export interface BadgeProps {
  readonly variant?: Variant
  text: string
}

export const Badge = (props: BadgeProps) => {
  const { text = "0", variant = "default" } = props

  return (
    <span
      className={classNames(styles.badge, {
        [styles.default]: variant === "default",
        [styles.active]: variant === "active",
      })}
    >
      {text}
    </span>
  )
}
