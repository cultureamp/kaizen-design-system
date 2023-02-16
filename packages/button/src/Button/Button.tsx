import React, { forwardRef, Ref } from "react"
import GenericButton, {
  GenericProps,
  BadgeProps,
  ButtonRef,
  WorkingProps,
  WorkingUndefinedProps,
} from "./components/GenericButton"

export type ButtonProps = Omit<React.HTMLProps<HTMLButtonElement>, "ref"> &
  GenericProps &
  (WorkingProps | WorkingUndefinedProps) & {
    label: string
    primary?: boolean
    destructive?: boolean
    secondary?: boolean
    badge?: BadgeProps
    compact?: boolean
    type?: "submit" | "reset" | "button"
    fullWidth?: boolean
    iconPosition?: "start" | "end"
    icon?: React.SVGAttributes<SVGSymbolElement>
    disabled?: boolean
  }

/**
 * {@link https://cultureamp.design/components/button/ Guidance} |
 * {@link https://cultureamp.design/storybook/?path=/docs/components-button--default-kaizen-site-demo Storybook}
 */
const Button = forwardRef(
  (props: ButtonProps, ref: Ref<ButtonRef | undefined>) => (
    <GenericButton {...props} ref={ref} />
  )
)

Button.defaultProps = {
  fullWidth: false,
  compact: false,
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
