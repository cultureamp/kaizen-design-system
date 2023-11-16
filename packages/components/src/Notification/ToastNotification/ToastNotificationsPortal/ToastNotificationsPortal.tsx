import React from "react"
import { createPortal } from "react-dom"
import { useToastNotificationContext } from "../context/ToastNotificationContext"
import { ToastNotificationsList } from "./subcomponents/ToastNotificationsList"

export const ToastNotificationsPortal = (): JSX.Element => {
  const { notifications, removeToastNotification } =
    useToastNotificationContext()

  return createPortal(
    <div role="status" data-testid="toast-notification-manager-portal">
      <ToastNotificationsList
        notifications={notifications}
        onHide={removeToastNotification}
      />
    </div>,
    document.body
  )
}

ToastNotificationsPortal.displayName = "ToastNotificationsPortal"
