import React, { forwardRef, Ref } from "react"
import GenericButton, {
  ButtonProps,
  ButtonFunctions,
} from "./components/GenericButton"

const Button = forwardRef(
  (props: ButtonProps, ref: Ref<ButtonFunctions | undefined>) => (
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
  iconPosition: "start",
  newTabAndIUnderstandTheAccessibilityImplications: false,
}

Button.displayName = "Button"

export default Button
