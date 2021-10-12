import { Tab as ReachTab } from "@reach/tabs"
import React, { ReactNode } from "react"
import classnames from "classnames"
import styles from "./styles.scss"

export interface TabProps {
  /**
   * Gets injected by TabList, no need to specify yourself
   */
  isSelected?: boolean
  disabled?: boolean
  children: ReactNode
}

/**
 * A tab button
 */
export const Tab = (props: TabProps) => {
  const { isSelected, disabled, children } = props
  return (
    <ReachTab
      disabled={disabled}
      className={classnames(styles.tab, { [styles.selected]: isSelected })}
    >
      {children}
    </ReachTab>
  )
}
