import React, { Children } from "react"
import classnames from "classnames"
import { OverrideClassName } from "../types"
import styles from "./ChildStyler.scss"

const isStyleable = (
  child: React.ReactElement
): child is React.ReactElement<{ classNameOverride?: string }> => {
  console.log(child)
  return React.isValidElement<OverrideClassName<any>>(child)
  return child.props.classNameOverride
}

export interface ChildStylerProps {
  children: React.ReactElement
}

export const ChildStyler: React.VFC<ChildStylerProps> = ({ children }) => isStyleable(children)
? Children.only(
  React.cloneElement(children, {
    ...children.props,
    classNameOverride: classnames([
      children.props.classNameOverride,
      "testing",
    ]),
  })
  )
  : Children.only(children)

ChildStyler.displayName = "ChildStyler"
