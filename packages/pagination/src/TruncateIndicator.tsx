import React from "react"
import ellipsis from "@kaizen/component-library/icons/ellipsis.icon.svg"
import { Icon } from "@kaizen/component-library"
import styles from "./Pagination.scss"

export const TruncateIndicator = () => (
  <div
    className={styles.truncateIndicatorWrapper}
    data-testid="truncate-indicator"
  >
    <Icon icon={ellipsis} role="presentation" />
  </div>
)
