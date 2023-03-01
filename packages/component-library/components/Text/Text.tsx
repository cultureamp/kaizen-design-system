import React from "react"
import classNames from "classnames"
import styles from "./Text.module.scss"

type TextProps = {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "div" | "span" | "label"
  style?:
    | "default-style"
    | "page-title"
    | "title"
    | "display"
    | "heading"
    | "paragraph"
    | "lede"
    | "body"
    | "body-bold"
    | "small"
    | "small-bold"
    | "notification"
    | "label"
    | "control-action"
    | "button"
    | "zen-display-0"
    | "zen-heading-1"
    | "zen-heading-2"
    | "zen-heading-3"
    | "zen-data-large"
    | "zen-data-large-units"
    | "zen-data-medium"
    | "zen-data-medium-units"
    | "zen-data-small"
    | "zen-data-small-units"
  inheritBaseline?: boolean
  inline?: boolean
  children?: React.ReactNode
}

/**
 * @deprecated Text is deprecated. Use Paragraph or Heading instead.
 */
const Text = ({
  tag,
  children,
  inheritBaseline = false,
  inline = false,
  style = "default-style",
}: TextProps): JSX.Element =>
  React.createElement(
    tag,
    {
      className: classNames(styles[style], {
        [styles.inheritBaseline]: inheritBaseline,
        [styles.inline]: inline,
      }),
    },
    children
  )

Text.displayName = "Text"

export default Text
