import * as React from "react"
import { v4 } from "uuid"
import { addToastNotification } from "./ToastNotificationManager"
import { ToastNotificationWithOptionals } from "./types"

type Props = Omit<ToastNotificationWithOptionals, "message"> & {
  hideCloseIcon?: boolean
  children: React.ReactNode
}

const ToastNotification = ({
  id,
  hideCloseIcon = false,
  autohide = true,
  autohideDelay = "short",
  ...otherProps
}: Props) => {
  const [localID] = React.useState(id || v4())
  const persistent = autohide && hideCloseIcon

  addToastNotification({
    id: localID,
    type: otherProps.type,
    title: otherProps.title,
    automationId: otherProps.automationId,
    autohide,
    autohideDelay,
    message: otherProps.children,
    persistent,
  })

  return null
}

export default ToastNotification
