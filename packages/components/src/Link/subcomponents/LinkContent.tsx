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

const LinkIcon = ({
  size,
  isInline,
  icon,
}: {
  size: string
  isInline: boolean
  icon: JSX.Element
}): JSX.Element => {
  return (
    <span
      className={mergeClassNames(
        styles.icon,
        styles[size],
        isInline && styles.isInline,
        styles.negativeVerticalMargin,
      )}
    >
      {icon}
    </span>
  )
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
      {icon && iconPosition === 'start' && <LinkIcon size={size} isInline={isInline} icon={icon} />}
      <span
        className={mergeClassNames(
          styles[size],
          isInline && styles.isInline,
          styles.negativeVerticalMargin,
        )}
      >
        {children}
      </span>
      {icon && iconPosition === 'end' && <LinkIcon size={size} isInline={isInline} icon={icon} />}
    </span>
  )
}
