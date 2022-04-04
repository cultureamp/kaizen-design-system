import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import styles from "../styles.scss"

export interface LoadingGraphicProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  isAnimated?: boolean
  isReversed?: boolean
  /**
   * Width as a rem.
   */
  width: number
}

export const LoadingGraphic: React.VFC<LoadingGraphicProps> = ({
  isAnimated,
  isReversed,
  width,
  classNameOverride,
  ...props
}) => (
  <div
    className={classnames(styles.base, styles.graphic, classNameOverride, {
      [styles.animated]: isAnimated,
      [styles.reversed]: isReversed,
    })}
    style={{ width: `${width}rem`, height: `${width}rem` }}
    {...props}
  />
)

LoadingGraphic.displayName = "LoadingGraphic"
