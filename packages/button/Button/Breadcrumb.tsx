import * as React from "react"
import GenericButton, { PageButtonProps } from "./components/GenericButton"

const Breadcrumb: React.FunctionComponent<PageButtonProps> = (
  props: PageButtonProps
) => <GenericButton pageButton {...props} />

Breadcrumb.defaultProps = {
  form: false,
  primary: false,
  destructive: false,
  disabled: false,
  reversed: false,
  secondary: false,
}

Breadcrumb.displayName = "Breadcrumb"

export default Breadcrumb
