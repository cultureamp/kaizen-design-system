import React from "react"
import styles from "./Footer.scss"

export interface FooterProps {
  children: React.ReactNode
}

export const Footer = ({ children }: FooterProps): JSX.Element => {
  const something = "asdasd"
  return <div className={styles.footer}>{children}</div>
}
