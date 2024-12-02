import React, { HTMLAttributes } from 'react'
import classnames from 'classnames'
import { OverrideClassName } from '~components/types/OverrideClassName'
import styles from './Card.module.css'

export type CardVariants =
  | 'default'
  | 'informative'
  | 'positive'
  | 'cautionary'
  | 'destructive'
  | 'assertive'
  | 'highlight'

export type CardColors =
  | 'blue'
  | 'green'
  | 'gray'
  | 'orange'
  | 'purple'
  | 'red'
  | 'white'
  | 'yellow'

export type CardProps = {
  children?: React.ReactNode
  /**
   * HTML elements that are allowed on Card.
   */
  tag?: 'div' | 'article' | 'header' | 'main' | 'section' | 'li'
  /**
   * Adds a larger box shadow to to the card container.
   */
  isElevated?: boolean
  /**
   * If you are transitioning from `variant`:
   * - `assertive` should be `orange`
   * - `cautionary` should be `yellow`
   * - `default` should be `white` OR you can remove the prop
   * - `destructive` should be `red`
   * - `highlight` should be `purple`
   * - `informative` should be `blue`
   * - `positive` should be `green`
   * @default white
   */
  color?: CardColors
  /**
   * @deprecated Please use color instead
   */
  variant?: CardVariants
} & OverrideClassName<Omit<HTMLAttributes<HTMLElement>, 'color'>>

/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3082094938/Card Guidance} |
 * {@link https://cultureamp.design/?path=/story/components-card--docs Storybook}
 */
export const Card = ({
  children,
  tag = 'div',
  variant,
  color = 'white',
  isElevated = false,
  classNameOverride,
  ...props
}: CardProps): JSX.Element => {
  const Element = tag

  return (
    <Element
      className={classnames(
        styles.wrapper,
        variant ? styles[variant] : styles[color],
        classNameOverride,
        isElevated && styles.elevated,
      )}
      {...props}
    >
      {children}
    </Element>
  )
}

Card.displayName = 'Card'
