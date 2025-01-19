import React, { type ReactNode } from 'react'
import { mergeClassNames } from '~components/utils/mergeClassNames'
import styles from '../Link.module.css'

export type LinkContentProps = {
  children: ReactNode
  icon?: JSX.Element
  iconPosition?: string
  underlined: boolean
  isInline: boolean
  size: string
}

export const LinkContent = ({
  children,
  icon,
  iconPosition,
  underlined,
  size,
  isInline,
}: LinkContentProps): JSX.Element => {
  return (
    <span
      className={mergeClassNames(
        styles.link,
        underlined && styles.isUnderlined,
        styles[size],
        isInline && styles.isInline,
      )}
    >
      {icon && iconPosition === 'start' && (
        <span className={mergeClassNames(styles.icon, styles[size])}>{icon}</span>
      )}
      <span className={mergeClassNames(styles[size])}> {children} </span>
      {icon && iconPosition === 'end' && (
        <span className={mergeClassNames(styles.icon, styles[size])}>{icon}</span>
      )}
    </span>
  )
}
