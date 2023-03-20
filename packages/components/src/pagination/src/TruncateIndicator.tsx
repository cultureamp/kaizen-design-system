import React from "react"
import { Icon } from "@components/Icon"
import ellipsis from "@icons/ellipsis.icon.svg"
import styles from "./Pagination.module.scss"

export const TruncateIndicator = (): JSX.Element => (
  <div
    className={styles.truncateIndicatorWrapper}
    data-testid="truncate-indicator"
  >
    <Icon icon={ellipsis} role="presentation" />
  </div>
)
