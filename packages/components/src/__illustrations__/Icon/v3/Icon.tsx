import React, { HTMLAttributes } from "react"
import classNames from "classnames"
import styles from "./Icon.module.css"

export type IconProps = {
  name: string
  isFilled?: boolean
  /** @default medium */
  size?: "small" | "medium" | "large" | "inherit"
  shouldMirrorInRTL?: boolean
} & HTMLAttributes<HTMLSpanElement>

export const Icon = ({
  name,
  isFilled,
  size = "medium",
  shouldMirrorInRTL,
  className,
  ...restProps
}: IconProps): JSX.Element => (
  <span
    className={classNames(
      "material-symbols-outlined",
      styles.icon,
      isFilled && styles.filled,
      styles[size],
      shouldMirrorInRTL && styles.shouldMirrorInRTL,
      className
    )}
    {...restProps}
  >
    {name}
  </span>
)
