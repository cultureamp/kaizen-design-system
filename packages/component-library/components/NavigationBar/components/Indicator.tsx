import React from "react"
import { Icon } from "@kaizen/component-library"

const styles = require("./Indicator.module.scss")

const fullIcon = require("@kaizen/component-library/icons/full.icon.svg")
  .default

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
