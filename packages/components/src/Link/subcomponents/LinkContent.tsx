import React, { type ReactNode } from 'react'
import { mergeClassNames } from '~components/utils/mergeClassNames'
import styles from '../Link.module.css'

export type LinkContentProps = {
  children: ReactNode
  icon?: JSX.Element
  iconPosition?: 'start' | 'end'
  isUnderlined: boolean
  isInline: boolean
}

const LinkIcon = ({ icon, isInline }: { icon: JSX.Element; isInline: boolean }): JSX.Element => (
  <span className={mergeClassNames(styles.icon, isInline && styles.isInline)}>{icon}</span>
)

export const LinkContent = ({
  children,
  icon,
  iconPosition,
  isUnderlined,
  isInline,
}: LinkContentProps): JSX.Element => {
  const iconPositionStyling = iconPosition === 'start' ? styles.iconStart : styles.iconEnd

  return (
    <span className={mergeClassNames(isUnderlined && styles.isUnderlined)}>
      {icon && iconPosition === 'start' && <LinkIcon icon={icon} isInline={isInline} />}
      <span className={mergeClassNames(isInline && styles.isInline, icon && iconPositionStyling)}>
        {children}
      </span>
      {icon && iconPosition === 'end' && <LinkIcon icon={icon} isInline={isInline} />}
    </span>
  )
}
