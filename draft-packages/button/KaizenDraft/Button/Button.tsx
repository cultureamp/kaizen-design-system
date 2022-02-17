import React, { forwardRef, Ref } from "react"
import { logComponent } from "@kaizen/react-deprecate-warning/src/util"
import GenericButton, {
  ButtonProps,
  ButtonRef,
} from "./components/GenericButton"

/**
 * @deprecated draft-packages Button is deprecated. Please use Button from "@kaizen/button" instead.
 */
const Button = forwardRef(
  (props: ButtonProps, ref: Ref<ButtonRef | undefined>) => {
    logComponent(
      "Button",
      "@kaizen/draft-button is deprecated. Use @kaizen/button instead."
    )
    return <GenericButton {...props} ref={ref} />
  }
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
