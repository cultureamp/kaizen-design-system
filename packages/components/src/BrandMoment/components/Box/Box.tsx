import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "~types/OverrideClassName"
import { marginClasses } from "./utils/margin"
import { paddingClasses } from "./utils/padding"
/**
 * Spacing is in grid units (24px grid)
 */
export type Spacing = {
  /**
   * padding
   */
  p?: GridFractions
  /**
   * padding top
   */
  pt?: GridFractions
  /**
   * padding right
   */
  pr?: GridFractions
  /**
   * padding bottom
   */
  pb?: GridFractions
  /**
   * padding left
   */
  pl?: GridFractions
  /**
   * padding about the x-axis - padding left and right
   */
  px?: GridFractions
  /**
   * padding about the y-axis - padding top and bottom
   */
  py?: GridFractions
  /**
   * margin
   */
  m?: GridFractions
  /**
   * margin top
   */
  mt?: GridFractions
  /**
   * margin right
   */
  mr?: GridFractions
  /**
   * margin bottom
   */
  mb?: GridFractions
  /**
   * margin left
   */
  ml?: GridFractions
  /**
   * margin about the x-axis - padding left and right
   */
  mx?: GridFractions
  /**
   * margin about the y-axis - padding top and bottom
   */
  my?: GridFractions
}

export type GridFractions =
  | 0
  | 0.25
  | 0.5
  | 0.75
  | 1
  | 1.25
  | 1.5
  | 1.75
  | 2
  | 2.5
  | 3
  | 3.5
  | 4


export interface BoxProps
  extends Spacing,
    OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  children: React.ReactNode
  /**
   * Support for languages that read right to left. This will flip margins and paddings on the x-axis.
   * @default "false"
   */
  rtl?: boolean
}

/**
 * {@link https://cultureamp.design/storybook/?path=/docs/components-box--box-default Storybook}
 */
export const Box = ({
  children,
  rtl = false,
  m,
  mt,
  mr,
  mb,
  ml,
  mx,
  my,
  p,
  pt,
  pr,
  pb,
  pl,
  px,
  py,
  classNameOverride,
  ...restProps
}: BoxProps): JSX.Element => {
  const classes: string[] = [
    ...paddingClasses({ p, pt, pr, pb, pl, px, py, rtl }),
    ...marginClasses({ m, mt, mr, mb, ml, mx, my, rtl }),
  ]

  return (
    <div className={classnames(classes, classNameOverride)} {...restProps}>
      {children}
    </div>
  )
}

Box.displayName = "Box"
