import React from "react"
import styles from "./MenuFooter.scss"

export interface MenuFooterProps {
  children: React.ReactNode
}

export const MenuFooter: React.VFC<MenuFooterProps> = ({ children }) => (
  <div className={styles.footer}>{children}</div>
)

MenuFooter.displayName = "MenuFooter"
