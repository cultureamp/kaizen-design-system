import React from "react"
import { Icon } from "@kaizen/component-library"
import ellipsis from "@kaizen/component-library/icons/ellipsis.icon.svg"
import styles from "./Pagination.module.scss"

export const TruncateIndicator = () => (
  <div
    className={styles.truncateIndicatorWrapper}
    data-testid="truncate-indicator"
  >
    <Icon icon={ellipsis} role="presentation" />
  </div>
)
