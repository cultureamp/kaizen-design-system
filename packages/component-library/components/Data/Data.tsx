import classNames from "classnames"
import { createElement } from "react"

const styles = require("./Data.module.scss")

export type DataVariants = "large" | "medium" | "small"

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

export type AllowedColors = "dark" | "positive" | "negative"

export interface DataProps {
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
  variant: DataVariants
  color?: AllowedColors
}

export const Heading = ({
  classNameAndIHaveSpokenToDST,
  children,
  tag,
  variant,
  color = "dark",
  ...otherProps
}: DataProps) => {
  const inferredTag =
    tag === undefined ? translateHeadingLevelToTag(variant) : tag

  const classes: string[] = [
    styles.heading,
    styles[variant],
    styles[color],
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
const translateHeadingLevelToTag = (dataVariant: DataVariants) => {
  switch (dataVariant) {
    case "large":
      return "h2"
    case "medium":
      return "h3"
    case "small":
      return "h4"
    default:
      return "h4"
  }
}
