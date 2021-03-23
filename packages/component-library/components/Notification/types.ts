import { NotificationType } from "./components/GenericNotification"

type Modify<T, R> = Omit<T, keyof R> & R

export type ToastNotification = {
  id: string
  type: NotificationType
  title: string
  message: React.ReactNode
  autohide: boolean
  autohideDelay?: "short" | "long"
  onHide?: () => void
  automationId?: string
  persistent?: boolean
}

export type ToastNotificationWithOptionalId = Modify<
  ToastNotification,
  { id?: string }
>

export type AddToastNotification = (
  notification: ToastNotificationWithOptionalId
) => void

export type RemoveToastNotification = (notificationId: string) => void

export type ClearToastNotifications = () => void
