import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import { Icon } from "@kaizen/component-library"
import cautionWhiteIcon from "@kaizen/component-library/icons/caution-white.icon.svg"
import errorWhiteIcon from "@kaizen/component-library/icons/exclamation-white.icon.svg"
import { Paragraph } from "@kaizen/typography"
import styles from "./FieldMessage.module.scss"

function capitalize(word: string): string {
  return word[0].toUpperCase() + word.slice(1)
}

export type FieldMessageStatus = "default" | "success" | "error" | "caution"

export interface FieldMessageProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  message?: React.ReactNode
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
      {(status === "error" || status === "caution") && (
        <span className={styles.warningIcon}>
          <Icon
            icon={status === "error" ? errorWhiteIcon : cautionWhiteIcon}
            title={`${capitalize(status)} message`}
            role="img"
            inheritSize={false}
          />
        </span>
      )}
      <div className={styles.message}>
        {typeof message === "string" ? (
          <Paragraph variant="small" color={textColor}>
            {message}
          </Paragraph>
        ) : (
          <Paragraph tag="div" variant="small" color={textColor}>
            {message}
          </Paragraph>
        )}
      </div>
    </div>
  )
}

FieldMessage.displayName = "FieldMessage"
