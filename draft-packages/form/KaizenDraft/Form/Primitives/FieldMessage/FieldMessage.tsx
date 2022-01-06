import classnames from "classnames"
import * as React from "react"
import exclamationIcon from "@kaizen/component-library/icons/exclamation.icon.svg"

import { Icon, Paragraph } from "@kaizen/component-library"
import styles from "./styles.scss"

export type FieldMessageStatus = "default" | "success" | "error" | "caution"
export type FieldMessageProps = {
  id?: string
  automationId?: string
  message?: React.ReactNode
  status?: FieldMessageStatus
  reversed?: boolean
  position?: "top" | "bottom"
}

type FieldMessage = React.SFC<FieldMessageProps>

const warningIcon = (
  <span className={styles.warningIcon}>
    <Icon
      icon={exclamationIcon}
      title="Error message"
      role="img"
      inheritSize={false}
    />
  </span>
)

const FieldMessage: FieldMessage = ({
  id,
  automationId,
  message,
  status = "default",
  reversed = false,
  position = "bottom",
}) => {
  const textColor = reversed ? "white" : "dark"
  return (
    <div
      id={id}
      data-automation-id={automationId}
      className={classnames(styles.message, styles[status], {
        [styles.reversed]: reversed,
        [styles.positionBottom]: position === "bottom",
        [styles.positionTop]: position === "top",
      })}
    >
      {(status === "error" || status === "caution") && warningIcon}
      <div className={styles.message}>
        <Paragraph variant="small" color={textColor}>
          {message}
        </Paragraph>
      </div>
    </div>
  )
}

export default FieldMessage
