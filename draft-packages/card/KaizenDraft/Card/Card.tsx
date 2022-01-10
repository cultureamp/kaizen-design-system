import * as React from "react"
import cx from "classnames"
import styles from "./styles.module.scss"

export type CardVariants =
  | "default"
  | "informative"
  | "positive"
  | "cautionary"
  | "destructive"
  | "assertive"
  | "highlight"

export interface CardProps {
  children?: React.ReactNode
  /**
   * Not recommended. A short-circuit for overriding styles in a pinch.
   * @default ""
   */
  classNameAndIHaveSpokenToDST?: string
  /**
   * HTML elements that are allowed on Card.
   * @default "div"
   */
  tag?: "div" | "article" | "header" | "main" | "section" | "li"
  /**
   * determines the card background colour on the card. It should match to the type of content being conveyed.
   * @default "default"
   */
  variant?: CardVariants
  /**
   * Adds a larger box shadow to to the card container.
   * @default "false"
   */
  isElevated?: boolean
}

export const Card = ({
  children,
  tag = "div",
  classNameAndIHaveSpokenToDST,
  variant = "default",
  isElevated = false,
  ...otherProps
}: CardProps) => {
  const Tag = tag
  return (
    <Tag
      className={cx(styles.wrapper, styles[variant], {
        classNameAndIHaveSpokenToDST,
        [styles.elevated]: isElevated,
      })}
      {...otherProps}
    >
      {children}
    </Tag>
  )
}
