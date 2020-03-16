import classNames from "classnames"
import { createElement } from "react"

const styles = require("./Paragraph.module.scss")

export type ParagraphVariants = "intro-lede" | "body" | "small" | "extra-small"

export type AllowedTags =
  | "pre"
  | "p"
  | "a"
  | "div"
  | "span"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"

export interface ParagraphProps {
  classNameAndIHaveSpokenToDST?: string
  children: React.ReactNode
  tag?: AllowedTags
  variant: ParagraphVariants
}

export const Paragraph = ({
  classNameAndIHaveSpokenToDST,
  children,
  tag,
  variant,
  ...otherProps
}: ParagraphProps) => {
  const classes: string[] = [
    styles.paragraph,
    styles[variant],
    classNameAndIHaveSpokenToDST,
  ]

  return createElement(
    tag === undefined ? "p" : tag,
    { ...otherProps, className: classNames(classes) },
    children
  )
}
