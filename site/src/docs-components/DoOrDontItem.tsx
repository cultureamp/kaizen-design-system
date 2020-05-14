import { Icon } from "@kaizen/component-library"
import classnames from "classnames"

import * as React from "react"

const success = require("@kaizen/component-library/icons/success-white.icon.svg")
  .default
const exclamation = require("@kaizen/component-library/icons/exclamation-white.icon.svg")
  .default
const styles = require("./DoOrDontTag.scss")

type Variant = "do" | "dont"

type DoOrDontProps = {
  variant: Variant
}

const getIcon = (variant: Variant) => {
  switch (variant) {
    case "do":
      return success
    case "dont":
      return exclamation
  }
}

const getText = (variant: Variant) => {
  switch (variant) {
    case "do":
      return "Do"
    case "dont":
      return "Don't"
  }
}

export default ({ variant }: DoOrDontProps) => (
  <div className={classnames(styles.tag, styles[variant])}>
    <span className={styles.icon}>
      <Icon
        icon={getIcon(variant)}
        role="img"
        title={getText(variant)}
        inheritSize={false}
      />
    </span>
  </div>
)
