import React from "react"
import { Icon } from "../../Icon"

const styles = require("./Indicator.module.scss")
/**
 * Eslint throws a false negative for modules that use require. Ensure you
 * are importing @kaizen/component-library into your package before turning
 * this rule off.
 */
// eslint-disable-next-line import/no-extraneous-dependencies
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
