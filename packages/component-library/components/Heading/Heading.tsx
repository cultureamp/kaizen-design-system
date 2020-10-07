import classNames from "classnames"
import { createElement } from "react"

import styles from "./Heading.module.scss"

const VARIANTS_24PX_OR_GREATER = ["display-0", "heading-1", "heading-2"]

export type HeadingVariants =
  | "display-0"
  | "heading-1"
  | "heading-2"
  | "heading-3"
  | "heading-4"
  | "heading-5"
  | "heading-6"

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

export interface HeadingProps {
  /**
   * Not recommended. A short-circuit for overriding styles in a pinch
   * @default ""
   */
  classNameAndIHaveSpokenToDST?: string
  children: React.ReactNode
  /**
   * HTML elements that are allowed on Headings. When not supplied, the tag is inferred from
   * the variant. E.g. display-0 will infer h1
   */
  tag?: AllowedTags
  /**
   * Allowed heading variants
   */
  variant: HeadingVariants
  color?: AllowedColors
}

export const Heading = ({
  classNameAndIHaveSpokenToDST,
  children,
  tag,
  variant,
  color = "dark",
  ...otherProps
}: HeadingProps) => {
  const inferredTag =
    tag === undefined ? translateHeadingLevelToTag(variant) : tag

  const className = classNames([
    styles.heading,
    styles[variant],
    classNameAndIHaveSpokenToDST,
    styles[color],
    VARIANTS_24PX_OR_GREATER.includes(variant) ? styles.large : styles.small,
  ])

  return createElement(inferredTag, { ...otherProps, className }, children)
}

/**
 * A helper to infer the tag when not explicitly passed as a prop
 * @param headingLevel Level of the heading
 */
const translateHeadingLevelToTag = (headingLevel: HeadingVariants) => {
  switch (headingLevel) {
    case "display-0":
    case "heading-1":
      return "h1"
    case "heading-2":
      return "h2"
    case "heading-3":
      return "h3"
    case "heading-4":
      return "h4"
    case "heading-5":
      return "h5"
    case "heading-6":
    default:
      return "h6"
  }
}
