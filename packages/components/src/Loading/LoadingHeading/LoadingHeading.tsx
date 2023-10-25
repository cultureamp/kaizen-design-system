import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { HeadingVariants } from "~components/Heading"
import { OverrideClassName } from "~types/OverrideClassName"
import styles from "./LoadingHeading.module.scss"

export type LoadingHeadingProps = {
  variant: HeadingVariants
  isAnimated?: boolean
  isReversed?: boolean
  isLink?: boolean
  /**
   * Width as a percentage.
   */
  width?: number
} & OverrideClassName<HTMLAttributes<HTMLDivElement>>

export const LoadingHeading = ({
  isAnimated,
  isReversed,
  width,
  isLink,
  classNameOverride,
  variant,
  ...props
}: LoadingHeadingProps): JSX.Element => (
  <div
    className={classnames(
      styles.loadingHeading,
      classNameOverride,
      styles[variant],
      isAnimated && styles.isAnimated,
      isReversed && styles.isReversed,
      isLink && styles.link
    )}
    style={{ width: `${width}%` }}
    {...props}
  />
)

LoadingHeading.displayName = "LoadingHeading"
