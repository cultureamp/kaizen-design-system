import React, { type ReactNode } from 'react'
import { mergeClassNames } from '~components/utils/mergeClassNames'
import styles from '../Link.module.css'

export type LinkContentProps = {
  children: ReactNode
  icon?: JSX.Element
  iconPosition?: string
  isUnderlined: boolean
  isInline: boolean
}

export const LinkContent = ({
  children,
  icon,
  iconPosition,
  isUnderlined,
  isInline,
}: LinkContentProps): JSX.Element => {
  return (
    <span className={mergeClassNames(styles.linkContent, isUnderlined && styles.isUnderlined)}>
      {icon && iconPosition === 'start' && (
        <span className={mergeClassNames(styles.icon, isInline && styles.isInline)}>{icon}</span>
      )}
      <span className={mergeClassNames(isInline && styles.isInline, styles.negativeVerticalMargin)}>
        {children}
      </span>
      {icon && iconPosition === 'end' && (
        <span className={mergeClassNames(styles.icon, isInline && styles.isInline)}>{icon}</span>
      )}
    </span>
  )
}
