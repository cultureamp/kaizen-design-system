import * as React from "react"
import GenericButton, { GenericProps } from "./components/GenericButton"

export type BreadcrumbLinkProps = Pick<
  GenericProps,
  | "id"
  | "reversed"
  | "onClick"
  | "onMouseDown"
  | "href"
  | "newTabAndIUnderstandTheAccessibilityImplications"
  | "disableTabFocusAndIUnderstandTheAccessibilityImplications"
  | "onFocus"
  | "onBlur"
> & {
  pageNumber: number
  isActive: boolean
}

const BreadcrumbLink: React.FunctionComponent<BreadcrumbLinkProps> = (
  props: BreadcrumbLinkProps
) => (
  <GenericButton
    {...props}
    breadcrumbLink
    label={`${props.pageNumber}`}
    aria-label={`Page ${props.pageNumber}`}
  />
)

BreadcrumbLink.defaultProps = {
  reversed: false,
}

BreadcrumbLink.displayName = "BreadcrumbLink"

export default BreadcrumbLink
