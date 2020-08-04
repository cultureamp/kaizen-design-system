import classnames from "classnames"
import * as React from "react"
import { NON_REVERSED_VARIANTS, Variant } from "./TitleBlockZen"

const styles = require("./NavigationTabs.scss")

export type NavigationTabProps = {
  text: string
  href: string
  active?: boolean
  handleClick?: (event: React.MouseEvent) => void
  variant?: Variant
  id?: string
  automationId?: string
}

const isLight = (variant: Variant | undefined): boolean =>
  variant !== undefined && NON_REVERSED_VARIANTS.includes(variant)

const NavigationTab = (props: NavigationTabProps) => (
  <a
    className={classnames(styles.linkAnchor, {
      [styles.lightBackground]: isLight(props.variant),
    })}
    href={props.href}
    onClick={props.handleClick}
    id={props.id}
    data-automation-id={props.automationId}
  >
    <div
      className={classnames(styles.linkLabel, {
        [styles.active]: props.active,
      })}
    >
      {props.text}
    </div>
  </a>
)

export default NavigationTab
