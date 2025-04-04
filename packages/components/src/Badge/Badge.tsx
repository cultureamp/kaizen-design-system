import React, {
  useLayoutEffect,
  useState,
  type HTMLAttributes,
  type PropsWithChildren,
} from 'react'
import classnames from 'classnames'
import { type OverrideClassName } from '~components/types/OverrideClassName'
import styles from './Badge.module.css'

type BadgeCommonProps = PropsWithChildren<{
  /**
   * The "dark" variant is no longer in the UI kit
   */
  variant?: 'default' | 'active' | 'dark'
  /**
   * renders reversed colors. Use on purple background
   */
  reversed?: boolean
  /**
   * Supports "small" and "large" sizes - defaults to "small"
   */
  size?: 'small' | 'large'
}> &
  OverrideClassName<HTMLAttributes<HTMLSpanElement>>

type DotProps = Omit<BadgeCommonProps, 'variant'> & {
  children?: never
  variant: 'dot'
}

export type BadgeProps = BadgeCommonProps | DotProps

/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3064857333/Badge Guidance} |
 * {@link https://cultureamp.design/?path=/docs/components-badge--docs Storybook}
 */
export const Badge = ({
  children,
  variant = 'default',
  reversed = false,
  size = 'small',
  classNameOverride,
  ...restProps
}: BadgeProps): JSX.Element => (
  <span
    className={classnames(
      styles.badge,
      styles[variant],
      classNameOverride,
      reversed && styles.reversed,
      size === 'large' && styles.large,
    )}
    {...restProps}
  >
    {variant !== 'dot' && children}
  </span>
)

export const BadgeAnimated = (props: BadgeProps): JSX.Element => {
  const [isFocused, setIsFocused] = useState(false)

  useLayoutEffect(() => {
    setIsFocused(true)
    setTimeout(() => {
      setIsFocused(false)
    }, 150)
  }, [props.children])

  return (
    <span className={classnames(styles.animation, isFocused && styles.animationOn)}>
      <Badge {...props} />
    </span>
  )
}

Badge.displayName = 'Badge'
