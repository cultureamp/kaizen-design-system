import * as React from "react"
import { Icon, Paragraph } from "@kaizen/component-library"
import exclamationWhiteIcon from "@kaizen/component-library/icons/exclamation-white.icon.svg"
import classnames from "classnames"
import styles from "./styles.scss"

export type FieldMessageStatus = "default" | "success" | "error" | "caution"

export type FieldMessageProps = {
  id?: string
  automationId?: string
  message?: string | React.ReactNode
  status?: FieldMessageStatus
  reversed?: boolean
  position?: "top" | "bottom"
}

type FieldMessage = React.FunctionComponent<FieldMessageProps>

type WarningIconProps = {
  isReversed: boolean
}

const WarningIcon: React.FunctionComponent<WarningIconProps> = () => (
  <span className={styles.warningIcon}>
    <Icon
      icon={exclamationWhiteIcon}
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
  const textColor =
    status === "default"
      ? reversed
        ? "white-reduced-opacity"
        : "dark-reduced-opacity"
      : "dark"
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
      {(status === "error" || status === "caution") && <WarningIcon />}
      <div className={styles.message}>
        <Paragraph variant="small" color={textColor}>
          {message}
        </Paragraph>
      </div>
    </div>
  )
}

export default FieldMessage
