import React, { forwardRef, Ref } from "react"
import { BadgeProps } from "../Badge"
import {
  GenericButton,
  GenericProps,
  ButtonRef,
  WorkingProps,
  WorkingUndefinedProps,
  GenericBadgeProps,
} from "../GenericButton"

export type ButtonProps = GenericProps &
  (WorkingProps | WorkingUndefinedProps) & {
    label: string
    primary?: boolean
    destructive?: boolean
    secondary?: boolean
    form?: boolean
    badge?: GenericBadgeProps
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
