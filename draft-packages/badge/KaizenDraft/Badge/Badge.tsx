import React, { HTMLAttributes, useLayoutEffect, useState } from "react"
import classNames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import styles from "./styles.module.scss"

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
export const Badge: React.VFC<BadgeProps> = ({
  children,
  variant = "default",
  reversed = false,
  size = "small",
  classNameOverride,
  ...restProps
}) => (
  <span
    className={classNames(styles.badge, styles[variant], classNameOverride, {
      [styles.reversed]: reversed,
      [styles.large]: size === "large",
    })}
    {...restProps}
  >
    {variant !== "dot" && children}
  </span>
)

export const BadgeAnimated: React.VFC<BadgeProps> = props => {
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
