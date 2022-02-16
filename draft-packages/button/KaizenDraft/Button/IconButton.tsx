import * as React from "react"
import GenericButton, { IconButtonProps } from "./components/GenericButton"

/**
 * @deprecated draft-packages IconButton is deprecated. Please use IconButton from "@kaizen/button" instead.
 */
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
