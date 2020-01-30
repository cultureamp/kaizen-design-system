import { Icon } from "@kaizen/component-library"
import classnames from "classnames"

import * as React from "react"

const success = require("@kaizen/component-library/icons/success-white.icon.svg")
  .default
const exclamation = require("@kaizen/component-library/icons/exclamation-white.icon.svg")
  .default
const styles = require("./WhenUse.scss")

type Variant = "do" | "dont"

type WhenUseProps = {
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
      return "When to use"
    case "dont":
      return "When not to use"
  }
}

export default ({ variant }: WhenUseProps) => (
  <div className={classnames(styles.container, styles[variant])}>
    <span className={styles.icon}>
      <Icon icon={getIcon(variant)} role="presentation" />
    </span>
    {getText(variant)}
  </div>
)
