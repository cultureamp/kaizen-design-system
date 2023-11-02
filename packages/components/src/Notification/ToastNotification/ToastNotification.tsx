import React, { useId } from "react"
import { addToastNotification } from "./subcomponents/ToastNotificationManager"
import { ToastNotificationWithOptionals } from "./types"

export type ToastNotificationProps = Omit<
  ToastNotificationWithOptionals,
  "message" | "persistent"
> & {
  /**
   * Removes the dismiss trigger. functions the same as `persistent` in `addToastNotification`. If this is true you will need to manage the removal of notifications manually.
   * @default false
   */
  hideCloseIcon?: boolean
  children: React.ReactNode
}

export const ToastNotification = ({
  id: propsId,
  hideCloseIcon = false,
  type,
  title,
  onHide,
  children,
  ...restProps
}: ToastNotificationProps): null => {
  const reactId = useId()
  const id = propsId || reactId
  const persistent = hideCloseIcon

  addToastNotification({
    id,
    type,
    title,
    message: children,
    persistent,
    onHide,
    ...restProps,
  })

  return null
}

ToastNotification.displayName = "ToastNotification"
