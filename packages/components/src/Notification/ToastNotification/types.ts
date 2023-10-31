import { DataAttributes } from "~types/DataAttributes"
import { NotificationType } from "../types"

type Modify<T, R> = Omit<T, keyof R> & R

export type ToastNotification = {
  id: string
  type: NotificationType
  title: string
  message: React.ReactNode
  onHide?: () => void
  /**
   * Removes the dismiss trigger. If this is true you will need to manage the removal of notifications manually.
   * @default false
   */
  persistent?: boolean
} & DataAttributes

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
