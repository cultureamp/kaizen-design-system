import React from "react"
import classnames from "classnames"
import styles from "./LinkStyle.module.scss"

export type LinkStyleProps = {
  children: React.ReactElement
  isReversed?: boolean
}

export const LinkStyle = ({
  children,
  isReversed = false,
}: LinkStyleProps): JSX.Element => {
  const className = classnames(
    styles.linkStyle,
    isReversed && styles.isReversed
  )

  return React.Children.only(
    React.cloneElement(children, {
      ...children.props,
      className: classnames(
        className,
        children.props.className,
        children.props.classNameOverride
      ),
    })
  )
}

LinkStyle.displayName = "LinkStyle"
