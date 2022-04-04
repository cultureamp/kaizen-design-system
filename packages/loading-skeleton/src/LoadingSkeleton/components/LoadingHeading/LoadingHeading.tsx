import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import { HeadingVariants } from "@kaizen/typography"
import styles from "../styles.scss"

export interface LoadingHeadingProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  variant: HeadingVariants
  isAnimated?: boolean
  isReversed?: boolean
  isLink?: boolean
  /**
   * Width as a percentage.
   */
  width?: number
}

export const LoadingHeading: React.VFC<LoadingHeadingProps> = ({
  isAnimated,
  isReversed,
  width,
  isLink,
  classNameOverride,
  variant,
  ...props
}) => (
  <div
    className={classnames(
      styles.base,
      styles.heading,
      classNameOverride,
      styles[variant],
      {
        [styles.animated]: isAnimated,
        [styles.reversed]: isReversed,
        [styles.link]: isLink,
      }
    )}
    style={{ width: `${width}%` }}
    {...props}
  />
)

LoadingHeading.displayName = "LoadingHeading"
