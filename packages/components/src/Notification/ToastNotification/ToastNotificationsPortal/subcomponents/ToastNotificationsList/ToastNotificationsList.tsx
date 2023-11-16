import React, { HTMLAttributes } from "react"
import { GenericNotification } from "~components/Notification/subcomponents/GenericNotification"
import { OverrideClassName } from "~types/OverrideClassName"
import { ToastNotificationOptions } from "../../../types"
import styles from "./ToastNotificationsList.module.scss"

export type ToastNotificationsListProps = {
  notifications: ToastNotificationOptions[]
  onHide: (notificationId: string) => void
} & OverrideClassName<HTMLAttributes<HTMLDivElement>>

export const ToastNotificationsList = ({
  notifications,
  onHide: defaultOnHide,
}: ToastNotificationsListProps): JSX.Element => (
  <div className={styles.list}>
    {notifications.map(
      ({ id, type, title, persistent, onHide, message, ...restProps }) => (
        <GenericNotification
          key={id}
          style="toast"
          type={type}
          title={title}
          persistent={persistent}
          onHide={(): void => {
            if (typeof onHide !== "undefined") {
              onHide()
            }
            defaultOnHide(id)
          }}
          {...restProps}
        >
          {message}
        </GenericNotification>
      )
    )}
  </div>
)

ToastNotificationsList.displayName = "ToastNotificationsList"
