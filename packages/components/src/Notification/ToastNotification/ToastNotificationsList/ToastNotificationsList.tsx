import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useToastNotificationContext } from '../context/ToastNotificationContext'
import { ToastNotificationsMap } from './subcomponents/ToastNotificationsMap'
import styles from './ToastNotificationsList.module.scss'

export const ToastNotificationsList = (): JSX.Element => {
  const { notifications, removeToastNotification } = useToastNotificationContext()
  const [toastContainer, setToastContainer] = useState<Element | null>(null)

  useEffect(() => {
    const containers = document.querySelectorAll('[data-testid="toast-notifications-list"')
    if (toastContainer && containers.length === 1) {
      return
    }

    if (containers) {
      // Remove any duplicate instances
      // (eg. Storybook docs page has multiple stories each with their own context)
      containers.forEach((c, i) => {
        if (i === 0) {
          setToastContainer(c)
          return
        }
        c.remove()
      })
    }
  }, [toastContainer])

  return createPortal(
    <div
      data-testid="toast-notifications-list"
      role="status"
      className={styles.toastNotificationsList}
    >
      <ToastNotificationsMap
        notifications={notifications}
        onHide={removeToastNotification}
        container={toastContainer}
      />
    </div>,
    document.body,
  )
}

ToastNotificationsList.displayName = 'ToastNotificationsList'
