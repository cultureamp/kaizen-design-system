import React from "react"
import classNames from "classnames"
import { VisuallyHidden } from "~components/VisuallyHidden"
import { ButtonProps } from "../../Button"
import { PendingButtonProps } from "../../types"
import { PendingContent } from "../PendingContent"
import styles from "./ButtonContent.module.css"

type ButtonContentProps = {
  children?: React.ReactNode
  size?: ButtonProps["size"]
  icon?: ButtonProps["icon"]
  iconPosition?: ButtonProps["iconPosition"]
  hasHiddenLabel?: ButtonProps["hasHiddenLabel"]
} & PendingButtonProps

export const ButtonContent = ({
  children,
  hasHiddenLabel,
  size = "medium",
  icon,
  iconPosition = "start",
  ...pendingProps
}: ButtonContentProps): JSX.Element => {
  const buttonIsPending = pendingProps.isPending
  const shouldHidePendingLabel =
    hasHiddenLabel || pendingProps.hasHiddenPendingLabel

  return (
    <>
      <span
        className={classNames(
          styles.buttonContent,
          styles[size],
          buttonIsPending && shouldHidePendingLabel
            ? styles.buttonContentPendingHidden
            : buttonIsPending && styles.buttonContentPending
        )}
        aria-hidden={buttonIsPending}
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
      <span aria-live="polite">
        {buttonIsPending && (
          <PendingContent
            {...pendingProps}
            hasHiddenPendingLabel={shouldHidePendingLabel}
            size={size}
          />
        )}
      </span>
    </>
  )
}
