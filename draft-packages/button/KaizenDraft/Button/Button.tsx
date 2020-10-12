import React, { forwardRef, Ref } from "react"
import GenericButton, {
  ButtonProps,
  ButtonRef,
} from "./components/GenericButton"

const Button = forwardRef(
  (props: ButtonProps, ref: Ref<ButtonRef | undefined>) => (
    <GenericButton {...props} ref={ref} />
  )
)

Button.defaultProps = {
  fullWidth: false,
  form: false,
  primary: false,
  secondary: false,
  destructive: false,
  disabled: false,
  reversed: false,
  working: null,
  iconPosition: "start",
  newTabAndIUnderstandTheAccessibilityImplications: false,
}

Button.displayName = "Button"

export default Button
