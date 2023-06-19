import React, { forwardRef, Ref } from "react"
import GenericButton, {
  GenericProps,
  ButtonFormAttributes,
  BadgeProps,
  ButtonRef,
  WorkingProps,
  WorkingUndefinedProps,
} from "./components/GenericButton"

export type ButtonProps = GenericProps &
  ButtonFormAttributes &
  (WorkingProps | WorkingUndefinedProps) & {
    label: string
    primary?: boolean
    destructive?: boolean
    secondary?: boolean
    /** @default "regular" */
    size?: "small" | "regular"
    badge?: BadgeProps
    type?: "submit" | "reset" | "button"
    fullWidth?: boolean
    iconPosition?: "start" | "end"
    icon?: JSX.Element
    disabled?: boolean
  }

/**
 * {@link https://cultureamp.design/components/button/ Guidance} |
 * {@link https://cultureamp.design/storybook/?path=/docs/components-button--default-kaizen-site-demo Storybook}
 */
export const Button = forwardRef(
  (props: ButtonProps, ref: Ref<ButtonRef | undefined>) => (
    <GenericButton {...props} ref={ref} />
  )
)

Button.defaultProps = {
  fullWidth: false,
  primary: false,
  secondary: false,
  destructive: false,
  disabled: false,
  reversed: false,
  iconPosition: "start",
  newTabAndIUnderstandTheAccessibilityImplications: false,
}

Button.displayName = "Button"
