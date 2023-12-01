import React from "react"
import classnames from "classnames"
import { StringSuggestions } from "~types/StringSuggestions"
import styles from "./LinkStyle.module.scss"

export type LinkStyleProps = {
  children: React.ReactElement
  isReversed?: boolean
  classNamePropName?: StringSuggestions<"className" | "classNameOverride">
}

export const LinkStyle = ({
  children,
  isReversed = false,
  classNamePropName = "className",
}: LinkStyleProps): JSX.Element => {
  const linkClassNames = classnames(
    styles.linkStyle,
    isReversed && styles.isReversed
  )

  const newProps = {
    [classNamePropName]: classnames(
      linkClassNames,
      children.props[classNamePropName]
    ),
  }

  return React.Children.only(React.cloneElement(children, newProps))
}

LinkStyle.displayName = "LinkStyle"
