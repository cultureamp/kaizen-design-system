import {
  ToastNotificationContextValue,
  useToastNotificationContext,
} from "../context/ToastNotificationContext"

export const useToastNotification = (): ToastNotificationContextValue => {
  const context = useToastNotificationContext()
  return context
}
