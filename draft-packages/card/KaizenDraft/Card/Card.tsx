import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import styles from "./Card.module.scss"

export type CardVariants =
  | "default"
  | "informative"
  | "positive"
  | "cautionary"
  | "destructive"
  | "assertive"
  | "highlight"

export interface CardProps
  extends OverrideClassName<HTMLAttributes<HTMLElement>> {
  children?: React.ReactNode
  /**
   * HTML elements that are allowed on Card.
   */
  tag?: "div" | "article" | "header" | "main" | "section" | "li"
  /**
   * determines the card background colour on the card. It should match to the type of content being conveyed.
   */
  variant?: CardVariants
  /**
   * Adds a larger box shadow to to the card container.
   */
  isElevated?: boolean
}

/**
 * {@link https://cultureamp.design/components/card/ Guidance} |
 * {@link https://cultureamp.design/storybook/?path=/story/components-card--default-story Storybook}
 */
export const Card = ({
  children,
  tag = "div",
  variant = "default",
  isElevated = false,
  classNameOverride,
  ...props
}: CardProps): JSX.Element => {
  const Tag = tag
  return (
    <Tag
      className={classnames(
        styles.wrapper,
        styles[variant],
        classNameOverride,
        isElevated && styles.elevated
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}
