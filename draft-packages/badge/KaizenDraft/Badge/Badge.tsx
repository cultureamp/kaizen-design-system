import React, { HTMLAttributes, useLayoutEffect, useState } from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import styles from "./Badge.module.scss"

interface CommonProps
  extends OverrideClassName<HTMLAttributes<HTMLSpanElement>> {
  children?: string
  /**
   * The "dark" variant is no longer in the UI kit
   */
  variant?: "default" | "active" | "dark"
  /**
   * renders reversed colors. Use on purple background
   */
  reversed?: boolean
  /**
   * Supports "small" and "large" sizes - defaults to "small"
   */
  size?: "small" | "large"
}

interface DotProps extends Omit<CommonProps, "variant"> {
  children?: undefined
  variant: "dot"
}

export type BadgeProps = CommonProps | DotProps

/**
 * {@link https://cultureamp.design/components/badge/ Guidance} |
 * {@link https://cultureamp.design/storybook/?path=/docs/components-badge--default-story Storybook}
 */
export const Badge = ({
  children,
  variant = "default",
  reversed = false,
  size = "small",
  classNameOverride,
  ...restProps
}: BadgeProps): JSX.Element => (
  <span
    className={classnames(
      styles.badge,
      styles[variant],
      classNameOverride,
      reversed && styles.reversed,
      size === "large" && styles.large
    )}
    {...restProps}
  >
    {variant !== "dot" && children}
  </span>
)

export const BadgeAnimated = (props: BadgeProps): JSX.Element => {
  const [isFocused, setIsFocused] = useState(false)

  useLayoutEffect(() => {
    setIsFocused(true)
    setTimeout(() => {
      setIsFocused(false)
    }, 150)
  }, [props.children])

  return (
    <span
      className={classnames(styles.animation, isFocused && styles.animationOn)}
    >
      <Badge {...props} />
    </span>
  )
}
