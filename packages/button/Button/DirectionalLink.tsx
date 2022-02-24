import * as React from "react"
import GenericButton, { BreadcrumbProps } from "./components/GenericButton"

const DirectionalLink: React.FunctionComponent<BreadcrumbProps> = (
  props: BreadcrumbProps
) => <GenericButton breadcrumb iconButton {...props} />

DirectionalLink.defaultProps = {
  form: false,
  primary: false,
  destructive: false,
  disabled: false,
  reversed: false,
  secondary: false,
}

DirectionalLink.displayName = "DirectionalLink"

export default DirectionalLink
