import classnames from "classnames"
import * as React from "react"
import { responsiveMarginClasses } from "../Spacing/margin"
import { responsivePaddingClasses } from "../Spacing/padding"
import { Spacing } from "../types"

export interface BoxProps {
  style?: React.CSSProperties
  children: React.ReactNode
}

export const Box = ({
  children,
  style,
  p,
  pt,
  pr,
  pb,
  pl,
  px,
  py,
  m,
  mt,
  mr,
  mb,
  ml,
  mx,
  my,
}: BoxProps & Spacing) => {
  const classes: string[] = [
    ...responsivePaddingClasses({ p, pt, pr, pb, pl, px, py }),
    ...responsiveMarginClasses({ m, mt, mr, mb, ml, mx, my }),
  ]

  return (
    <div style={{ ...style }} className={classnames(classes.join(" "))}>
      {children}
    </div>
  )
}
