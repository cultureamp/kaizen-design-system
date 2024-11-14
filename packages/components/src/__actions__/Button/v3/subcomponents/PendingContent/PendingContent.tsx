import React from "react"
import classNames from "classnames"
import { LoadingSpinner } from "~components/Loading"
import { VisuallyHidden } from "~components/VisuallyHidden"
import { ButtonSizes, PendingProps } from "../../types"
import styles from "./PendingContent.module.css"

export const PendingContent = ({
  pendingLabel,
  hasHiddenPendingLabel = false,
  size = "medium",
}: PendingProps & { size?: ButtonSizes }): JSX.Element => (
  <span className={classNames(styles.pendingContent, styles[size])}>
    {hasHiddenPendingLabel ? (
      <VisuallyHidden>{pendingLabel}</VisuallyHidden>
    ) : (
      <span className={styles.pendingContentLabel}>{pendingLabel}</span>
    )}
    <LoadingSpinner
      size={size === "small" ? "xs" : "sm"}
      accessibilityLabel=""
      classNameOverride={
        hasHiddenPendingLabel ? styles.spinnerHidden : undefined
      }
    />
  </span>
)
