import React, { forwardRef, Ref, ComponentType } from "react"
import GenericButton, {
  GenericProps,
  BadgeProps,
  CustomButtonProps,
  ButtonRef,
  WorkingProps,
  WorkingUndefinedProps,
} from "./components/GenericButton"

export type ButtonProps = GenericProps &
  (WorkingProps | WorkingUndefinedProps) & {
    label: string
    primary?: boolean
    destructive?: boolean
    secondary?: boolean
    form?: boolean
    badge?: BadgeProps
    type?: "submit" | "reset" | "button"
    fullWidth?: boolean
    component?: ComponentType<CustomButtonProps>
    iconPosition?: "start" | "end"
    icon?: React.SVGAttributes<SVGSymbolElement>
    disabled?: boolean
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
