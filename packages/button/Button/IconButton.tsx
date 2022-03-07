import * as React from "react"
import GenericButton, {
  GenericProps,
  SharedButtonProps,
  DirectionalLinkSharedProps,
  WorkingProps,
  WorkingUndefinedProps,
} from "./components/GenericButton"

type IconButtonProps = GenericProps &
  SharedButtonProps &
  DirectionalLinkSharedProps &
  (WorkingProps | WorkingUndefinedProps)

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
