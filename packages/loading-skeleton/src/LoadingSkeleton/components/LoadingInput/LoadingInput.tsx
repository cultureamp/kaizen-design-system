import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import styles from "./LoadingInput.scss"

export interface LoadingInputProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  isAnimated?: boolean
  isReversed?: boolean
  /**
   * Width as a percentage.
   */
  width?: number
  /**
   * Width as px.
   */
  height?: number
}

export const LoadingInput: React.VFC<LoadingInputProps> = ({
  isAnimated,
  isReversed,
  width,
  classNameOverride,
  height = 48,
  ...props
}) => (
  <div
    className={classnames(styles.base, classNameOverride, {
      [styles.animated]: isAnimated,
      [styles.reversed]: isReversed,
    })}
    style={{ width: `${width}%`, height: `${height}px` }}
    {...props}
  />
)

LoadingInput.displayName = "LoadingInput"
