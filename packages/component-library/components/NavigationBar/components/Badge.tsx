import { Icon } from "@kaizen/component-library"
const caMonogramIcon = require("@kaizen/component-library/icons/ca-monogram.icon.svg")
  .default
const spinnerIcon = require("@kaizen/component-library/icons/spinner.icon.svg")
  .default

const caLogo = require("../illustrations/ca-logo.svg").default
import classNames from "classnames"
import * as React from "react"

const styles = require("./Badge.module.scss")

type BadgeProps = {
  loading: boolean
  href: string
  colorScheme: string
}

const renderProductionBadge = (props: BadgeProps) => {
  if (props.colorScheme === "zen") {
    return <Icon icon={caLogo} title="Culture Amp" />
  } else {
    return <Icon icon={caMonogramIcon} title="Culture Amp" />
  }
}

export const ProductionBadge = (props: BadgeProps) => (
  <div className={classNames(styles.badge, styles[props.colorScheme])}>
    <a href={props.href}>
      {props.loading ? (
        <Icon icon={spinnerIcon} title="loading…" />
      ) : (
        renderProductionBadge(props)
      )}
    </a>
  </div>
)

ProductionBadge.displayName = "ProductionBadge"

export const StagingBadge = (props: BadgeProps) => (
  <MonogramBadge
    envClass={styles.staging}
    monogram="staging"
    loading={props.loading}
    href={props.href}
    colorScheme={props.colorScheme}
  />
)

StagingBadge.displayName = "StagingBadge"

export const TestBadge = (props: BadgeProps) => (
  <MonogramBadge
    envClass={styles.test}
    monogram="test"
    loading={props.loading}
    href={props.href}
    colorScheme={props.colorScheme}
  />
)

TestBadge.displayName = "TestBadge"

export const LocalBadge = (props: BadgeProps) => (
  <MonogramBadge
    envClass={styles.local}
    monogram="local"
    loading={props.loading}
    href={props.href}
    colorScheme={props.colorScheme}
  />
)

LocalBadge.displayName = "LocalBadge"

export const namedBadge = (environment: string) => (props: BadgeProps) => (
  <MonogramBadge
    envClass={styles.named}
    monogram={environment}
    loading={props.loading}
    href={props.href}
    colorScheme={props.colorScheme}
  />
)

namedBadge.displayName = "namedBadge"

type MonogramBadgeProps = BadgeProps & {
  envClass: string
  monogram: string
}

const MonogramBadge = (props: MonogramBadgeProps) => (
  <div className={classNames(styles.badge, props.envClass)}>
    <a href={props.href} aria-live="polite">
      {props.loading ? (
        <Icon icon={spinnerIcon} title="loading" />
      ) : (
        <span aria-label={props.monogram}>{props.monogram.substr(0, 2)}</span>
      )}
    </a>
  </div>
)

MonogramBadge.displayName = "MonogramBadge"
