import React, { HTMLAttributes } from "react"
import classNames from "classnames"
import styles from "./Icon.module.css"

export type IconProps = {
  name: string
  isFilled?: boolean
  /** @default medium */
  size?: "small" | "medium" | "large" | "inherit"
} & HTMLAttributes<HTMLSpanElement>

export const Icon = ({
  name,
  isFilled,
  size = "medium",
  className,
  ...restProps
}: IconProps): JSX.Element => (
  <span
    className={classNames(
      "material-symbols-outlined",
      styles.iconPocWithSize,
      isFilled && styles.filled,
      styles[size],
      className
    )}
    {...restProps}
  >
    {name}
  </span>
)
