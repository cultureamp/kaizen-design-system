import React from "react"
import { v4 } from "uuid"
import { addToastNotification } from "./ToastNotificationManager"
import { ToastNotificationWithOptionals } from "./types"

export type ToastNotificationProps = Omit<
  ToastNotificationWithOptionals,
  "message"
> & {
  hideCloseIcon?: boolean
  children: React.ReactNode
}

/**
 * {@link https://cultureamp.design/components/toast-notification/ Guidance} |
 * {@link https://cultureamp.design/storybook/?path=/docs/components-notification-toast-notification--cautionary Storybook}
 */
export const ToastNotification = ({
  id,
  hideCloseIcon = false,
  autohide = false,
  autohideDelay = "long",
  ...otherProps
}: ToastNotificationProps): null => {
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
    onHide: otherProps.onHide,
  })

  return null
}

ToastNotification.displayName = "ToastNotification"
