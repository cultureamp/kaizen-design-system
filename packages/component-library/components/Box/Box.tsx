import {
  responsiveMarginClasses,
  responsivePaddingClasses,
  Spacing,
} from "@kaizen/component-library"
import classnames from "classnames"
import * as React from "react"

export interface BoxProps {
  children: React.ReactNode
  classNameAndIHaveSpokenToDST?: string
  rtl?: boolean
}

export const Box = ({
  children,
  classNameAndIHaveSpokenToDST,
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
  ...otherProps
}: // otherProps accounts for data attributes, which are not valid JS identifiers
// https://www.typescriptlang.org/docs/handbook/jsx.html#attribute-type-checking
BoxProps & Spacing) => {
  const classes: string[] = [
    ...responsivePaddingClasses({ p, pt, pr, pb, pl, px, py, rtl }),
    ...responsiveMarginClasses({ m, mt, mr, mb, ml, mx, my, rtl }),
  ]

  return (
    <div
      {...otherProps}
      className={classnames(classes, classNameAndIHaveSpokenToDST)}
    >
      {children}
    </div>
  )
}
