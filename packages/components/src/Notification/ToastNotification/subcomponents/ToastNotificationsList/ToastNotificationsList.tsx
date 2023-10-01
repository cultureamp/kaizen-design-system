import React, { HTMLAttributes } from "react"
import { OverrideClassName } from "~types/OverrideClassName"
import GenericNotification from "../../../GenericNotification"
import { RemoveToastNotification, ToastNotification } from "../../types"
import styles from "./ToastNotificationsList.module.scss"

export type ToastNotificationsListProps = {
  notifications: ToastNotification[]
  onHide: RemoveToastNotification
} & OverrideClassName<HTMLAttributes<HTMLDivElement>>

export const ToastNotificationsList = ({
  notifications,
  onHide,
}: ToastNotificationsListProps): JSX.Element => (
  <div className={styles.list}>
    {notifications.map(notification => (
      <GenericNotification
        key={notification.id}
        style="toast"
        type={notification.type}
        title={notification.title}
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

ToastNotificationsList.displayName = "ToastNotificationsList"
