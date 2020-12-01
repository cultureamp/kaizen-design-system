/* !!! This component is deprecated. Please do not use for new code  !!! */

import * as React from "react"
import styles from "./Menu.module.scss"

/**
 * @deprecated MenuList is deprecated. Please use draft-menu instead.
 */
const MenuList = (props: { children: React.ReactNode }) => (
  <div className={styles.menuList}>{props.children}</div>
)

MenuList.displayName = "MenuList"

export default MenuList
