import React from "react"
import { Icon } from "@kaizen/component-library"

import styles from "./Indicator.module.scss"

import fullIcon from "@kaizen/component-library/icons/full.icon.svg"

const Indicator = () => (
  <span className={styles.container}>
    <Icon
      icon={fullIcon}
      role="presentation"
      title={"Menu indicator"}
      inheritSize
    />
  </span>
)

export default Indicator
