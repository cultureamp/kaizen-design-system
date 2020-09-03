import * as React from "react"
import uuid from "uuid/v4"
import createNotificationManager from "./ToastNotificationManager"
import { NotificationType } from "./components/GenericNotification"

const notificationManager = createNotificationManager()

type Props = {
  id?: string
  type: NotificationType
  title: string
  children: React.ReactNode
  autohide: boolean
  autohideDelay?: "short" | "long"
  hideCloseIcon: boolean
  onHide?: () => void
  automationId?: string
}

const ToastNotification = ({ id, hideCloseIcon, ...otherProps }: Props) => {
  const [localID] = React.useState(id || uuid())
  const persistent = otherProps.autohide && hideCloseIcon
  notificationManager.add({
    id: localID,
    type: otherProps.type,
    title: otherProps.title,
    automationId: otherProps.automationId,
    autohide: otherProps.autohide,
    autohideDelay: otherProps.autohideDelay,
    children: otherProps.children,
    persistent,
  })

  return null
}

ToastNotification.defaultProps = {
  autohide: false,
  hideCloseIcon: false,
  autohideDelay: "short",
}

export default ToastNotification
