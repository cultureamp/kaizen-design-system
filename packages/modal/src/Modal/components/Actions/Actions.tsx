import React from "react"
import classnames from "classnames"
import { useMediaQueries } from "@kaizen/responsive"
import styles from "./Actions.scss"

export interface ActionsProps {
  children: React.ReactNode
}

export const Actions = ({ children }: ActionsProps): JSX.Element => {
  const {
    queries: { isSmall },
  } = useMediaQueries()
  return (
    <div
      className={classnames(styles.actions, isSmall && styles.actionsFullWidth)}
    >
      {children}
    </div>
  )
}
