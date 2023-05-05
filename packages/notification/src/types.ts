import { NotificationType } from "./components/GenericNotification"

type Modify<T, R> = Omit<T, keyof R> & R

export type ToastNotification = {
  id: string
  type: NotificationType
  title: string
  message: React.ReactNode
  autohideDelay?: "short" | "long"
  onHide?: () => void
  automationId?: string
  persistent?: boolean
  /**
   * **Deprecated:**
   * @deprecated Automatic hiding is an accessibility anti-pattern, violating WCAG '2.2 Enough Time' criteria. This prop will be removed in an upcoming breaking change.
   */
  autohide?: boolean
}

export type ToastNotificationWithOptionals = Modify<
  ToastNotification,
  {
    id?: string
    autohide?: boolean
  }
>

export type AddToastNotification = (
  notification: ToastNotificationWithOptionals
) => void

export type RemoveToastNotification = (notificationId: string) => void

export type ClearToastNotifications = () => void
