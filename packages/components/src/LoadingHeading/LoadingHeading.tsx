import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { HeadingVariants } from "@kaizen/typography"
import { OverrideClassName } from "~types/OverrideClassName"
import headingStyles from "./LoadingHeading.module.scss"
import skeletonStyles from "./loading-skeleton.module.scss"

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
      skeletonStyles.base,
      headingStyles.heading,
      classNameOverride,
      headingStyles[variant],
      {
        [skeletonStyles.animated]: isAnimated,
        [headingStyles.reversed]: isReversed,
        [headingStyles.link]: isLink,
      }
    )}
    style={{ width: `${width}%` }}
    {...props}
  />
)

LoadingHeading.displayName = "LoadingHeading"
