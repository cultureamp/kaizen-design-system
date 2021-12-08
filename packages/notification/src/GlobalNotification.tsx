import * as React from "react"
import GenericNotification, {
  NotificationType,
} from "./components/GenericNotification"

type Props = {
  type: NotificationType
  children: React.ReactNode
  onHide?: () => void
  automationId?: string
  persistent?: boolean
}

const GlobalNotification = (props: Props) => (
  <GenericNotification style="global" {...props} />
)
GlobalNotification.defaultProps = {
  persistent: false,
}

export default GlobalNotification
