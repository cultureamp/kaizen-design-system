import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import styles from "./IconPoc.module.scss"

// @note: CDN must be set up:
// - in preview-head.html for SB
// - in <head> of apps
//
// This cannot be done in plain HTML, so we either need to:
// 1. get the consumers to insert manually
// 2. add an injection into KaizenProvider
// 3. use react-helmet
// 4. ??

export type IconPocProps = {
  name: string
  isFilled?: boolean
  size?: "small" | "medium" | "large"
} & HTMLAttributes<HTMLSpanElement>

export const IconPoc = ({
  name,
  isFilled,
  size = "medium",
  className,
  ...restProps
}: IconPocProps): JSX.Element => (
  <span
    className={classnames(
      "material-symbols-outlined",
      styles.iconPoc,
      isFilled && styles.filled,
      styles[size],
      className
    )}
    {...restProps}
    >
    {name}
  </span>
)

IconPoc.displayName = "IconPoc"
