import * as React from "react"
import GenericButton, { GenericProps } from "./components/GenericButton"

export type BreadcrumbLinkProps = GenericProps & {
  isActive: boolean
}

const BreadcrumbLink: React.FunctionComponent<BreadcrumbLinkProps> = (
  props: BreadcrumbLinkProps
) => <GenericButton breadcrumbLink {...props} />

BreadcrumbLink.defaultProps = {
  form: false,
  primary: false,
  destructive: false,
  disabled: false,
  reversed: false,
  secondary: false,
}

BreadcrumbLink.displayName = "BreadcrumbLink"

export default BreadcrumbLink
