import * as React from "react"
import GenericButton, { IconButtonProps } from "./components/GenericButton"

const Breadcrumb: React.FunctionComponent<any> = (props: any) => (
  <GenericButton breadcrumb {...props} />
)

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
