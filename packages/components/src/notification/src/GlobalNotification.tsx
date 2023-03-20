import * as React from "react"
import GenericNotification, {
  NotificationType,
} from "./components/GenericNotification"

type GlobalNotificationProps = {
  type: NotificationType
  children: React.ReactNode
  onHide?: () => void
  automationId?: string
  persistent?: boolean
}

const GlobalNotification = (props: GlobalNotificationProps): JSX.Element => (
  <GenericNotification style="global" {...props} />
)
GlobalNotification.defaultProps = {
  persistent: false,
}

export default GlobalNotification
