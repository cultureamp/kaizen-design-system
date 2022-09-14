import React, { ForwardedRef } from "react"
import { useButton, AriaButtonProps } from "@react-aria/button"
import styles from "./Button.module.scss"

export const Button = React.forwardRef(
  (props: AriaButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    // @ts-expect-error not sure why how to fix below
    const { buttonProps } = useButton(props, ref)
    return (
      <button {...buttonProps} ref={ref} className={styles.button}>
        {props.children}
      </button>
    )
  }
)

Button.displayName = "Button"
