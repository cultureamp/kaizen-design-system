import React, { useId } from "react"
import { addToastNotification } from "./subcomponents/ToastNotificationManager"
import { ToastNotificationWithOptionals } from "./types"

export type ToastNotificationProps = Omit<
  ToastNotificationWithOptionals,
  "message"
> & {
  hideCloseIcon?: boolean
  children: React.ReactNode
}

export const ToastNotification = ({
  id,
  hideCloseIcon = false,
  type,
  title,
  onHide,
  children,
}: ToastNotificationProps): null => {
  const localID = id || useId()
  const persistent = hideCloseIcon

  addToastNotification({
    id: localID,
    type,
    title,
    message: children,
    persistent,
    onHide,
  })

  return null
}

ToastNotification.displayName = "ToastNotification"
