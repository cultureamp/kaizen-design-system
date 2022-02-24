import * as React from "react"
import GenericButton, { GenericProps } from "./components/GenericButton"

export type BreadcrumbProps = GenericProps & {
  isActive: boolean
}

const Breadcrumb: React.FunctionComponent<BreadcrumbProps> = (
  props: BreadcrumbProps
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
