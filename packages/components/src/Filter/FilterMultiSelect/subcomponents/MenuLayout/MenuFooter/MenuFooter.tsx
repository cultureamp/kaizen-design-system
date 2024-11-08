import React from "react"
import styles from "./MenuFooter.module.scss"

export type MenuFooterProps = {
  children: React.ReactNode
}

export const MenuFooter = ({ children }: MenuFooterProps): JSX.Element => (
  <div className={styles.footer}>{children}</div>
)

MenuFooter.displayName = "FilterMultiSelect.MenuFooter"
