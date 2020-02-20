import classnames from "classnames"
import * as React from "react"
import { responsiveMarginClasses } from "../Spacing/margin"
import { responsivePaddingClasses } from "../Spacing/padding"
import { Spacing } from "../types"

export interface BoxProps {
  rtl?: boolean
  children: React.ReactNode
  classNameAndIHaveSpokenToDST?: string
}

export const Box = ({
  children,
  classNameAndIHaveSpokenToDST,
  rtl = false,
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
    ...responsivePaddingClasses({ p, pt, pr, pb, pl, px, py, rtl }),
    ...responsiveMarginClasses({ m, mt, mr, mb, ml, mx, my, rtl }),
  ]

  return (
    <div
      className={classnames(classes.join(" "), classNameAndIHaveSpokenToDST)}
    >
      {children}
    </div>
  )
}
