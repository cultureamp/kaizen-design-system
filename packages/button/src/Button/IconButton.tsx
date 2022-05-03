import React from "react"
import GenericButton, {
  GenericProps,
  BadgeProps,
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
