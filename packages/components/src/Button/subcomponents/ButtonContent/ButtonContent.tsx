import React, { type HTMLAttributes } from 'react'
import classNames from 'classnames'
import { VisuallyHidden } from '~components/VisuallyHidden'
import { type ButtonProps } from '../../Button'
import styles from './ButtonContent.module.css'

type ButtonContentProps = {
  size?: ButtonProps['size']
  icon?: ButtonProps['icon']
  iconPosition?: ButtonProps['iconPosition']
  hasHiddenLabel?: ButtonProps['hasHiddenLabel']
} & HTMLAttributes<HTMLSpanElement>

/** Renders the inner content of the button, handling icon and label visibility */
export const ButtonContent = ({
  children,
  hasHiddenLabel,
  size = 'medium',
  icon,
  iconPosition = 'start',
  className,
  ...restProps
}: ButtonContentProps): JSX.Element => (
  <span className={classNames(className, styles.buttonContent, styles[size])} {...restProps}>
    {icon && iconPosition === 'start' && <span className={styles.buttonIcon}>{icon}</span>}
    {hasHiddenLabel ? (
      <VisuallyHidden>{children}</VisuallyHidden>
    ) : (
      <span className={styles.buttonLabel}>{children}</span>
    )}
    {icon && iconPosition === 'end' && <span className={styles.buttonIcon}>{icon}</span>}
  </span>
)
