import { DataAttributes } from "~types/DataAttributes"
import { NotificationType } from "../types"

export type ToastNotificationOptions = {
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
