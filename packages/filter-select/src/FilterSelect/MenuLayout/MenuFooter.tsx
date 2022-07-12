import React from "react"
import styles from "./MenuFooter.scss"

export interface MenuFooterProps {
  children: React.ReactNode
}

export function MenuFooter({ children }: MenuFooterProps): JSX.Element {
  return <div className={styles.footer}>{children}</div>
}
