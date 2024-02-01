import React from "react"
import classnames from "classnames"
import { StringSuggestions } from "~types/StringSuggestions"
import styles from "./LinkStyle.module.scss"

export type LinkStyleProps = {
  /**
   * A single ReactElement (dom element or component) you want to add link styles to.
   */
  children: React.ReactElement
  isReversed?: boolean
  /**
   * The name of the className prop for your element in `children`
   * (eg. `classNameOverride` for Kaizen components).
   */
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
