import * as React from "react"
import { withDeprecatedComponent } from "@kaizen/react-deprecate-warning"

import styles from "./MenuSection.module.scss"

/**
 * This is now available in MenuSection.
 * @deprecated
 */

const MenuHeader = (props: { title: string }) => (
  <div className={styles.header}>
    <span className={styles.header__title}>{props.title}</span>
  </div>
)

MenuHeader.displayName = "MenuHeader"

export default withDeprecatedComponent(MenuHeader, {
  warning: "MenuHeader is deprecated. It's now available in MenuSection.",
})
