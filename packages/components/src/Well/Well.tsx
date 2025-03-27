import React, { useEffect, useState, type HTMLAttributes } from 'react'
import classnames from 'classnames'
import { type OverrideClassName } from '~components/types/OverrideClassName'
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
  /** */
  isAiLoading?: boolean
  noMargin?: boolean
} & OverrideClassName<HTMLAttributes<HTMLDivElement>>

/** a utility that returns an animated or exit animation class */
export const useExitingAnimation = (
  shouldAnimate: boolean | undefined,
  animatingClass: string,
  exitingClass: string,
  exitDuration: number = 1000,
): string | undefined => {
  const [animationClass, setAnimationClass] = useState('')
  const prevIsAiLoading = React.useRef<boolean | undefined>(undefined)

  useEffect(() => {
    if (shouldAnimate !== undefined) {
      if (prevIsAiLoading.current === true && shouldAnimate === false) {
        setAnimationClass(exitingClass)

        const timeout = setTimeout(() => {
          setAnimationClass('')
        }, exitDuration)

        return () => clearTimeout(timeout)
      }
      if (shouldAnimate === true) {
        setAnimationClass(animatingClass)
      }
    }
    prevIsAiLoading.current = shouldAnimate

    return undefined
  }, [shouldAnimate, animatingClass, exitingClass, exitDuration])

  return animationClass
}

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
        classNameOverride,
        isAiLoading !== undefined && styles.aiMoment,
        isAiLoading !== undefined && animationClass,
      )}
      {...restProps}
    >
      {children}
    </div>
  )
}

Well.displayName = 'Well'
