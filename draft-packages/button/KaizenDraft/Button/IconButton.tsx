import * as React from "react"
import GenericButton, { IconButtonProps } from "./components/GenericButton"

const IconButton = <S extends string>(props: IconButtonProps<S>) => (
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

export default IconButton
