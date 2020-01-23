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
}

export const ProductionBadge = (props: BadgeProps) => (
  <div className={styles.badge}>
    <a href={props.href}>
      {props.loading ? (
        <Icon icon={spinnerIcon} title="loading…" />
      ) : (
        <Icon icon={caMonogramIcon} title="Culture Amp" />
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
  />
)

StagingBadge.displayName = "StagingBadge"

export const TestBadge = (props: BadgeProps) => (
  <MonogramBadge
    envClass={styles.test}
    monogram="test"
    loading={props.loading}
    href={props.href}
  />
)

TestBadge.displayName = "TestBadge"

export const LocalBadge = (props: BadgeProps) => (
  <MonogramBadge
    envClass={styles.local}
    monogram="local"
    loading={props.loading}
    href={props.href}
  />
)

LocalBadge.displayName = "LocalBadge"

export const namedBadge = (environment: string) => (props: BadgeProps) => (
  <MonogramBadge
    envClass={styles.named}
    monogram={environment}
    loading={props.loading}
    href={props.href}
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
