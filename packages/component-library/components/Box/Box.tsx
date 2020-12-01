import classnames from "classnames"
import * as React from "react"
import { marginClasses, paddingClasses, Spacing } from "../Spacing"

export interface BoxProps {
  children: React.ReactNode
  /**
   * Not recommended. A short-circuit for overriding styles in a pinch
   * @default ""
   */
  classNameAndIHaveSpokenToDST?: string
  /**
   * Support for languages that read right to left. This will flip margins and paddings on the x-axis.
   * @default "false"
   */
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
    ...paddingClasses({ p, pt, pr, pb, pl, px, py, rtl }),
    ...marginClasses({ m, mt, mr, mb, ml, mx, my, rtl }),
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
