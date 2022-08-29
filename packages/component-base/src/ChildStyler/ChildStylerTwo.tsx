import React, { Children } from "react"
import classnames from "classnames"
import { getMarginClassNames, StylerOptions } from "./utils"
import { isUsingClassNameOverride } from "./typeguards"
import styles from "./ChildStyler.module.scss"

export interface ChildStylerTwoProps {
  children: React.ReactElement
  options: StylerOptions
}

export const ChildStylerTwo: React.VFC<ChildStylerTwoProps> = ({
  children,
  options,
}) =>
  isUsingClassNameOverride(children)
    ? Children.only(
        React.cloneElement(children, {
          ...children.props,
          classNameOverride: classnames(
            children.props.classNameOverride,
            styles.testing,
            getMarginClassNames(options.margin)
          ),
        })
      )
    : Children.only(children)

ChildStylerTwo.displayName = "ChildStylerTwo"
