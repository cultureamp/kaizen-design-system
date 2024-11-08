import { DataAttributes } from "~components/types/DataAttributes"
import {
  GenericNotificationType,
  GenericNotificationVariant,
} from "../subcomponents/GenericNotification"

export type ToastNotificationObjBase = {
  id: string
  title: string
  message: React.ReactNode
  onHide?: () => void
  /**
   * Removes the dismiss trigger. If this is true you will need to manage the removal of notifications manually.
   * @default false
   */
  persistent?: boolean
} & DataAttributes

export type ToastNotificationObj = ToastNotificationObjBase &
  (GenericNotificationType | GenericNotificationVariant)
