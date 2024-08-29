import React from "react"
import { EllipsisIcon } from "~components/__illustrations__/v1"
import styles from "./TruncateIndicator.module.scss"

export const TruncateIndicator = (): JSX.Element => (
  <div
    className={styles.truncateIndicatorWrapper}
    data-testid="truncate-indicator"
  >
    <EllipsisIcon role="presentation" />
  </div>
)
