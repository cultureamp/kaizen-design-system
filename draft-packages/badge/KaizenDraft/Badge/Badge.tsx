import classNames from "classnames"
import * as React from "react"

const styles = require("./styles.module.scss")

type Variant = "default" | "active"

export interface BadgeProps {
  readonly children: React.ReactNode
  readonly variant?: Variant
}

export const Badge = (props: BadgeProps) => {
  const { children, variant = "default" } = props

  return (
    <span
      className={classNames(styles.badge, {
        [styles.default]: variant === "default",
        [styles.active]: variant === "active",
      })}
    >
      {children}
    </span>
  )
}
