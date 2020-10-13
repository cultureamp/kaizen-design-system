import * as React from "react"
import GenericButton, { IconButtonProps } from "./components/GenericButton"

const IconButton: React.FunctionComponent<IconButtonProps> = (
  props: IconButtonProps
) => <GenericButton iconButton {...props} />

IconButton.defaultProps = {
  form: false,
  destructive: false,
  disabled: false,
  reversed: false,
}

IconButton.displayName = "IconButton"

export default IconButton
