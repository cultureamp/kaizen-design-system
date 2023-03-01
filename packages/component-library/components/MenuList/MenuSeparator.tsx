/* !!! This component is deprecated. Please do not use for new code  !!! */

import React from "react"

import styles from "./Menu.module.scss"

/**
 * @deprecated MenuSeparator is deprecated. Please use draft-menu instead (it has its own separator component).
 */
const MenuSeparator = (): JSX.Element => <hr className={styles.separator} />
MenuSeparator.displayName = "MenuSeparator"

export default MenuSeparator
