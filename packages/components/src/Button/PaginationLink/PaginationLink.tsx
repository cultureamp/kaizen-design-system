import React from "react"
import { GenericProps, GenericButton } from "../GenericButton"

export type PaginationLinkProps = GenericProps & {
  pageNumber: number
  isActive?: boolean
  /* A description for screen readers to understand because label used here is a number */
  "aria-label": string
}

/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3082092975/Pagination Guidance} |
 * {@link https://cultureamp.design/?path=/story/components-buttons-paginationlink--docs Storybook}
 */
export const PaginationLink = ({
  pageNumber,
  ...restProps
}: PaginationLinkProps): JSX.Element => (
  <GenericButton {...restProps} paginationLink label={`${pageNumber}`} />
)

PaginationLink.defaultProps = {
  reversed: false,
  isActive: false,
}

PaginationLink.displayName = "PaginationLink"
