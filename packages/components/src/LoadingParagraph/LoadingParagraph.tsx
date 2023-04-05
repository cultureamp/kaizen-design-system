import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import skeletonStyles from "./loading-skeleton.module.scss"
import paragraphStyles from "./LoadingParagraph.module.scss"

export interface LoadingParagraphProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
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
}

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
  ...props
}: LoadingParagraphProps): JSX.Element => (
  <div
    className={classnames(
      skeletonStyles.base,
      paragraphStyles.paragraph,
      classNameOverride,
      {
        [skeletonStyles.animated]: isAnimated,
        [paragraphStyles.centered]: isCentred,
        [paragraphStyles.reversed]: isReversed,
        [paragraphStyles.link]: isLink,
        [paragraphStyles.inheritBaseline]: inheritBaseline,
        [paragraphStyles.inline]: isInline,
        [paragraphStyles.noBottomMargin]: noBottomMargin,
      }
    )}
    style={{ width: `${width}%` }}
    {...props}
  />
)

LoadingParagraph.displayName = "LoadingParagraph"
