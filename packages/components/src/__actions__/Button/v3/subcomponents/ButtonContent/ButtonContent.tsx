import React from "react"
import { mergeClassNames } from "~components/utils/mergeClassNames"
import { ButtonProps } from "../../Button"
import { PendingButtonProps } from "../../types"
import { PendingContent } from "../PendingContent"
import styles from "./ButtonContent.module.css"

type ButtonContentProps = {
  children: React.ReactNode
  size?: ButtonProps["size"]
  icon?: ButtonProps["icon"]
  iconPosition?: ButtonProps["iconPosition"]
} & PendingButtonProps

export const ButtonContent = ({
  children,
  size = "medium",
  icon,
  iconPosition = "start",
  ...pendingProps
}: ButtonContentProps): JSX.Element => {
  const buttonIsPending = pendingProps.isPending
  return (
    <>
      <span
        className={mergeClassNames(
          styles.buttonContent,
          buttonIsPending && pendingProps.isPendingLabelHidden
            ? styles.buttonContentPendingHidden
            : buttonIsPending && styles.buttonContentPending
        )}
        aria-hidden={buttonIsPending}
      >
        {icon && iconPosition !== "end" && (
          <span className={styles.buttonIcon}>{icon}</span>
        )}
        {children}
        {icon && iconPosition === "end" && (
          <span className={styles.buttonIcon}>{icon}</span>
        )}
      </span>
      <span aria-live="polite">
        {buttonIsPending && (
          <PendingContent {...pendingProps} size={size} />
        )}
      </span>
    </>
  )
}
