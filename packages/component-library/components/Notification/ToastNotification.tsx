import * as React from "react"
import store from "../../state"
import useGlobalUIState from "../../state/useGlobalUIState"
import GenericNotification, {
  NotificationType,
} from "./components/GenericNotification"

type Props = {
  type: NotificationType
  title: string
  children: React.ReactNode
  autohide: boolean
  autohideDelay?: "short" | "long"
  hideCloseIcon: boolean
  onHide?: () => void
  automationId?: string
}

const ToastNotification = ({ hideCloseIcon, ...otherProps }: Props) => {
  const [state] = useGlobalUIState()
  const persistent = otherProps.autohide && hideCloseIcon
  const opacity = state.navigationBar.menuOpen ? 0 : 1

  return (
    <div
      style={{
        position: "fixed",
        right: 6,
        top: 70,
        opacity,
        transition: "opacity 200ms",
      }}
    >
      <GenericNotification
        style="toast"
        persistent={persistent}
        {...otherProps}
      />
    </div>
  )
}

ToastNotification.defaultProps = {
  autohide: false,
  hideCloseIcon: false,
  autohideDelay: "short",
}

export default ToastNotification
