import * as React from "react"
import GenericNotification, {
  NotificationType,
} from "./components/GenericNotification"

type Props = {
  type: NotificationType
  children: React.ReactNode
  onHide?: () => void
  automationId?: string
}

const GlobalNotification = (props: Props) => (
  <GenericNotification style="global" persistent={false} {...props} />
)

export default GlobalNotification
