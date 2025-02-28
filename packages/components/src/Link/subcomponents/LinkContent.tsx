import React, { type ReactNode } from 'react'
import { mergeClassNames } from '~components/utils/mergeClassNames'
import styles from '../Link.module.css'

export type LinkContentProps = {
  children: ReactNode
  icon?: JSX.Element
  iconPosition?: 'start' | 'end'
  isUnderlined: boolean
}

const LinkIcon = ({ icon }: { icon: JSX.Element }): JSX.Element => (
  <span className={styles.icon}>{icon}</span>
)

export const LinkContent = ({
  children,
  icon,
  iconPosition,
  isUnderlined,
}: LinkContentProps): JSX.Element => {
  const iconPositionStyling = iconPosition === 'start' ? styles.iconStart : styles.iconEnd

  return (
    <span className={mergeClassNames(styles.linkContent, isUnderlined && styles.isUnderlined)}>
      {icon && iconPosition === 'start' && <LinkIcon icon={icon} />}
      <span className={mergeClassNames(icon && iconPositionStyling)}>{children}</span>
      {icon && iconPosition === 'end' && <LinkIcon icon={icon} />}
    </span>
  )
}
