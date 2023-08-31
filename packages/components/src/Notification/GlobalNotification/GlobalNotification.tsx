import React from "react"
import { NotificationType } from "~components/Notification/type"
import GenericNotification from "../subcomponents/GenericNotification"

export type GlobalNotificationProps = {
  type: NotificationType
  children: React.ReactNode
  onHide?: () => void
  persistent?: boolean
}

export const GlobalNotification = ({
  persistent = false,
  ...props
}: GlobalNotificationProps): JSX.Element => (
  <GenericNotification persistent={persistent} style="global" {...props} />
)

GlobalNotification.displayName = "GlobalNotification"
