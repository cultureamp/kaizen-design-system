import React, { ForwardedRef, RefObject } from "react"
import { useButton, AriaButtonProps } from "@react-aria/button"
import styles from "./Button.module.scss"

export const DropdownButton = React.forwardRef(
  (props: AriaButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const { buttonProps } = useButton(
      props,
      ref as RefObject<HTMLButtonElement>
    )
    return (
      <button {...buttonProps} ref={ref} className={styles.button}>
        {props.children}
      </button>
    )
  }
)

DropdownButton.displayName = "DropdownButton"
