import React, { type HTMLAttributes } from 'react'
import classnames from 'classnames'
import { type OverrideClassName } from '~components/types/OverrideClassName'
import { useExitingAnimation } from '~components/utils/useExitingAnimation'
import sharedAiStyles from '../../styles/utils/AIMoment.module.css'
import { type WellBorderStyleType, type WellColors } from './types'
import styles from './Well.module.css'

export type WellProps = {
  children?: React.ReactNode
  /** @default `white` */
  color?: WellColors
  /** @default `solid` */
  borderStyle?: WellBorderStyleType
  /** Set the loading state for Well AI Moments. If `true` this will animate, if `false` this will render the static loaded state. */
  isAiLoading?: boolean
  noMargin?: boolean
} & OverrideClassName<HTMLAttributes<HTMLDivElement>>

/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3075604733/Well Guidance} |
 * {@link https://cultureamp.design/?path=/docs/components-well--docs Storybook}
 */
export const Well = ({
  children,
  color = 'white',
  borderStyle = 'solid',
  noMargin = false,
  classNameOverride,
  isAiLoading,
  ...restProps
}: WellProps): JSX.Element => {
  const animationClass = useExitingAnimation(
    isAiLoading,
    sharedAiStyles.aiMomentLoading,
    sharedAiStyles.aiMomentExiting,
    500,
  )

  return (
    <div
      className={classnames(
        styles.container,
        styles[borderStyle],
        styles[color],
        noMargin && styles.noMargin,
        isAiLoading !== undefined && sharedAiStyles.aiMoment,
        isAiLoading !== undefined && animationClass,
        classNameOverride,
      )}
      {...restProps}
    >
      <>
        {isAiLoading !== undefined && (
          <div aria-hidden className={sharedAiStyles.aiMomentBackground} />
        )}
        {children}
      </>
    </div>
  )
}

Well.displayName = 'Well'
