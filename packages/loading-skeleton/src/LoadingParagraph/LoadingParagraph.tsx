import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import skeletonStyles from "../loading-skeleton.module.scss"
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
      isAnimated && skeletonStyles.animated,
      isCentred && paragraphStyles.centered,
      isReversed && paragraphStyles.reversed,
      isLink && paragraphStyles.link,
      inheritBaseline && paragraphStyles.inheritBaseline,
      isInline && paragraphStyles.inline,
      noBottomMargin && paragraphStyles.noBottomMargin
    )}
    style={{ width: `${width}%` }}
    {...props}
  />
)

LoadingParagraph.displayName = "LoadingParagraph"
