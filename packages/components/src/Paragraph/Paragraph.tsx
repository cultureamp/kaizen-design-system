import { createElement, HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "~types/OverrideClassName"
import styles from "./Paragraph.module.scss"

export type ParagraphVariants = "intro-lede" | "body" | "small" | "extra-small"

export type AllowedParagraphTags =
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

export type AllowedParagraphColors =
  | "dark"
  | "dark-reduced-opacity"
  | "white"
  | "white-reduced-opacity"
  | "positive"
  | "negative"

export interface ParagraphProps
  extends OverrideClassName<HTMLAttributes<HTMLElement>> {
  children: React.ReactNode
  /**
   * HTML elements that are allowed on Paragraphs
   * @default "p"
   */
  tag?: AllowedParagraphTags
  /**
   * Allowed paragraph variants
   */
  variant: ParagraphVariants
  color?: AllowedParagraphColors
}

/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3074885298/Typography#Paragraph Guidance}
 * {@link https://cultureamp.design/?path=/docs/components-typography-paragraph--body Storybook}
 */
export const Paragraph = ({
  children,
  tag,
  variant,
  color = "dark",
  classNameOverride,
  ...restProps
}: ParagraphProps): JSX.Element => {
  const className = classnames(
    styles.paragraph,
    styles[variant],
    styles[color],
    classNameOverride
  )

  return createElement(
    tag === undefined ? "p" : tag,
    { ...restProps, className },
    children
  )
}
