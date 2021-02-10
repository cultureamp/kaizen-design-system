import * as React from "react"

import styles from "./MenuContent.module.scss"

const MenuHeader = (props: { title: string; id?: string }) => (
  <div className={styles.header} id={props.id}>
    <span className={styles.header__title}>{props.title}</span>
  </div>
)

MenuHeader.displayName = "MenuHeader"

export default MenuHeader
