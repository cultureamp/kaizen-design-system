import React, { useLayoutEffect, useState, useRef } from "react"
import classNames from "classnames"

import styles from "./styles.module.scss"

type Variant = "default" | "active" | "dark" | "dot"

export interface BadgeProps {
  readonly children?: string
  readonly variant?: Variant
  readonly reversed?: boolean
  readonly isLarge?: boolean
}

export const Badge = (props: BadgeProps) => {
  const { children, variant = "default", reversed, isLarge = false } = props

  return (
    <span
      className={classNames(styles.badge, {
        [styles.default]: variant === "default",
        [styles.active]: variant === "active",
        [styles.dark]: variant === "dark",
        [styles.dot]: variant === "dot",
        [styles.reversed]: reversed,
        [styles.large]: isLarge,
      })}
    >
      {props.variant === "dot" ? "" : children}
    </span>
  )
}

export const BadgeAnimated: React.FunctionComponent<BadgeProps> = props => {
  const [isFocused, setIsFocused] = useState(false)

  useLayoutEffect(() => {
    setIsFocused(true)
    setTimeout(() => {
      setIsFocused(false)
    }, 150)
  }, [props.children])

  return (
    <span
      className={classNames(styles.animation, {
        [styles.animationOn]: isFocused,
      })}
    >
      <Badge {...props} />
    </span>
  )
}
