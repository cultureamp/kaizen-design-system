import React, { useEffect, useId } from "react"
import { useToastNotificationContext } from "../context/ToastNotificationContext"
import { ToastNotificationOptions } from "../types"

export type ToastNotificationProps = Omit<
  ToastNotificationOptions,
  "id" | "message" | "persistent"
> & {
  children: React.ReactNode
  id?: string
  /**
   * Removes the dismiss trigger. Functions the same as `persistent` in `addToastNotification`.
   * If this is true you will need to manage the removal of notifications manually.
   * @default false
   */
  hideCloseIcon?: boolean
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
  const { addToastNotification } = useToastNotificationContext()
  const persistent = hideCloseIcon

  useEffect(() => {
    addToastNotification({
      id,
      type,
      title,
      message: children,
      persistent,
      onHide,
      ...restProps,
    })
  }, [])

  return null
}

ToastNotification.displayName = "ToastNotification"
