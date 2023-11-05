import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { CautionWhiteIcon, ExclamationWhiteIcon } from "~components/Icon"
import { Text } from "~components/Text"
import { OverrideClassName } from "~types/OverrideClassName"
import styles from "./FieldMessage.module.scss"

export type FieldMessageStatus = "default" | "success" | "error" | "caution"

export type FieldMessageProps = {
  message?: React.ReactNode
  /** @default "default" */
  status?: FieldMessageStatus
  /** @default "bottom" */
  position?: "top" | "bottom"
  reversed?: boolean
} & OverrideClassName<HTMLAttributes<HTMLDivElement>>

export const FieldMessage = ({
  message,
  status = "default",
  position = "bottom",
  reversed = false,
  classNameOverride,
  ...restProps
}: FieldMessageProps): JSX.Element => {
  const textColor =
    status === "default" || status === "success"
      ? reversed
        ? "white-reduced-opacity"
        : "dark-reduced-opacity"
      : "dark"

  return (
    <div
      className={classnames(
        styles.message,
        styles[status],
        classNameOverride,
        reversed && styles.reversed,
        position === "bottom" && styles.positionBottom,
        position === "top" && styles.positionTop
      )}
      {...restProps}
    >
      {(status === "error" || status === "caution") && (
        <span className={styles.warningIcon}>
          {status === "error" ? (
            <ExclamationWhiteIcon
              role="img"
              inheritSize={false}
              aria-label={`${status} message`}
            />
          ) : (
            <CautionWhiteIcon
              role="img"
              inheritSize={false}
              aria-label={`${status} message`}
            />
          )}
        </span>
      )}
      <div className={styles.message}>
        <Text
          variant="small"
          tag={typeof message === "string" ? "p" : "div"}
          color={textColor}
        >
          {message}
        </Text>
      </div>
    </div>
  )
}

FieldMessage.displayName = "FieldMessage"
