import classnames from "classnames"
import * as React from "react"
import { responsiveMarginClasses } from "../Spacing/margin"
import { responsivePaddingClasses } from "../Spacing/padding"
import { Spacing } from "../types"

export interface BoxProps {
  children: React.ReactNode
  classNameAndIHaveSpokenToDST?: string
}

export const Box = ({
  children,
  classNameAndIHaveSpokenToDST,
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
    <div
      className={classnames(classes.join(" "), classNameAndIHaveSpokenToDST)}
    >
      {children}
    </div>
  )
}
