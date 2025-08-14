import React, { type HTMLAttributes } from 'react'
import classnames from 'classnames'
import { type OverrideClassName } from '~components/types/OverrideClassName'
import { useExitingAnimation } from '~components/utils/useExitingAnimation'
import sharedAiStyles from '../../styles/utils/AIMoment.module.css'
import styles from './Card.module.css'

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
  color?: CardColors
  /** Set the loading state for Card AI Moments. If `true` this will animate, if `false` this will render the static loaded state. */
  isAiLoading?: boolean
} & OverrideClassName<Omit<HTMLAttributes<HTMLElement>, 'color'>>

/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3082094938/Card Guidance} |
 * {@link https://cultureamp.design/?path=/story/components-card--docs Storybook}
 */
export const Card = ({
  children,
  tag = 'div',
  color = 'white',
  isElevated = false,
  classNameOverride,
  isAiLoading,
  ...props
}: CardProps): JSX.Element => {
  const Element = tag
  const animationClass = useExitingAnimation(
    isAiLoading,
    sharedAiStyles.aiMomentLoading,
    sharedAiStyles.aiMomentExiting,
    500,
  )

  return (
    <Element
      className={classnames(
        styles.wrapper,
        styles[color],
        isElevated && styles.elevated,
        isAiLoading !== undefined && sharedAiStyles.aiMoment,
        isAiLoading !== undefined && animationClass,
        classNameOverride,
      )}
      {...props}
    >
      {isAiLoading !== undefined && (
        <div aria-hidden className={sharedAiStyles.aiMomentBackground} />
      )}
      {children}
    </Element>
  )
}

Card.displayName = 'Card'
