import { Icon } from "@kaizen/component-library"
const caMonogramIcon = require("@kaizen/component-library/icons/ca-monogram.icon.svg")
  .default
const spinnerIcon = require("@kaizen/component-library/icons/spinner.icon.svg")
  .default

import classNames from "classnames"
import * as React from "react"

const styles = require("./Badge.module.scss")

type BadgeProps = {
  loading: boolean
  href: string
  colorScheme: string
}

const Badge = (props: BadgeProps) => (
  <div className={classNames(styles.badge, styles[props.colorScheme])}>
    <a href={props.href}>
      {props.loading ? (
        <Icon icon={spinnerIcon} title="loading…" />
      ) : (
        <Icon icon={caMonogramIcon} title="Culture Amp" />
      )}
    </a>
  </div>
)

export default Badge
