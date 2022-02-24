import * as React from "react"
import GenericButton, { IconButtonProps } from "./components/GenericButton"

const PageButton: React.FunctionComponent<any> = (props: any) => (
  <GenericButton {...props} />
)

PageButton.defaultProps = {
  form: false,
  primary: false,
  destructive: false,
  disabled: false,
  reversed: false,
  secondary: false,
}

PageButton.displayName = "PageButton"

export default PageButton
