import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import skeletonStyles from "../loading-skeleton.module.scss"
import inputStyles from "./LoadingInput.module.scss"

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

export const LoadingInput = ({
  isAnimated,
  isReversed,
  width,
  classNameOverride,
  height = 48,
  ...props
}: LoadingInputProps): JSX.Element => (
  <div
    className={classnames(
      skeletonStyles.base,
      inputStyles.input,
      classNameOverride,
      isAnimated && skeletonStyles.animated,
      isReversed && inputStyles.reversed
    )}
    style={{ width: `${width}%`, height: `${height}px` }}
    {...props}
  />
)

LoadingInput.displayName = "LoadingInput"
