import React from "react"
import styles from "./Body.scss"

export interface BodyProps {
  children: React.ReactNode
}

export const Body = ({ children }: BodyProps): JSX.Element => {
  const something = "asdasd"
  return <div className={styles.body}>{children}</div>
}
