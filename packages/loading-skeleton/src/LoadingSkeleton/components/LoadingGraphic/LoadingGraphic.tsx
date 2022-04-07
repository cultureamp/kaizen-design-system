import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import styles from "../styles.scss"

export type GraphicSizes =
  | "small"
  | "medium"
  | "large"
  | "xlarge"
  | "xxlarge"
  | "scene"

const graphicSizesRem = new Map<string, number>([
  ["small", 1.25],
  ["medium", 3],
  ["large", 4.5],
  ["xlarge", 6],
  ["xxlarge", 7.5],
  ["scene", 18.75],
])

export interface LoadingGraphicProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  isAnimated?: boolean
  isReversed?: boolean
  size: GraphicSizes
}

export const LoadingGraphic: React.VFC<LoadingGraphicProps> = ({
  isAnimated,
  isReversed,
  size,
  classNameOverride,
  ...props
}) => (
  <div
    className={classnames(styles.base, styles.graphic, classNameOverride, {
      [styles.animated]: isAnimated,
      [styles.reversed]: isReversed,
    })}
    style={{
      width: `${graphicSizesRem.get(size)}rem`,
      height: `${graphicSizesRem.get(size)}rem`,
    }}
    {...props}
  />
)

LoadingGraphic.displayName = "LoadingGraphic"
