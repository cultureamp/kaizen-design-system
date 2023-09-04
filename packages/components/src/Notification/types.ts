export type NotificationType =
  | "positive"
  | "informative"
  | "cautionary"
  | "negative"
  | "security"

export type ToastNotification = {
  id: string
  type: NotificationType
  title: string
  message: React.ReactNode
  onHide?: () => void
  persistent?: boolean
}

export type ToastNotificationWithOptionals = Omit<ToastNotification, "id"> & {
  id?: string | undefined
}

export type AddToastNotification = (
  notification: ToastNotificationWithOptionals
) => void

export type RemoveToastNotification = (notificationId: string) => void

export type ClearToastNotifications = () => void
