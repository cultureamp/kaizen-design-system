/* !!! This component is deprecated. Please do not use for new code  !!! */

import React from "react"

import styles from "./Menu.module.scss"

/**
 * @deprecated MenuHeader is deprecated. Please use draft-menu instead (it has its own menu header component).
 */
const MenuHeader = (props: { title: string }): JSX.Element => (
  <div className={styles.header}>
    <span className={styles.header__title}>{props.title}</span>
  </div>
)

MenuHeader.displayName = "MenuHeader"

export default MenuHeader
