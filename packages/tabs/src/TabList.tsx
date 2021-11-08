import { TabList as ReachTabList } from "@reach/tabs"
import React, { ReactNode } from "react"
import styles from "./styles.scss"

export interface TabListProps {
  /**
   * Accessible name for the set of tabs
   */
  "aria-label": string
  children: ReactNode
}

/**
 * Wrapper for the tabs themselves
 */
export const TabList = (props: TabListProps) => {
  const { "aria-label": ariaLabel, children } = props
  return (
    <ReachTabList className={styles.tabList} aria-label={ariaLabel}>
      {children}
    </ReachTabList>
  )
}
