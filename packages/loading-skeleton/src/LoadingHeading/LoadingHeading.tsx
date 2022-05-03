import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import { HeadingVariants } from "@kaizen/typography"
import skeletonStyles from "../loading-skeleton.scss"
import headingStyles from "./LoadingHeading.scss"

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
