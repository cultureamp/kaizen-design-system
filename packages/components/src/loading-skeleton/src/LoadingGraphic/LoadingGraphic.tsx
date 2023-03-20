import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import skeletonStyles from "../loading-skeleton.module.scss"
import graphicStyles from "./LoadingGraphic.module.scss"

export type GraphicSizes =
  | "small"
  | "medium"
  | "large"
  | "xlarge"
  | "xxlarge"
  | "scene"

const graphicSizesRem = new Map<GraphicSizes, number>([
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

export const LoadingGraphic = ({
  isAnimated,
  isReversed,
  size,
  classNameOverride,
  ...props
}: LoadingGraphicProps): JSX.Element => (
  <div
    className={classnames(
      skeletonStyles.base,
      graphicStyles.graphic,
      classNameOverride,
      {
        [skeletonStyles.animated]: isAnimated,
        [graphicStyles.reversed]: isReversed,
      }
    )}
    style={{
      width: `${graphicSizesRem.get(size)}rem`,
      height: `${graphicSizesRem.get(size)}rem`,
    }}
    {...props}
  />
)

LoadingGraphic.displayName = "LoadingGraphic"
