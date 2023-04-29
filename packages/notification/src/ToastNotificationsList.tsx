import React, { useEffect, useState } from "react"
import GenericNotification from "./components/GenericNotification"
import { RemoveToastNotification, ToastNotification } from "./types"
import styles from "./ToastNotificationsList.module.scss"

export const ToastNotificationsList = ({
  notifications,
  onHide,
}: {
  notifications: ToastNotification[]
  onHide: RemoveToastNotification
}): JSX.Element => (
  <div className={styles.list}>
    {notifications.map(notification => (
      <GenericNotification
        key={notification.id}
        style="toast"
        type={notification.type}
        title={notification.title}
        autohide={notification.autohide}
        autohideDelay={notification.autohideDelay}
        automationId={notification.automationId}
        persistent={notification.persistent}
        onHide={(): void => {
          if (typeof notification.onHide !== "undefined") {
            notification.onHide()
          }
          onHide(notification.id)
        }}
      >
        {notification.message}
      </GenericNotification>
    ))}
  </div>
)

export const ToastNotificationsListContainer = ({
  removeToastNotification,
  registerSetNotificationsCallback,
}: {
  removeToastNotification: RemoveToastNotification
  registerSetNotificationsCallback: (
    callback: React.Dispatch<React.SetStateAction<ToastNotification[]>>
  ) => void
}): JSX.Element => {
  const [notifications, setNotifications] = useState<ToastNotification[]>([])

  // Pass the local setNotifications function back up to the caller
  // via the registerSetNotificationsCallback
  useEffect(() => {
    registerSetNotificationsCallback(setNotifications)
  }, [setNotifications])

  return (
    <ToastNotificationsList
      notifications={notifications}
      onHide={removeToastNotification}
    />
  )
}
