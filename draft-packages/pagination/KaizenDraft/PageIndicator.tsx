import React from "react"
import cx from "classnames"
import styles from "./styles.scss"
// import { getPaginationUrl } from "./utils"

type PageIndicatorProps = {
  page: number
  selected: boolean
  // location: string
  ariaLabelPage?: string
  onPageClick: (pageClicked: number) => void
}

const PageIndicator = ({
  page,
  selected,
  // location,
  ariaLabelPage,
  onPageClick,
}: PageIndicatorProps) => (
  <button
    key={`page-indicator-${page}`}
    className={cx(styles.pageIndicator, {
      [styles.pageIndicatorSelected]: selected,
    })}
    aria-label={`${ariaLabelPage} ${page}`}
    // href={getPaginationUrl(location, page)}
    onClick={() => onPageClick(page)}
  >
    {page}
  </button>
)

export default PageIndicator
