import React from "react"
import { Header } from "react-aria-components"
import styles from "./MenuHeader.module.scss"

type MenuHeaderProps = {
  children: any
}

/**
 *
 */
export const MenuHeader = (props: MenuHeaderProps): JSX.Element => (
  <Header className={styles.header} {...props} />
)
