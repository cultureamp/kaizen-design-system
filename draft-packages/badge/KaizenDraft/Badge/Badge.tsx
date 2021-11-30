import React, { useLayoutEffect, useState, useRef } from "react"
import classNames from "classnames"

import styles from "./styles.module.scss"

type Variant = "default" | "active" | "dark" | "dot"
type Size = "small" | "large"

export interface BadgeProps {
  readonly children?: string
  /**
   * The "dark" variant is no longer in the UI kit
   */
  readonly variant?: Variant
  /**
   * renders reversed colors. Use on purple background
   */
  readonly reversed?: boolean
  /**
   * Supports "small" and "large" sizes - defaults to "small"
   */
  readonly size?: Size
}

export const Badge = (props: BadgeProps) => {
  const { children, variant = "default", reversed, size = "small" } = props

  return (
    <span
      className={classNames(styles.badge, {
        [styles.default]: variant === "default",
        [styles.active]: variant === "active",
        [styles.dark]: variant === "dark",
        [styles.dot]: variant === "dot",
        [styles.reversed]: reversed,
        [styles.large]: size === "large",
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
