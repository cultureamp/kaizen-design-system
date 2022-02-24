import * as React from "react"
import GenericButton, { PageButtonProps } from "./components/GenericButton"

const PageButton: React.FunctionComponent<PageButtonProps> = (
  props: PageButtonProps
) => <GenericButton pageButton {...props} />

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
