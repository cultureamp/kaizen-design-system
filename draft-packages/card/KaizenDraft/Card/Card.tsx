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
  /**
   * The children will
   */
  children?: React.ReactNode
  /**
   * Not recommended. A short-circuit for overriding styles in a pinch
   * @default ""
   */
  classNameAndIHaveSpokenToDST?: string

  /**
   * HTML elements that are allowed on Card.
   * @default "div"
   */
  tag?: "div" | "article" | "header" | "main" | "section" | "li"

  /**
   * HTML elements that are allowed on Card.
   * @default "default"
   */
  variant?: CardVariants
}

export const Card = ({
  children,
  tag = "div",
  classNameAndIHaveSpokenToDST,
  variant = "default",
  ...otherProps
}: CardProps) => {
  const Tag = tag
  return (
    <Tag
      className={cx(styles.wrapper, styles[variant], {
        classNameAndIHaveSpokenToDST,
      })}
      {...otherProps}
    >
      {children}
    </Tag>
  )
}
