import React from "react"
import cx from "classnames"
import styles from "./Pagination.module.scss"

interface PageIndicatorProps {
  page: number
  selected: boolean
  ariaLabelPage?: string
  onPageClick: (pageClicked: number) => void
}

export const PageIndicator = ({
  page,
  selected,
  ariaLabelPage,
  onPageClick,
}: PageIndicatorProps): JSX.Element => (
  <button
    className={cx(styles.pageIndicator, {
      [styles.pageIndicatorSelected]: selected,
    })}
    aria-label={`${ariaLabelPage || "Page"} ${page}`}
    onClick={(): void => onPageClick(page)}
  >
    <div className={styles.pageIndicatorFocusRing} />
    {page}
  </button>
)
