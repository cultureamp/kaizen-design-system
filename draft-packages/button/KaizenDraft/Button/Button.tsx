import * as React from "react"
import GenericButton, { ButtonProps } from "./components/GenericButton"

const Button: React.FunctionComponent<ButtonProps> = props => (
  <GenericButton {...props} />
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
