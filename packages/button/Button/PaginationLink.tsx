import * as React from "react"
import GenericButton, { GenericProps } from "./components/GenericButton"

type PaginationLinkProps = GenericProps & {
  pageNumber: number
  isActive: boolean
  accessibleLabel: string
}

const PaginationLink: React.FunctionComponent<PaginationLinkProps> = (
  props: PaginationLinkProps
) => (
  <GenericButton
    {...props}
    paginationLink
    label={`${props.pageNumber}`}
    aria-label={props.accessibleLabel}
  />
)

PaginationLink.defaultProps = {
  reversed: false,
  isActive: false,
}

PaginationLink.displayName = "PaginationLink"

export default PaginationLink
