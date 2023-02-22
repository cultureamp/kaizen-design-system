import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import { Icon } from "@kaizen/component-library"
import cautionWhiteIcon from "@kaizen/component-library/icons/caution-white.icon.svg"
import errorWhiteIcon from "@kaizen/component-library/icons/exclamation-white.icon.svg"
import { Paragraph } from "@kaizen/typography"
import styles from "./FieldMessage.module.scss"

const ErrorIcon = (): JSX.Element => (
  <span className={styles.warningIcon}>
    <Icon
      icon={errorWhiteIcon}
      title="Error message"
      role="img"
      inheritSize={false}
    />
  </span>
)
const CautionIcon = (): JSX.Element => (
  <span className={styles.warningIcon}>
    <Icon
      icon={cautionWhiteIcon}
      title="Cautionary message"
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

export const FieldMessage = ({
  message,
  status = "default",
  position = "bottom",
  reversed = false,
  classNameOverride,
  automationId,
  ...restProps
}: FieldMessageProps): JSX.Element => {
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
      {status === "error" && <ErrorIcon />}
      {status === "caution" && <CautionIcon />}
      <div className={styles.message}>
        <Paragraph variant="small" color={textColor}>
          {message}
        </Paragraph>
      </div>
    </div>
  )
}

FieldMessage.displayName = "FieldMessage"
