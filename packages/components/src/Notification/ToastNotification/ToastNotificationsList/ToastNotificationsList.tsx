import React from "react"
import { createPortal } from "react-dom"
import { useToastNotificationContext } from "../context/ToastNotificationContext"
import { ToastNotificationsMap } from "./subcomponents/ToastNotificationsMap"
import styles from "./ToastNotificationsList.module.scss"

export const ToastNotificationsList = (): JSX.Element => {
  const { notifications, removeToastNotification } =
    useToastNotificationContext()

  const containers = document.querySelectorAll(
    '[data-testid="toast-notifications-list"'
  )

  if (containers) {
    // Remove any duplicate instances
    // (eg. Storybook docs page has multiple stories each with their own context)
    containers.forEach((c, i) => {
      if (i === 0) return
      c.remove()
    })
  }

  return createPortal(
    <div
      data-testid="toast-notifications-list"
      role="status"
      className={styles.toastNotificationsList}
    >
      <ToastNotificationsMap
        notifications={notifications}
        onHide={removeToastNotification}
        container={containers[0]}
      />
    </div>,
    document.body
  )
}

ToastNotificationsList.displayName = "ToastNotificationsList"
