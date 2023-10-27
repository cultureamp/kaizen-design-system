import { HTMLAttributes } from "react"
import { NotificationType } from "../types"

type Modify<T, R> = Omit<T, keyof R> & R

export type ToastNotification = {
  id: string
  type: NotificationType
  title: string
  message: React.ReactNode
  onHide?: () => void
  /**
   * If this is true you will need to manage a way to remove the notification
   * @default false
   */
  persistent?: boolean
} & {
  [key: `data-${string}`]: unknown
}

export type ToastNotificationWithOptionals = Modify<
  ToastNotification,
  {
    id?: string
  }
>

export type AddToastNotification = (
  notification: ToastNotificationWithOptionals
) => void

export type RemoveToastNotification = (notificationId: string) => void

export type ClearToastNotifications = () => void
