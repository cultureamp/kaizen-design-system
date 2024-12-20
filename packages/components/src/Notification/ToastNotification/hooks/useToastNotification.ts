import {
  useToastNotificationContext,
  type ToastNotificationContextValue,
} from '../context/ToastNotificationContext'

export const useToastNotification = (): ToastNotificationContextValue => {
  const context = useToastNotificationContext()
  return context
}
