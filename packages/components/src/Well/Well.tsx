import React, { type HTMLAttributes } from 'react'
import classnames from 'classnames'
import { type OverrideClassName } from '~components/types/OverrideClassName'
import { useExitingAnimation } from '~components/utils/useExitingAnimation'
import { type WellBorderStyleType, type WellColors, type WellVariantType } from './types'
import styles from './Well.module.css'

export type WellProps = {
  children?: React.ReactNode
  /** @deprecated This will not fallback to `default` variant. `default` can be used but must be explicitly passed to the Well component. It is recommended to use `color` prop and `gray` value if you need a gray background. */
  variant?: WellVariantType
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
  variant,
  color = 'white',
  borderStyle = 'solid',
  noMargin = false,
  classNameOverride,
  isAiLoading,
  ...restProps
}: WellProps): JSX.Element => {
  const animationClass = useExitingAnimation(
    isAiLoading,
    styles.aiMomentLoading,
    styles.aiMomentExiting,
    500,
  )

  return (
    <div
      className={classnames(
        styles.container,
        styles[borderStyle],
        styles[color],
        variant && styles[variant],
        noMargin && styles.noMargin,
        isAiLoading !== undefined && styles.aiMoment,
        isAiLoading !== undefined && animationClass,
        classNameOverride,
      )}
      {...restProps}
    >
      <>
        {/* This is a visual background only and should not children in case classNameOverride is used */}
        {isAiLoading !== undefined && <div aria-hidden className={styles.aiMomentBackground} />}
        {children}
      </>
    </div>
  )
}

Well.displayName = 'Well'
