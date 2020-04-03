import classNames from "classnames"
import { createElement } from "react"

const styles = require("./Paragraph.module.scss")

export type ParagraphVariants = "intro-lede" | "body" | "small" | "extra-small"

export type AllowedTags =
  | "pre"
  | "p"
  | "div"
  | "span"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"

export type AllowedColors =
  | "dark"
  | "dark-reduced-opacity"
  | "white"
  | "white-reduced-opacity"
  | "positive"
  | "negative"

export interface ParagraphProps {
  /**
   * Not recommended. A short-circuit for overriding styles in a pinch
   * @default ""
   */
  classNameAndIHaveSpokenToDST?: string
  children: React.ReactNode
  /**
   * HTML elements that are allowed on Paragraphs
   * @default "p"
   */
  tag?: AllowedTags
  /**
   * Allowed paragraph variants
   */
  variant: ParagraphVariants
  color?: AllowedColors
}

export const Paragraph = ({
  classNameAndIHaveSpokenToDST,
  children,
  tag,
  variant,
  color = "dark",
  ...otherProps
}: ParagraphProps) => {
  const classes: string[] = [
    styles.paragraph,
    styles[variant],
    styles[color],
    classNameAndIHaveSpokenToDST,
  ]

  return createElement(
    tag === undefined ? "p" : tag,
    { ...otherProps, className: classNames(classes) },
    children
  )
}
