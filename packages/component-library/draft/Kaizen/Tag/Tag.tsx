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

type Variant =
  | "default"
  | "sentimentPositive"
  | "sentimentNeutral"
  | "sentimentCautionary"
  | "sentimentNegative"
  | "sentimentNone"
  | "validationPositive"
  | "validationInformative"
  | "validationNegative"
  | "validationCautionary"
  | "statusLive"
  | "statusDraft"
  | "statusClosed"
  | "statusAction"

interface Props {
  readonly children: React.ReactNode
  readonly variant?: Variant
  readonly size?: "medium" | "small"
  readonly inline?: boolean
  readonly dismissible?: boolean
  readonly onDismiss?: React.MouseEventHandler<HTMLSpanElement>
  readonly onMouseDown?: React.MouseEventHandler<HTMLSpanElement>
  readonly onMouseLeave?: React.MouseEventHandler<HTMLSpanElement>
  readonly truncateWidth?: number
}

const successIconVariants: Variant[] = ["validationPositive"]

const exclamationIconVariants: Variant[] = [
  "validationInformative",
  "validationNegative",
  "validationCautionary",
]

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
    truncateWidth,
  } = props

  const isTruncated = truncateWidth && truncateWidth > 0
  const canShowIcon = size === "medium"

  return (
    <div
      className={classNames(styles.root, {
        [styles.default]: variant === "default",
        [styles.sentimentPositive]: variant === "sentimentPositive",
        [styles.sentimentNeutral]: variant === "sentimentNeutral",
        [styles.sentimentCautionary]: variant === "sentimentCautionary",
        [styles.sentimentNegative]: variant === "sentimentNegative",
        [styles.sentimentNone]: variant === "sentimentNone",
        [styles.validationPositive]: variant === "validationPositive",
        [styles.validationInformative]: variant === "validationInformative",
        [styles.validationNegative]: variant === "validationNegative",
        [styles.validationCautionary]: variant === "validationCautionary",
        [styles.statusLive]: variant === "statusLive",
        [styles.statusDraft]: variant === "statusDraft",
        [styles.statusClosed]: variant === "statusClosed",
        [styles.statusAction]: variant === "statusAction",
        [styles.medium]: size === "medium",
        [styles.small]: size === "small",
        [styles.inline]: inline,
        [styles.dismissible]: dismissible,
      })}
    >
      <div className={styles.layoutContainer}>
        {canShowIcon &&
          (() => {
            if (successIconVariants.includes(variant)) {
              return (
                <span className={styles.validationIcon}>
                  <Icon icon={successIcon} role="presentation" />
                </span>
              )
            }
            if (exclamationIconVariants.includes(variant)) {
              return (
                <span className={styles.validationIcon}>
                  <Icon icon={exclamationIcon} role="presentation" />
                </span>
              )
            }
          })()}
        <span
          className={classNames(styles.textContent, {
            [styles.truncate]: isTruncated,
          })}
          style={{
            maxWidth: isTruncated ? truncateWidth : undefined,
          }}
        >
          {children}
        </span>
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
        {variant === "statusLive" && (
          <span className={styles.pulse}>
            <span className={styles.pulseRing} />
          </span>
        )}
      </div>
    </div>
  )
}

export default Tag
