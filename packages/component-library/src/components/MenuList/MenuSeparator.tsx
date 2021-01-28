/* !!! This component is deprecated. Please do not use for new code  !!! */

import * as React from "react"

import styles from "../../../styles/components/Menu.module.scss"

/**
 * @deprecated MenuSeparator is deprecated. Please use draft-menu instead (it has its own separator component).
 */
const MenuSeparator = () => <hr className={styles.separator} />
MenuSeparator.displayName = "MenuSeparator"

export default MenuSeparator
