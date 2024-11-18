import React from "react"
import classNames from "classnames"
import { VisuallyHidden } from "~components/VisuallyHidden"
import { ButtonProps } from "../../Button"
import { PendingButtonProps } from "../../types"
import styles from "./ButtonContent.module.css"

type ButtonContentProps = {
  children?: React.ReactNode
  size?: ButtonProps["size"]
  icon?: ButtonProps["icon"]
  iconPosition?: ButtonProps["iconPosition"]
  hasHiddenLabel?: ButtonProps["hasHiddenLabel"]
} & Pick<PendingButtonProps, "isPending" | "hasHiddenPendingLabel">

/** Renders the inner content of the button, handling icon and label visibility during pending state */
export const ButtonContent = ({
  children,
  hasHiddenLabel,
  size = "medium",
  icon,
  iconPosition = "start",
  isPending,
  hasHiddenPendingLabel,
}: ButtonContentProps): JSX.Element => (
  <span
    className={classNames(
      styles.buttonContent,
      styles[size],
      isPending && hasHiddenPendingLabel
        ? styles.buttonContentHidden
        : isPending && styles.buttonContentPending
    )}
    aria-hidden={isPending}
  >
    {icon && iconPosition === "start" && (
      <span className={styles.buttonIcon}>{icon}</span>
    )}
    {hasHiddenLabel ? (
      <VisuallyHidden>{children}</VisuallyHidden>
    ) : (
      <span className={styles.buttonLabel}>{children}</span>
    )}
    {icon && iconPosition === "end" && (
      <span className={styles.buttonIcon}>{icon}</span>
    )}
  </span>
)
