import * as React from "react"
import uuid from "uuid/v4"
import createNotificationManager from "./ToastNotificationManager"
import { NotificationType } from "./components/GenericNotification"

const notificationManager = createNotificationManager()

type Props = {
  type: NotificationType
  title: string
  children: React.ReactNode
  autohide: boolean
  autohideDelay?: "short" | "long"
  hideCloseIcon: boolean
  onHide?: () => void
  automationId?: string
}

const ToastNotification = ({ hideCloseIcon, ...otherProps }: Props) => {
  const [id] = React.useState(uuid())
  const persistent = otherProps.autohide && hideCloseIcon
  notificationManager.add({
    id,
    type: otherProps.type,
    title: otherProps.title,
    automationId: otherProps.automationId,
    autohide: otherProps.autohide,
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
