import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "~types/OverrideClassName"
import styles from "./LoadingGraphic.module.scss"

export type LoadingGraphicSize =
  | "small"
  | "medium"
  | "large"
  | "xlarge"
  | "xxlarge"
  | "scene"

const loadingGraphicSizeMap = new Map<LoadingGraphicSize, number>([
  ["small", 1.25],
  ["medium", 3],
  ["large", 4.5],
  ["xlarge", 6],
  ["xxlarge", 7.5],
  ["scene", 18.75],
])

export type LoadingGraphicProps = {
  isAnimated?: boolean
  isReversed?: boolean
  size: LoadingGraphicSize
} & OverrideClassName<HTMLAttributes<HTMLDivElement>>

/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3082060062/Loading+Skeleton Guidance} |
 * {@link https://cultureamp.design/?path=/docs/components-loading-states-loadinggraphic--docs Storybook}
 */
export const LoadingGraphic = ({
  isAnimated,
  isReversed,
  size,
  classNameOverride,
  ...props
}: LoadingGraphicProps): JSX.Element => {
  const sizeValue = `${loadingGraphicSizeMap.get(size)}rem`

  return (
    <div
      className={classnames(
        styles.loadingGraphic,
        isAnimated && styles.isAnimated,
        isReversed && styles.isReversed,
        classNameOverride
      )}
      style={{ width: sizeValue, height: sizeValue }}
      {...props}
    />
  )
}

LoadingGraphic.displayName = "LoadingGraphic"
