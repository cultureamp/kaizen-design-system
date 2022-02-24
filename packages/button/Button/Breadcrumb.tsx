import * as React from "react"
import GenericButton, { BreadcrumbProps } from "./components/GenericButton"

const Breadcrumb: React.FunctionComponent<BreadcrumbProps> = (
  props: BreadcrumbProps
) => <GenericButton breadcrumb iconButton {...props} />

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
