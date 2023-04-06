import React from "react"
import GenericNotification, {
  NotificationType,
} from "./components/GenericNotification"

export type GlobalNotificationProps = {
  type: NotificationType
  children: React.ReactNode
  onHide?: () => void
  automationId?: string
  persistent?: boolean
}

export const GlobalNotification = (
  props: GlobalNotificationProps
): JSX.Element => <GenericNotification style="global" {...props} />
GlobalNotification.defaultProps = {
  persistent: false,
}

GlobalNotification.displayName = "GlobalNotification"
