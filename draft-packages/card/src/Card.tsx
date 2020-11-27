import * as React from "react"
import styles from "../styles/styles.module.scss"

export interface CardProps {
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
}

export const Card = ({
  children,
  tag = "div",
  classNameAndIHaveSpokenToDST,
  ...otherProps
}: CardProps) => {
  const className =
    (classNameAndIHaveSpokenToDST ? classNameAndIHaveSpokenToDST : "") +
    " " +
    styles.wrapper

  return React.createElement(tag, { ...otherProps, className }, children)
}
