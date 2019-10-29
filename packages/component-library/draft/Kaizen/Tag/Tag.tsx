import { Icon } from "@cultureamp/kaizen-component-library"
import classNames from "classnames"
import * as React from "react"
const clearIcon = require("@cultureamp/kaizen-component-library/icons/clear.icon.svg")
  .default
const exclamationIcon = require("@cultureamp/kaizen-component-library/icons/exclamation.icon.svg")
  .default
const successIcon = require("@cultureamp/kaizen-component-library/icons/success.icon.svg")
  .default
const styles = require("./Tag.scss")

interface Props {
  readonly children: React.ReactNode
  readonly variant:
    | "default"
    | "sentimentPositive"
    | "sentimentNeutral"
    | "sentimentNegative"
    | "sentimentNone"
    | "validationPositive"
    | "validationInformative"
    | "validationNegative"
    | "validationCautionary"
  readonly size?: "medium" | "small"
  readonly inline?: boolean
  readonly dismissible?: boolean
  readonly onDismiss?: React.MouseEventHandler<HTMLSpanElement>
  readonly onMouseDown?: React.MouseEventHandler<HTMLSpanElement>
  readonly onMouseLeave?: React.MouseEventHandler<HTMLSpanElement>
  readonly truncationWidth?: number
}

const Tag = (props: Props) => {
  const {
    children,
    variant = "default",
    size = "medium",
    inline = false,
    dismissible = false,
    onDismiss,
    onMouseDown,
    onMouseLeave,
    truncationWidth,
  } = props

  const isTruncated = truncationWidth && truncationWidth > 0

  return (
    <div
      className={classNames(styles.root, {
        [styles.default]: variant === "default",
        [styles.sentimentPositive]: variant === "sentimentPositive",
        [styles.sentimentNeutral]: variant === "sentimentNeutral",
        [styles.sentimentNegative]: variant === "sentimentNegative",
        [styles.sentimentNone]: variant === "sentimentNone",
        [styles.validationPositive]: variant === "validationPositive",
        [styles.validationInformative]: variant === "validationInformative",
        [styles.validationNegative]: variant === "validationNegative",
        [styles.validationCautionary]: variant === "validationCautionary",
        [styles.medium]: size === "medium",
        [styles.small]: size === "small",
        [styles.inline]: inline,
        [styles.dismissible]: dismissible,
      })}
    >
      <>
        {size === "medium" &&
          (() => {
            if (variant === "validationPositive") {
              return (
                <span className={styles.validationIcon}>
                  <Icon icon={successIcon} role="presentation" />
                </span>
              )
            }
            if (
              variant === "validationInformative" ||
              variant === "validationNegative" ||
              variant === "validationCautionary"
            ) {
              return (
                <span className={styles.validationIcon}>
                  <Icon icon={exclamationIcon} role="presentation" />
                </span>
              )
            }
          })()}
      </>
      <span
        className={classNames(styles.textContent, {
          [styles.truncate]: isTruncated,
        })}
        style={{
          maxWidth: isTruncated ? truncationWidth : undefined,
        }}
      >
        {children}
      </span>
      <>
        {dismissible && (
          <span
            className={styles.dismissIcon}
            onClick={onDismiss}
            onMouseDown={onMouseDown}
            onMouseLeave={onMouseLeave}
          >
            <Icon icon={clearIcon} inheritSize role="img" title="Dismiss" />
          </span>
        )}
      </>
    </div>
  )
}

export default Tag
