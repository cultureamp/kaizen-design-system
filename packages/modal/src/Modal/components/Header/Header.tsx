import React from "react"
import styles from "./Header.scss"

export interface HeaderProps {
  children: React.ReactNode
}

export const Header = ({ children }: HeaderProps): JSX.Element => {
  const something = "asdasd"
  return <div className={styles.header}>{children}</div>
}
