import * as React from "react"
import styles from "../../styles/MenuContent.module.scss"

const MenuContent = (props: { children: React.ReactNode }) => (
  <div className={styles.menuContent}>{props.children}</div>
)

MenuContent.displayName = "MenuContent"

export default MenuContent
