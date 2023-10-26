import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "~types/OverrideClassName"
import styles from "./LoadingInput.module.scss"

export type LoadingInputProps = {
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
} & OverrideClassName<HTMLAttributes<HTMLDivElement>>

/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3082060062/Loading+Skeleton Guidance} |
 * {@link https://cultureamp.design/?path=/docs/components-loading-states-loadinginput--docs Storybook}
 */
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
      styles.loadingInput,
      isAnimated && styles.isAnimated,
      isReversed && styles.isReversed,
      classNameOverride
    )}
    style={{ width: `${width}%`, height: `${height}px` }}
    {...props}
  />
)

LoadingInput.displayName = "LoadingInput"
