import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "~components/types/OverrideClassName"
import styles from "./LoadingParagraph.module.scss"

export type LoadingParagraphProps = {
  isAnimated?: boolean
  isCentred?: boolean
  isReversed?: boolean
  isInline?: boolean
  noBottomMargin?: boolean
  isLink?: boolean
  inheritBaseline?: boolean
  /**
   * Width as a percentage.
   */
  width?: number
} & OverrideClassName<HTMLAttributes<HTMLDivElement>>

/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3082060062/Loading+Skeleton Guidance} |
 * {@link https://cultureamp.design/?path=/docs/components-loading-states-loadingparagraph--docs Storybook}
 */
export const LoadingParagraph = ({
  isAnimated,
  isCentred,
  isReversed,
  isInline,
  noBottomMargin,
  width,
  isLink,
  inheritBaseline,
  classNameOverride,
  ...restProps
}: LoadingParagraphProps): JSX.Element => (
  <div
    className={classnames(
      styles.loadingParagraph,
      classNameOverride,
      isAnimated && styles.isAnimated,
      isCentred && styles.isCentered,
      isReversed && styles.isReversed,
      isLink && styles.isLink,
      inheritBaseline && styles.inheritBaseline,
      isInline && styles.isInline,
      noBottomMargin && styles.noBottomMargin,
    )}
    style={{ width: `${width}%` }}
    {...restProps}
  />
)

LoadingParagraph.displayName = "LoadingParagraph"
