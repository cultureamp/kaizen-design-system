import * as React from "react"
import GenericButton, { GenericProps } from "./components/GenericButton"

type PaginationLinkProps = Pick<
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

const PaginationLink: React.FunctionComponent<PaginationLinkProps> = (
  props: PaginationLinkProps
) => (
  <GenericButton
    {...props}
    paginationLink
    label={`${props.pageNumber}`}
    aria-label={`Page ${props.pageNumber}`}
  />
)

PaginationLink.defaultProps = {
  reversed: false,
  isActive: false,
}

PaginationLink.displayName = "PaginationLink"

export default PaginationLink
