import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "~types/OverrideClassName"
import { DirectionalLink } from "./subcomponents/DirectionalLink"
import { PaginationLink } from "./subcomponents/PaginationLink"
import { TruncateIndicator } from "./subcomponents/TruncateIndicator"
import { createRange } from "./utils/createRange"
import styles from "./Pagination.module.scss"

export type PaginationProps = {
  currentPage: number
  pageCount: number
  ariaLabelNextPage: string
  ariaLabelPreviousPage: string
  ariaLabelPage: string
  onPageChange: (newPage: number) => void
} & OverrideClassName<HTMLAttributes<HTMLElement>>

type PageAction = "prev" | "next"

/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3082092975/Pagination Guidance} |
 * {@link https://cultureamp.design/?path=/docs/components-pagination--docs Storybook}
 */
export const Pagination = ({
  currentPage = 1,
  pageCount,
  ariaLabelNextPage,
  ariaLabelPreviousPage,
  ariaLabelPage,
  onPageChange,
  classNameOverride,
  ...restProps
}: PaginationProps): JSX.Element => {
  // Click event for all pagination buttons (next, prev, and the actual numbers)
  const handleButtonClick = (newPage: number | PageAction): void => {
    if (newPage === "prev") {
      onPageChange(currentPage - 1)
      return
    }
    if (newPage === "next") {
      onPageChange(currentPage + 1)
      return
    }
    onPageChange(newPage)
  }

  const paginationIndicator = (page: number): JSX.Element => (
    <PaginationLink
      key={page}
      pageNumber={page}
      isActive={currentPage === page}
      aria-label={`${ariaLabelPage} ${page}`}
      onClick={() => handleButtonClick(page)}
    />
  )

  const pagination = (): JSX.Element[] => {
    const items: JSX.Element[] = []

    const boundaryPagesRange = 1
    const siblingPagesRange = 1

    // truncateSize is 1 now but could be 0 if we add the ability to hide it.
    const truncateSize = 1

    const showAllPages =
      1 + 2 * truncateSize + 2 * siblingPagesRange + 2 * boundaryPagesRange >=
      pageCount

    // Simplify generation of pages if number of available items is equal or greater than total pages to show
    if (showAllPages) {
      return createRange(1, pageCount).map(paginationIndicator)
    } else {
      // Calculate group of first pages
      const firstPagesStart = 1
      const firstPagesEnd = boundaryPagesRange
      const firstPages = createRange(firstPagesStart, firstPagesEnd).map(
        paginationIndicator
      )

      // Calculate group of last pages
      const lastPagesStart = pageCount + 1 - boundaryPagesRange
      const lastPagesEnd = pageCount
      const lastPages = createRange(lastPagesStart, lastPagesEnd).map(
        paginationIndicator
      )

      // Calculate group of main pages
      const mainPagesStart = Math.min(
        Math.max(
          currentPage - siblingPagesRange,
          firstPagesEnd + truncateSize + 1
        ),
        lastPagesStart - truncateSize - 2 * siblingPagesRange - 1
      )
      const mainPagesEnd = mainPagesStart + 2 * siblingPagesRange
      const mainPages = createRange(mainPagesStart, mainPagesEnd).map(
        paginationIndicator
      )

      // Add group of first pages
      items.push(...firstPages)

      // Calculate and add truncate before group of main pages
      const firstEllipsisPageNumber = mainPagesStart - 1
      const showPageInsteadOfFirstEllipsis =
        firstEllipsisPageNumber === firstPagesEnd + 1
      items.push(
        showPageInsteadOfFirstEllipsis ? (
          paginationIndicator(firstEllipsisPageNumber)
        ) : (
          <TruncateIndicator key={firstEllipsisPageNumber} />
        )
      )

      // Add group of main pages
      items.push(...mainPages)

      // Calculate and add truncate after group of main pages
      const secondEllipsisPageNumber = mainPagesEnd + 1
      const showPageInsteadOfSecondEllipsis =
        secondEllipsisPageNumber === lastPagesStart - 1
      items.push(
        showPageInsteadOfSecondEllipsis ? (
          paginationIndicator(secondEllipsisPageNumber)
        ) : (
          <TruncateIndicator key={secondEllipsisPageNumber} />
        )
      )

      // Add group of last pages
      items.push(...lastPages)
    }
    return items
  }

  const previousPageDisabled = currentPage <= 1
  const nextPageDisabled = currentPage >= pageCount

  return (
    <nav
      className={classnames(styles.container, classNameOverride)}
      {...restProps}
    >
      <DirectionalLink
        label={ariaLabelPreviousPage}
        direction="prev"
        disabled={previousPageDisabled}
        onClick={(): void => handleButtonClick("prev")}
      />

      <div className={styles.pagesIndicatorWrapper}>{pagination()}</div>

      <DirectionalLink
        label={ariaLabelNextPage}
        direction="next"
        disabled={nextPageDisabled}
        onClick={(): void => handleButtonClick("next")}
      />
    </nav>
  )
}
