import React from 'react'
import { NotificationType, NotificationVariant } from '~components/Notification/types'
import { Icon } from '~components/__rc__'
import styles from './NotificationIcon.module.css'

const NotificationIcon = ({ name }: { name: string }): JSX.Element => (
  <Icon name={name} isFilled isPresentational className={styles.notificationIcon} />
)

export type NotificationIconTypeProps = {
  type: NotificationType
}

export const NotificationIconType = ({ type }: NotificationIconTypeProps): JSX.Element => {
  switch (type) {
    case 'positive':
      return <NotificationIcon name="check_circle" />
    case 'negative':
      return <NotificationIcon name="error" />
    case 'cautionary':
      return <NotificationIcon name="warning" />
    case 'informative':
      return <NotificationIcon name="info" />
    case 'security':
      return <NotificationIcon name="privacy_tip" />
    default:
      return <NotificationIcon name="info" />
  }
}

NotificationIconType.displayName = 'NotificationIconType'

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
