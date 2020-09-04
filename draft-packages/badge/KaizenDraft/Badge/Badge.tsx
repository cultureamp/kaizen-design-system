import React, { useLayoutEffect, useState, useRef } from "react"
import classNames from "classnames"

const styles = require("./styles.module.scss")

type Variant = "default" | "active" | "dark"

export interface BadgeProps {
  readonly children: string
  readonly variant?: Variant
  readonly reversed?: boolean
}

export const Badge = (props: BadgeProps) => {
  const { children, variant = "default", reversed } = props

  return (
    <span
      className={classNames(styles.badge, {
        [styles.default]: variant === "default",
        [styles.active]: variant === "active",
        [styles.dark]: variant === "dark",
        [styles.reversed]: reversed,
      })}
    >
      {children}
    </span>
  )
}

export const BadgeAnimated: React.FunctionComponent<BadgeProps> = props => {
  const [isFocussed, setIsFocussed] = useState(false)

  useLayoutEffect(() => {
    setIsFocussed(true)
    setTimeout(() => {
      setIsFocussed(false)
    }, 150)
  }, [props.children])

  return (
    <span
      className={classNames(styles.animation, {
        [styles.animationOn]: isFocussed,
      })}
    >
      <Badge {...props} />
    </span>
  )
}
