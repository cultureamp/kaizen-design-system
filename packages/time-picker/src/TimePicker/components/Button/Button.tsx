import React, { ForwardedRef } from "react"
import { useButton, AriaButtonProps } from "@react-aria/button"

export const Button = React.forwardRef(
  (props: AriaButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    // @ts-expect-error not sure why how to fix below
    const { buttonProps } = useButton(props, ref)
    return (
      <button
        {...buttonProps}
        ref={ref}
        style={{
          display: "flex",
          position: "absolute",
          right: 0,
          width: 50,
          top: 0,
          bottom: 0,
          alignItems: "center",
          justifyContent: "center",
          background: "none",
          border: "none",
        }}
      >
        {props.children}
      </button>
    )
  }
)

Button.displayName = "Button"
