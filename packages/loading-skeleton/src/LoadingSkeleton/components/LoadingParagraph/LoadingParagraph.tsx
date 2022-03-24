import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import styles from "./LoadingParagraph.scss"

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

export const LoadingParagraph: React.VFC<LoadingParagraphProps> = ({
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
}) => (
  <div
    className={classnames(styles.base, classNameOverride, {
      [styles.animated]: isAnimated,
      [styles.centered]: isCentred,
      [styles.reversed]: isReversed,
      [styles.link]: isLink,
      [styles.inheritBaseline]: inheritBaseline,
      [styles.inline]: isInline,
      [styles.noBottomMargin]: noBottomMargin,
    })}
    style={{ width: `${width}%` }}
    {...props}
  />
)

LoadingParagraph.displayName = "LoadingParagraph"
