import React, { useEffect, useState } from 'react'
import { useToastNotificationContext } from '../context/ToastNotificationContext'
import { ToastNotificationsMap } from './subcomponents/ToastNotificationsMap'
import styles from './ToastNotificationsList.module.scss'

export const ToastNotificationsList = (): JSX.Element => {
  const { notifications, removeToastNotification } = useToastNotificationContext()
  const [toastContainer, setToastContainer] = useState<Element | null>(null)

  useEffect(() => {
    let container = document.querySelector('[data-testid="toast-notifications-list"]')
    if (!container) {
      container = document.createElement('div')
      container.setAttribute('data-testid', 'toast-notifications-list')
      container.setAttribute('role', 'status')
      container.className = styles.toastNotificationsList
      document.body.appendChild(container)
    }
    setToastContainer(container)
  }, [])

  return toastContainer ? (
    <ToastNotificationsMap
      notifications={notifications}
      onHide={removeToastNotification}
      container={toastContainer}
    />
  ) : (
    <></>
  )
}

ToastNotificationsList.displayName = 'ToastNotificationsList'
