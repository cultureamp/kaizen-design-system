import { NotificationType } from "./components/GenericNotification"

export type ToastNotification = {
  id: string
  type: NotificationType
  title: string
  children: React.ReactNode
  autohide: boolean
  autohideDelay?: "short" | "long"
  onHide?: () => void
  automationId?: string
  persistent?: boolean
}

export type AddToastNotification = (notification: ToastNotification) => void

export type RemoveToastNotification = (notificationId: string) => void

export type ClearToastNotifications = () => void
