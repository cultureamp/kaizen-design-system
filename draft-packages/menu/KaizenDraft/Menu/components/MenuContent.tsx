import * as React from "react"
import { withDeprecatedComponent } from "@kaizen/react-deprecate-warning"
import styles from "./MenuContent.module.scss"

const MenuContent = (props: { children: React.ReactNode }) => (
  <div className={styles.menuContent}>{props.children}</div>
)

MenuContent.displayName = "MenuContent"

export default MenuContent
