import classNames from "classnames"
import * as React from "react"

const styles = require("./Text.module.scss")

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
  inheritBaseline?: boolean
  inline?: boolean
}

const Text: React.FunctionComponent<TextProps> = ({
  tag,
  children,
  inheritBaseline = false,
  inline = false,
  style = "default-style",
}) =>
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
