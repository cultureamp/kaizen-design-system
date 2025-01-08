import React, { useEffect, useState } from 'react'
import { useToastNotificationContext } from '../context/ToastNotificationContext'
import { ToastNotificationsMap } from './subcomponents/ToastNotificationsMap'
import styles from './ToastNotificationsList.module.scss'

const toastNotificationListId = 'toast-notifications-list'

export const ToastNotificationsList = (): JSX.Element => {
  const { notifications, removeToastNotification } = useToastNotificationContext()
  const [toastContainer, setToastContainer] = useState<Element | null>(null)

  useEffect(() => {
    // this is to ensure that the container is created only once. Regardless of how many KaizenProvider is set up, they will also reuse the same container.
    let container = document.querySelector(`[id="${toastNotificationListId}"]`)
    if (!container) {
      container = document.createElement('div')
      container.setAttribute('id', toastNotificationListId)
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
