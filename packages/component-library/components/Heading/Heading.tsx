import classNames from "classnames"
import { createElement } from "react"

const styles = require("./Heading.module.scss")

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
  | "a"
  | "div"
  | "span"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"

export interface HeadingProps {
  /**
   * Not recommended. A short-circuit for overriding styled in a pinch
   */
  classNameAndIHaveSpokenToDST?: string
  children: React.ReactNode
  /**
   * HTML elements that are allowed on Headings
   */
  tag?: AllowedTags
  /**
   * Allowed heading variants
   */
  variant: HeadingVariants
}

export const Heading = ({
  classNameAndIHaveSpokenToDST,
  children,
  tag,
  variant,
  ...otherProps
}: HeadingProps) => {
  const inferredTag =
    tag === undefined ? translateHeadingLevelToTag(variant) : tag

  const classes: string[] = [
    styles.heading,
    styles[variant],
    classNameAndIHaveSpokenToDST,
  ]

  return createElement(
    inferredTag,
    { ...otherProps, className: classNames(classes) },
    children
  )
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
