import classnames from "classnames"
import * as React from "react"

import styles from "./styles.scss"

export type FieldMessageStatus = "default" | "success" | "error"
export type FieldMessageProps = {
  id?: string
  automationId?: string
  message?: React.ReactNode
  status?: FieldMessageStatus
  reversed?: boolean
  position?: "top" | "bottom"
}

type FieldMessage = React.SFC<FieldMessageProps>

const FieldMessage: FieldMessage = ({
  id,
  automationId,
  message,
  status = "default",
  reversed = false,
  position = "bottom",
}) => (
  <div
    id={id}
    data-automation-id={automationId}
    className={classnames(styles.message, {
      [styles.reversed]: reversed,
      [styles.default]: status === "default",
      [styles.error]: status === "error",
      [styles.positionBottom]: position === "bottom",
      [styles.positionTop]: position === "top",
    })}
  >
    {message}
  </div>
)

export default FieldMessage
