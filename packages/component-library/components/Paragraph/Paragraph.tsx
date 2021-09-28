import classNames from "classnames"
import { createElement, HTMLAttributes } from "react"

import styles from "./Paragraph.module.scss"

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
  | "label"

export type AllowedColors =
  | "dark"
  | "dark-reduced-opacity"
  | "white"
  | "white-reduced-opacity"
  | "positive"
  | "negative"

export interface ParagraphProps
  extends Omit<HTMLAttributes<HTMLElement>, "className"> {
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
  const className = classNames([
    styles.paragraph,
    styles[variant],
    styles[color],
    classNameAndIHaveSpokenToDST,
  ])

  return createElement(
    tag === undefined ? "p" : tag,
    { ...otherProps, className },
    children
  )
}
