import React, { type ReactNode } from 'react'
import { mergeClassNames } from '~components/utils/mergeClassNames'
import styles from '../Link.module.css'

export type LinkContentProps = {
  children: ReactNode
  icon?: JSX.Element
  iconPosition?: string
  underlined: boolean
  isInline: boolean
}

export const LinkContent = ({
  children,
  icon,
  iconPosition,
  underlined,
  isInline,
}: LinkContentProps): JSX.Element => {
  return (
    <span className={mergeClassNames(styles.link, underlined && styles.isUnderlined)}>
      {icon && iconPosition === 'start' && (
        <span className={mergeClassNames(styles.icon)}>{icon}</span>
      )}
      <span className={mergeClassNames(isInline && styles.isInline, styles.negativeVerticalMargin)}>
        {children}
      </span>
      {icon && iconPosition === 'end' && (
        <span className={mergeClassNames(styles.icon)}>{icon}</span>
      )}
    </span>
  )
}
