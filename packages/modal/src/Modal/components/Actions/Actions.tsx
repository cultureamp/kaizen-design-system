import React from "react"
import styles from "./Actions.scss"

export interface ActionsProps {
  children: React.ReactNode
}

export const Actions = ({ children }: ActionsProps): JSX.Element => {
  const something = "asdasd"
  return <div className={styles.actions}>{children}</div>
}
