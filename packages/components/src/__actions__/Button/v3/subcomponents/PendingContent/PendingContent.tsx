import React from "react"
import { LoadingSpinner } from "~components/Loading"
import { VisuallyHidden } from "~components/VisuallyHidden"
import { mergeClassNames } from "~components/utils/mergeClassNames"
import { ButtonSizes, PendingProps } from "../../types"
import styles from "./PendingContent.module.css"

export const PendingContent = ({
  pendingLabel,
  isPendingLabelHidden = false,
  size = "medium",
}: PendingProps & { size?: ButtonSizes }): JSX.Element => (
  <span className={mergeClassNames(styles.pendingContent, styles[size])}>
    {isPendingLabelHidden ? (
      <VisuallyHidden>{pendingLabel}</VisuallyHidden>
    ) : (
      pendingLabel
    )}
    <LoadingSpinner
      size={size === "small" ? "xs" : "sm"}
      accessibilityLabel=""
      classNameOverride={
        isPendingLabelHidden ? styles.spinnerHidden : undefined
      }
    />
  </span>
)
