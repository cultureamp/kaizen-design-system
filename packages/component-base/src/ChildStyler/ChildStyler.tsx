import React, { Children } from "react"
import classnames from "classnames"
import { getMarginClassNames, StylerOptions } from "./utils"
import styles from "./ChildStyler.module.scss"

export interface ChildStylerProps extends StylerOptions {
  children: React.ReactElement
  isUsingClassNameOverride?: boolean
}

export const ChildStyler: React.VFC<ChildStylerProps> = ({
  children,
  isUsingClassNameOverride = false,
  margin,
}) => {
  const classNames = classnames(styles.testing, getMarginClassNames(margin))

  return Children.only(
    React.cloneElement(
      children,
      isUsingClassNameOverride
        ? {
            ...children.props,
            classNameOverride: classnames(
              children.props.classNameOverride,
              classNames
            ),
          }
        : {
            ...children.props,
            className: classnames(children.props.className, classNames),
          }
    )
  )

  // return isUsingClassNameOverride
  //   ? Children.only(
  //       React.cloneElement(children, {
  //         ...children.props,
  //         classNameOverride: classnames(
  //           children.props.classNameOverride,
  //           classNames
  //         ),
  //       })
  //     )
  //   : Children.only(
  //       React.cloneElement(children, {
  //         ...children.props,
  //         className: classnames(children.props.className, classNames),
  //       })
  //     )
}
