import React, { Children } from "react"
import classnames from "classnames"
import { getMarginClassNames, StylerOptions } from "./utils"
import { isUsingClassNameOverride } from "./typeguards"
import styles from "./ChildStyler.module.scss"

export interface ChildStylerProps extends StylerOptions {
  children: React.ReactElement
}

export const ChildStyler: React.VFC<ChildStylerProps> = ({ children, margin }) => {
  const classNames = classnames(styles.testing, getMarginClassNames(margin))

  return isUsingClassNameOverride(children)
? Children.only(
    React.cloneElement(children, {
      ...children.props,
      classNameOverride: classnames(
        children.props.classNameOverride,
        classNames
      ),
    })
  )
  // : Children.only(children)
  : Children.only(
    React.cloneElement(children, {
      ...children.props,
      className: classnames(
        children.props.className,
        classNames
      ),
    })
  )
}
