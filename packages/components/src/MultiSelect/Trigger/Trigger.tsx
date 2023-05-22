import React, { forwardRef } from "react"
import { useButton } from "@react-aria/button"
import { mergeProps, useObjectRef } from "@react-aria/utils"
import { AriaButtonProps } from "@react-types/button"
import classnames from "classnames"
import { useFocusRing } from "react-aria"
import { ChevronDownIcon } from "~components/SVG/icons/ChevronDownIcon"
import { ChevronUpIcon } from "~components/SVG/icons/ChevronUpIcon"
import styles from "./Trigger.module.scss"

interface ButtonProps extends AriaButtonProps {
  isOpen: boolean
  status?: "error" | "caution"
}

export const Trigger = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, isOpen, ...props }: ButtonProps, buttonRef) => {
    const ref = useObjectRef(buttonRef)

    const { buttonProps } = useButton(props, ref)
    const { focusProps } = useFocusRing()

    return (
      <button
        type="button"
        {...mergeProps(buttonProps, focusProps)}
        ref={ref}
        className={classnames(
          styles.button,
          status === "error" && styles.error,
          status === "caution" && styles.caution
        )}
      >
        <span>{children}</span>
        {isOpen ? (
          <ChevronUpIcon role="presentation" />
        ) : (
          <ChevronDownIcon role="presentation" />
        )}
      </button>
    )
  }
)

Trigger.displayName = "Trigger"
