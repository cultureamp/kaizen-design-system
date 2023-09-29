import { createElement, HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "~types/OverrideClassName"
import styles from "./Text.module.scss"

export type TextVariants = "intro-lede" | "body" | "small" | "extra-small"

export type AllowedTextTags =
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

export type AllowedTextColors =
  | "dark"
  | "dark-reduced-opacity"
  | "white"
  | "white-reduced-opacity"
  | "positive"
  | "negative"

export interface TextProps
  extends OverrideClassName<HTMLAttributes<HTMLElement>> {
  children: React.ReactNode
  /**
   * HTML elements that are allowed on Text
   * @default "p"
   */
  tag?: AllowedTextTags
  /**
   * Allowed text variants
   */
  variant: TextVariants
  color?: AllowedTextColors
}

/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3074885298/Typography#Paragraph Guidance}
 * {@link https://cultureamp.design/?path=/docs/components-typography-text--body Storybook}
 */
export const Text = ({
  children,
  tag,
  variant,
  color = "dark",
  classNameOverride,
  ...restProps
}: TextProps): JSX.Element => {
  const className = classnames(
    styles.text,
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

Text.displayName = "Text"
