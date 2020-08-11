/* !!! This component is deprecated. Please do not use for new code  !!! */

import * as React from "react"

const styles = require("./Menu.module.scss")

const MenuHeader = (props: { title: string }) => (
  <div className={styles.header}>
    <span className={styles.header__title}>{props.title}</span>
  </div>
)

MenuHeader.displayName = "MenuHeader"

export default MenuHeader
