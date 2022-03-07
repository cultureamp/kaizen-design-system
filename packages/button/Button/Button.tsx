import React, { forwardRef, Ref } from "react"
import GenericButton, {
  GenericProps,
  SharedButtonProps,
  DirectionalLinkSharedProps,
  ButtonRef,
  WorkingProps,
  WorkingUndefinedProps,
} from "./components/GenericButton"

export type ButtonProps = GenericProps &
  SharedButtonProps &
  DirectionalLinkSharedProps &
  (WorkingProps | WorkingUndefinedProps) & {
    iconPosition?: "start" | "end"
    primary?: boolean
  }

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
  iconPosition: "start",
  newTabAndIUnderstandTheAccessibilityImplications: false,
}

Button.displayName = "Button"

export default Button
