import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import styles from "./LoadingGraphic.scss"

export interface LoadingGraphicProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  isAnimated?: boolean
  isReversed?: boolean
  size:
    | "small"
    | "medium"
    | "large"
    | "x-large"
    | "xx-large"
    | "xxx-large"
    | "xxxx-large"
  // size: "icon" | "avatar" | "spot" | "scene"
}

export const LoadingGraphic: React.VFC<LoadingGraphicProps> = ({
  isAnimated,
  isReversed,
  size,
  classNameOverride,
  ...props
}) => (
  <div
    className={classnames(styles.base, classNameOverride, styles[`${size}`], {
      [styles.animated]: isAnimated,
      [styles.reversed]: isReversed,
    })}
    {...props}
  />
)

LoadingGraphic.displayName = "LoadingGraphic"
