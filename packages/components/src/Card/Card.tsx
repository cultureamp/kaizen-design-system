import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "~types/OverrideClassName"
import styles from "./Card.module.scss"

export type CardVariants =
  | "default"
  | "informative"
  | "positive"
  | "cautionary"
  | "destructive"
  | "assertive"
  | "highlight"

export type CardColors =
  | "blue"
  | "green"
  | "grey"
  | "orange"
  | "purple"
  | "red"
  | "white"
  | "yellow"

export type CardPropsVariants = {
  /**
   * @deprecated Please use `color` instead
   */
  variant?: CardVariants
  color?: never
}

export type CardPropsColors = {
  /**
   * @deprecated Please use `color` instead
   */
  variant?: never
  /**
   * If you are transitioning from `variant`:
   * - `default` should be `white` OR you can remove the prop
   * - `positive` should be `green`
   * - `negative` should be `red`
   * - `informative` should be `blue`
   * - `cautionary` should be `yellow`
   * - `assertive` should be `orannge`
   * - `highlight` should be `purple`
   */
  color?: CardColors
}

export type BaseCardProps = OverrideClassName<HTMLAttributes<HTMLElement>> & {
  children?: React.ReactNode
  /**
   * HTML elements that are allowed on Card.
   */
  tag?: "div" | "article" | "header" | "main" | "section" | "li"
  /**
   * Adds a larger box shadow to to the card container.
   */
  isElevated?: boolean
}

export type CardProps = BaseCardProps & (CardPropsVariants | CardPropsColors)

/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3082094938/Card Guidance} |
 * {@link https://cultureamp.design/?path=/story/components-card--docs Storybook}
 */
export const Card = ({
  children,
  tag = "div",
  variant,
  color = "white",
  isElevated = false,
  classNameOverride,
  ...props
}: CardProps): JSX.Element => {
  const Element = tag

  return (
    <Element
      className={classnames(
        styles.wrapper,
        variant && styles[variant],
        styles[color],
        classNameOverride,
        isElevated && styles.elevated
      )}
      {...props}
    >
      {children}
    </Element>
  )
}

Card.displayName = "Card"
