import { Icon } from "@kaizen/component-library"
import classNames from "classnames"
import * as React from "react"
import clearIcon from "@kaizen/component-library/icons/clear.icon.svg"
import exclamationIcon from "@kaizen/component-library/icons/exclamation.icon.svg"
import informationIcon from "@kaizen/component-library/icons/information.icon.svg"
import successIcon from "@kaizen/component-library/icons/success.icon.svg"
import styles from "./Tag.scss"

type Variant =
  | "default"
  | "sentimentPositive"
  | "sentimentNeutral"
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

export interface TagProps {
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
  "validationNegative",
  "validationCautionary",
]

const Tag = (props: TagProps) => {
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
            if (variant === "validationInformative") {
              return (
                <span className={styles.validationIcon}>
                  <Icon icon={informationIcon} role="presentation" />
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
          <>
            <button
              className={styles.dismissButton}
              onClick={onDismiss}
              onMouseDown={onMouseDown}
              onMouseLeave={onMouseLeave}
            >
              <span className={styles.background} />
              <div className={styles.iconWrapper}>
                <Icon icon={clearIcon} inheritSize role="img" title="Dismiss" />
              </div>
            </button>
          </>
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
