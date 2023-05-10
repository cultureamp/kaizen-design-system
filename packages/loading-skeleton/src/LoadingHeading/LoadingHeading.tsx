import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import { HeadingVariants } from "@kaizen/typography"
import skeletonStyles from "../loading-skeleton.module.scss"
import headingStyles from "./LoadingHeading.module.scss"

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
      isAnimated && skeletonStyles.animated,
      isReversed && headingStyles.reversed,
      isLink && headingStyles.link
    )}
    style={{ width: `${width}%` }}
    {...props}
  />
)

LoadingHeading.displayName = "LoadingHeading"
