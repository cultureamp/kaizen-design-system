import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import { marginClasses, paddingClasses, Spacing } from "../Spacing"

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

export const Box: React.VFC<BoxProps> = ({
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
}) => {
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
