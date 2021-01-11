import { Icon } from "@kaizen/component-library"
import caMonogramIcon from "@kaizen/component-library/icons/ca-monogram.icon.svg"
import spinnerIcon from "@kaizen/component-library/icons/spinner.icon.svg"

import classNames from "classnames"
import * as React from "react"

import styles from "../../styles/Badge.module.scss"

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
