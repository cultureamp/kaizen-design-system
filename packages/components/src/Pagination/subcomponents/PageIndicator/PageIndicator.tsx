import React from "react"
import classnames from "classnames"
import styles from "./PageIndicator.module.scss"

type PageIndicatorProps = {
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
    type="button"
    className={classnames(styles.pageIndicator, {
      [styles.pageIndicatorSelected]: selected,
    })}
    aria-label={`${ariaLabelPage || "Page"} ${page}`}
    onClick={(): void => onPageClick(page)}
  >
    <div className={styles.pageIndicatorFocusRing} />
    {page}
  </button>
)
