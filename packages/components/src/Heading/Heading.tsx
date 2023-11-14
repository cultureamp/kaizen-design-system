import { createElement, HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "~types/OverrideClassName"
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

export type AllowedHeadingTags =
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

export type AllowedHeadingColors =
  | "dark"
  | "dark-reduced-opacity"
  | "white"
  | "white-reduced-opacity"
  | "positive"
  | "negative"

export type HeadingProps = {
  children: React.ReactNode
  /**
   * HTML elements that are allowed on Headings. When not supplied, the tag is inferred from
   * the variant. E.g. display-0 will infer h1
   */
  tag?: AllowedHeadingTags
  /**
   * Allowed heading variants
   */
  variant: HeadingVariants
  color?: AllowedHeadingColors
} & OverrideClassName<HTMLAttributes<HTMLElement>>

/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3074885298/Typography#Headings Guidance}
 * {@link https://cultureamp.design/?path=/docs/components-typography-heading--display-0 Storybook}
 */
export const Heading = ({
  children,
  tag,
  variant,
  color = "dark",
  classNameOverride,
  ...restProps
}: HeadingProps): JSX.Element => {
  const inferredTag =
    tag === undefined ? translateHeadingLevelToTag(variant) : tag

  const className = classnames(
    styles.heading,
    styles[variant],
    classNameOverride,
    styles[color],
    VARIANTS_24PX_OR_GREATER.includes(variant) ? styles.large : styles.small
  )

  return createElement(inferredTag, { ...restProps, className }, children)
}

Heading.displayName = "Heading"

/**
 * A helper to infer the tag when not explicitly passed as a prop
 * @param headingLevel Level of the heading
 */
const translateHeadingLevelToTag = (headingLevel: HeadingVariants): string => {
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
