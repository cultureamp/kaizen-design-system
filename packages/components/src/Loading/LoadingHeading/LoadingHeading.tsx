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

/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3082060062/Loading+Skeleton Guidance} |
 * {@link https://cultureamp.design/?path=/docs/components-loading-states-loadingheading--docs Storybook}
 */
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
