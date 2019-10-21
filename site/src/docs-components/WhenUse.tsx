import { Icon } from "@cultureamp/kaizen-component-library"
import classnames from "classnames"

import * as React from "react"

const success = require("@cultureamp/kaizen-component-library/icons/success-white.icon.svg")
  .default
const exclamation = require("@cultureamp/kaizen-component-library/icons/exclamation-white.icon.svg")
  .default
const styles = require("./WhenUse.scss")

type WhenUseProps = {
  variant: "do" | "dont"
}

const getIcon = variant => {
  if (variant === "do") return success
  if (variant === "dont") return exclamation
}

const getText = variant => {
  if (variant === "do") return "When to use"
  if (variant === "dont") return "When not to use"
}

export default ({ variant }) => (
  <div className={classnames(styles.container, styles[variant])}>
    <span className={styles.icon}>
      <Icon icon={getIcon(variant)} role="presentation" />
    </span>
    {getText(variant)}
  </div>
)
