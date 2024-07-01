import React from "react"
import { EllipsisIcon } from "~components/Icon"
import styles from "./TruncateIndicator.module.scss"

export const TruncateIndicator = (): JSX.Element => (
  <div
    className={styles.truncateIndicatorWrapper}
    data-testid="truncate-indicator"
  >
    <EllipsisIcon role="presentation" />
  </div>
)
