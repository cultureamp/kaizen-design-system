import React, { type HTMLAttributes } from 'react'
import { createPortal } from 'react-dom'
import { GenericNotification } from '~components/Notification/subcomponents/GenericNotification'
import { type OverrideClassName } from '~components/types/OverrideClassName'
import { type ToastNotificationObj } from '../../../types'

export type ToastNotificationsMapProps = {
  notifications: ToastNotificationObj[]
  onHide: (notificationId: string) => void
  container: Element | null
} & OverrideClassName<HTMLAttributes<HTMLDivElement>>

export const ToastNotificationsMap = ({
  notifications,
  onHide: defaultOnHide,
  container,
}: ToastNotificationsMapProps): JSX.Element | null => {
  if (!container) return null

  // To consolidate all notifications into a single list when there are multiple contexts,
  // this list cannot render with a container (must be portalled into one).
  return createPortal(
    <>
      {notifications.map(({ id, title, persistent, onHide, message, ...restProps }) => (
        <GenericNotification
          key={id}
          style="toast"
          title={title}
          persistent={persistent}
          onHide={(): void => {
            if (typeof onHide !== 'undefined') {
              onHide()
            }
            defaultOnHide(id)
          }}
          {...restProps}
        >
          {message}
        </GenericNotification>
      ))}
    </>,
    container,
  )
}

ToastNotificationsMap.displayName = 'ToastNotificationsMap'
