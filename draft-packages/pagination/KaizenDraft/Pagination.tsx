import React, { RefObject, useCallback } from "react"
import arrowBackward from "@kaizen/component-library/icons/arrow-backward.icon.svg"
import arrowForward from "@kaizen/component-library/icons/arrow-forward.icon.svg"
import { Icon } from "@kaizen/component-library"
import cx from "classnames"
// We don't use this here
import { Link } from "react-router"
// import { scrollUpToElementIntoView } from "../../utils/dom"
// import { defaultScrollOffset } from "../../constants/scrolling"
import PageIndicator from "./PageIndicator"
import TruncateIndicator from "./TruncateIndicator"
import styles from "./styles.scss"
import { createRange, getPaginationUrl } from "./utils"

type Props = {
  currentPage: number
  pageCount: number
  // location: string
  ariaLabelNextPage?: string
  ariaLabelPreviousPage?: string
  ariaLabelPage?: string
  // The dom reference of the table data which will be updated.
  // The only purpose of this is so we can automatically scroll to the top
  // of the table upon every update.
  // contentRef: RefObject<HTMLElement>
  onPageChange: (newPage: number) => void
}

// TODO: this can be part of the props.

const boundaryPagesRange = 1
const siblingPagesRange = 1

const Pagination = ({
  currentPage = 1,
  pageCount,
  ariaLabelNextPage,
  ariaLabelPreviousPage,
  ariaLabelPage,
  onPageChange,
}: // location,
// contentRef,
Props) => {
  // const getPageHref = (page: number) => getPaginationUrl(location, page)

  // Click event for all pagination buttons (next, prev, and the actual numbers)
  // const handleButtonClick = useCallback(() => {
  //   // const content = contentRef.current
  //   // if (!content) return // hopefully this shouldn't happen
  //   // scrollUpToElementIntoView(content, { offset: defaultScrollOffset })
  //   // }, [contentRef])
  // }, [])

  const handleButtonClick = (newPage: number | "prev" | "next") => {
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

  const paginationIndicator = (page: number) => (
    <PageIndicator
      page={page}
      selected={currentPage === page}
      // location={location}
      ariaLabelPage={ariaLabelPage}
      onPageClick={handleButtonClick}
    />
  )

  const truncateIndicator = (page: number) => <TruncateIndicator key={page} />

  const pagination = () => {
    const items: JSX.Element[] = []

    // truncateSize is 1 now but could be 0 if we add the ability to hide it.
    const truncateSize = 1

    // Simplify generation of pages if number of available items is equal or greater than total pages to show
    if (
      1 + 2 * truncateSize + 2 * siblingPagesRange + 2 * boundaryPagesRange >=
      pageCount
    ) {
      const allPages = createRange(1, pageCount).map(paginationIndicator)
      items.push(...allPages)
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
        showPageInsteadOfFirstEllipsis
          ? paginationIndicator(firstEllipsisPageNumber)
          : truncateIndicator(firstEllipsisPageNumber)
      )

      // Add group of main pages
      items.push(...mainPages)

      // Calculate and add truncate after group of main pages
      const secondEllipsisPageNumber = mainPagesEnd + 1
      const showPageInsteadOfSecondEllipsis =
        secondEllipsisPageNumber === lastPagesStart - 1
      items.push(
        showPageInsteadOfSecondEllipsis
          ? paginationIndicator(secondEllipsisPageNumber)
          : truncateIndicator(secondEllipsisPageNumber)
      )

      // Add group of last pages
      items.push(...lastPages)
    }
    return items
  }

  const previousPageDisabled = currentPage <= 1
  const nextPageDisabled = currentPage >= pageCount

  return (
    <div className={styles.container}>
      <button
        className={cx(styles.arrowIconWrapper, {
          [styles.arrowIconWrapperDisabled]: previousPageDisabled,
        })}
        // to={getPageHref(previousPageDisabled ? currentPage : currentPage - 1)}
        aria-label={ariaLabelPreviousPage}
        aria-disabled={previousPageDisabled}
        onClick={() => handleButtonClick("prev")}
      >
        <Icon icon={arrowBackward} role="presentation" />
      </button>

      <div className={styles.pagesIndicatorWrapper}>{pagination()}</div>

      <button
        className={cx(styles.arrowIconWrapper, {
          [styles.arrowIconWrapperDisabled]: nextPageDisabled,
        })}
        // to={getPageHref(nextPageDisabled ? currentPage : currentPage + 1)}
        aria-label={ariaLabelNextPage}
        aria-disabled={nextPageDisabled}
        onClick={() => handleButtonClick("next")}
      >
        <Icon icon={arrowForward} role="presentation" />
      </button>
    </div>
  )
}

export default Pagination
