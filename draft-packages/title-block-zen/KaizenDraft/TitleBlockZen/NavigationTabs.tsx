import classnames from "classnames"
import * as React from "react"

const styles = require("./NavigationTabs.scss")

export type NavigationTabsProps = {
  id?: string
  automationId?: string
}

export type NavigationTabProps = {
  text: string
  href: string
  active?: boolean
  handleClick?: (event: React.MouseEvent) => void
}

const NavigationTab = (props: NavigationTabProps) => (
  <a
    className={styles.linkAnchor}
    href={props.href}
    onClick={props.handleClick}
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
