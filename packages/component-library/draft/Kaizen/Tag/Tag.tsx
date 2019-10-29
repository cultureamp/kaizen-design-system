import { Icon } from "@cultureamp/kaizen-component-library"
import classNames from "classnames"
import * as React from "react"
const clearIcon = require("@cultureamp/kaizen-component-library/icons/clear.icon.svg")
  .default
const exclamationIcon = require("@cultureamp/kaizen-component-library/icons/exclamation.icon.svg")
  .default
const styles = require("./Tag.scss")

interface Props {
  readonly children: React.ReactNode
  readonly variant: "default" | "cautionary" | "negative"
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

  const isValidation = variant === "cautionary" || variant === "negative"
  const isTruncated = truncationWidth && truncationWidth > 0

  return (
    <div
      className={classNames(styles.root, {
        [styles.default]: variant === "default",
        [styles.validation]: isValidation,
        [styles.cautionary]: variant === "cautionary",
        [styles.negative]: variant === "negative",
        [styles.medium]: size === "medium",
        [styles.small]: size === "small",
        [styles.inline]: inline,
        [styles.dismissible]: dismissible,
      })}
    >
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
      {size === "medium" && isValidation && (
        <span className={styles.validationIcon}>
          <Icon icon={exclamationIcon} inheritSize role="presentation" />
        </span>
      )}
    </div>
  )
}

export default Tag
