import { Icon } from "@kaizen/component-library"
import classnames from "classnames"

import * as React from "react"

const success = require("@kaizen/component-library/icons/success-white.icon.svg")
  .default
const exclamation = require("@kaizen/component-library/icons/exclamation-white.icon.svg")
  .default
const styles = require("./WhenOrWhenNotToUse.scss")

type Variant = "whenToUse" | "whenNotToUse"

type WhenOrWhenNotToUseProps = {
  variant: Variant
}

const getIcon = (variant: Variant) => {
  switch (variant) {
    case "whenToUse":
      return success
    case "whenNotToUse":
      return exclamation
  }
}

const getText = (variant: Variant) => {
  switch (variant) {
    case "whenToUse":
      return "When to use"
    case "whenNotToUse":
      return "When not to use"
  }
}

export default ({ variant }: WhenOrWhenNotToUseProps) => (
  <div className={classnames(styles.container, styles[variant])}>
    <span className={styles.icon}>
      <Icon icon={getIcon(variant)} role="presentation" />
    </span>
    {getText(variant)}
  </div>
)
