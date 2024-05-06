import React, { forwardRef, Ref } from "react"
import {
  GenericButton,
  GenericProps,
  ButtonFormAttributes,
  WorkingProps,
  WorkingUndefinedProps,
  ButtonBadgeProps,
  ButtonRef,
} from "../GenericButton"

export type IconButtonProps = GenericProps &
  ButtonFormAttributes &
  (WorkingProps | WorkingUndefinedProps) & {
    label: string
    primary?: boolean
    destructive?: boolean
    secondary?: boolean
    /** @default "regular" */
    size?: "small" | "regular"
    badge?: ButtonBadgeProps
    type?: "submit" | "reset" | "button"
    fullWidth?: boolean
    icon?: JSX.Element
    disabled?: boolean
  }

/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3062890984/Button Guidance} |
 * {@link https://cultureamp.design/?path=/docs/components-iconbutton--docs Storybook}
 */
export const IconButton = forwardRef(
  (props: IconButtonProps, ref: Ref<ButtonRef | undefined>): JSX.Element => (
    <GenericButton iconButton {...props} ref={ref} />
  )
)

IconButton.defaultProps = {
  primary: false,
  destructive: false,
  disabled: false,
  reversed: false,
  secondary: false,
}

IconButton.displayName = "IconButton"
