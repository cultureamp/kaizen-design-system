import React from "react"
import { mergeClassNames } from "~components/utils/mergeClassNames"
import { ButtonProps } from "../../Button"
import { PendingContent } from "../PendingContent"
import styles from "./ButtonContent.module.css"

export const ButtonContent = ({
  children,
  size = "medium",
  icon,
  iconPosition = "start",
  ...otherProps
}: ButtonProps & { children: React.ReactNode }): JSX.Element => {
  const buttonIsPending = otherProps.isPending === true

  return (
    <>
      <span
        className={mergeClassNames(
          styles.buttonContent,
          buttonIsPending && otherProps.isPendingLabelHidden
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
      {buttonIsPending && (
        <PendingContent
          isPending={otherProps.isPending}
          isPendingLabelHidden={otherProps.isPendingLabelHidden}
          pendingLabel={otherProps.pendingLabel}
          size={size}
        />
      )}
    </>
  )
}
