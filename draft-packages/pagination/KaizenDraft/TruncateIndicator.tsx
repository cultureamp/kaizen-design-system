import React from "react"
import ellipsis from "@kaizen/component-library/icons/ellipsis.icon.svg"
import { Icon } from "@kaizen/component-library"
import styles from "./styles.scss"

const TruncateIndicator = () => (
  <div className={styles.truncateIndicatorWrapper}>
    <Icon icon={ellipsis} role="presentation" />
  </div>
)

export default TruncateIndicator
