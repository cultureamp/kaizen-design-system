/* !!! This component is deprecated. Please do not use for new code  !!! */

import * as React from "react"
import { withDeprecatedComponent } from "@kaizen/react-deprecate-warning"
import styles from "./Menu.module.scss"

/**
 * @deprecated MenuList is deprecated. Please use draft-menu instead.
 */
const MenuList = (props: { children: React.ReactNode }) => (
  <div className={styles.menuList}>{props.children}</div>
)

MenuList.displayName = "MenuList"

export default withDeprecatedComponent(MenuList, {
  warning: "MenuList is deprecated. Use @kaizen/menu.",
})
