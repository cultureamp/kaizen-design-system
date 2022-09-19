import React, { ForwardedRef, RefObject } from "react"
import { useButton, AriaButtonProps } from "@react-aria/button"
import { Icon } from "@kaizen/component-library"
import styles from "./Button.module.scss"

export const Button = React.forwardRef(
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

Button.displayName = "Button"
