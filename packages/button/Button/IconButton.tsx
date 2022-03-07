import React, { ComponentType } from "react"
import GenericButton, {
  GenericProps,
  BadgeProps,
  CustomButtonProps,
  WorkingProps,
  WorkingUndefinedProps,
} from "./components/GenericButton"

type IconButtonProps = GenericProps &
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

const IconButton: React.FunctionComponent<IconButtonProps> = (
  props: IconButtonProps
) => <GenericButton iconButton {...props} />

IconButton.defaultProps = {
  form: false,
  primary: false,
  destructive: false,
  disabled: false,
  reversed: false,
  secondary: false,
}

IconButton.displayName = "IconButton"

export default IconButton
