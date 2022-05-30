import React from "react"
import GenericButton, {
  GenericProps,
  BadgeProps,
  WorkingProps,
  WorkingUndefinedProps,
} from "./components/GenericButton"

export type IconButtonProps = GenericProps &
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

export const IconButton: React.VFC<IconButtonProps> = props => (
  <GenericButton iconButton {...props} />
)

IconButton.defaultProps = {
  form: false,
  primary: false,
  destructive: false,
  disabled: false,
  reversed: false,
  secondary: false,
}

IconButton.displayName = "IconButton"
