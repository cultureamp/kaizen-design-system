import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import { Icon } from "@kaizen/component-library"
import exclamationWhiteIcon from "@kaizen/component-library/icons/exclamation-white.icon.svg"
import { Paragraph } from "@kaizen/typography"
import styles from "./styles.scss"

const WarningIcon: React.VFC = () => (
  <span className={styles.warningIcon}>
    <Icon
      icon={exclamationWhiteIcon}
      title="Error message"
      role="img"
      inheritSize={false}
    />
  </span>
)

export type FieldMessageStatus = "default" | "success" | "error" | "caution"

export interface FieldMessageProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  message?: string | React.ReactNode
  status?: FieldMessageStatus
  position?: "top" | "bottom"
  reversed?: boolean
  /**
   * **Deprecated:** Use test id compatible with your testing library (eg. `data-testid`).
   * @deprecated
   */
  automationId?: string
}

export const FieldMessage: React.VFC<FieldMessageProps> = ({
  message,
  status = "default",
  position = "bottom",
  reversed = false,
  classNameOverride,
  automationId,
  ...restProps
}) => {
  const textColor =
    status === "default"
      ? reversed
        ? "white-reduced-opacity"
        : "dark-reduced-opacity"
      : "dark"

  return (
    <div
      data-automation-id={automationId}
      className={classnames(styles.message, styles[status], classNameOverride, {
        [styles.reversed]: reversed,
        [styles.positionBottom]: position === "bottom",
        [styles.positionTop]: position === "top",
      })}
      {...restProps}
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

FieldMessage.displayName = "FieldMessage"
