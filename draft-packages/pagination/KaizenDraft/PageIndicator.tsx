import React from "react"
import cx from "classnames"
import styles from "./styles.scss"

type PageIndicatorProps = {
  page: number
  selected: boolean
  ariaLabelPage?: string
  onPageClick: (pageClicked: number) => void
}

const PageIndicator = ({
  page,
  selected,
  ariaLabelPage,
  onPageClick,
}: PageIndicatorProps) => (
  <button
    key={`page-indicator-${page}`}
    className={cx(styles.pageIndicator, {
      [styles.pageIndicatorSelected]: selected,
    })}
    aria-label={`${ariaLabelPage} ${page}`}
    onClick={() => onPageClick(page)}
  >
    <div className={styles.pageIndicatorFocusRing} />
    {page}
  </button>
)

export default PageIndicator
