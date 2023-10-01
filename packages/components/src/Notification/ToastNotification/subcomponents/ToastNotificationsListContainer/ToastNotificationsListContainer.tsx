import React, { useEffect, useState } from "react"
import { RemoveToastNotification, ToastNotification } from "../../types"
import { ToastNotificationsList } from "../ToastNotificationsList"

export type ToastNotificationsListContainerProps = {
  removeToastNotification: RemoveToastNotification
  registerSetNotificationsCallback: (
    callback: React.Dispatch<React.SetStateAction<ToastNotification[]>>
  ) => void
}
export const ToastNotificationsListContainer = ({
  removeToastNotification,
  registerSetNotificationsCallback,
}: ToastNotificationsListContainerProps): JSX.Element => {
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

ToastNotificationsList.displayName = "ToastNotificationsListContainer"
