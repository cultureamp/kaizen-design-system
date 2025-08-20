import React from 'react'
import { Icon } from '~components/Icon'
import { type NotificationVariant } from '~components/Notification/types'
import styles from './NotificationIcon.module.css'

const NotificationIcon = ({ name }: { name: string }): JSX.Element => (
  <Icon name={name} isFilled isPresentational className={styles.notificationIcon} />
)

export type NotificationIconTypeProps = {
  type: NotificationVariant
}

export type NotificationIconVariantProps = {
  variant: NotificationVariant
}

export const NotificationIconVariant = ({ variant }: NotificationIconVariantProps): JSX.Element => {
  switch (variant) {
    case 'success':
      return <NotificationIcon name="check_circle" />
    case 'warning':
      return <NotificationIcon name="error" />
    case 'cautionary':
      return <NotificationIcon name="warning" />
    case 'informative':
      return <NotificationIcon name="info" />
    case 'security':
      return <NotificationIcon name="privacy_tip" />
  }
}

NotificationIconVariant.displayName = 'NotificationIconVariant'
