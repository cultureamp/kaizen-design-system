import React, { ReactNode } from "react"
import { TabList as ReachTabList } from "@reach/tabs"
import classnames from "classnames"
import styles from "./TabList.module.scss"

export interface TabListProps {
  /**
   * Accessible name for the set of tabs
   */
  "aria-label": string
  /**
   * Removes the built in padding
   */
  noPadding?: boolean
  children: ReactNode
}

/**
 * Wrapper for the tabs themselves
 */
export const TabList = (props: TabListProps): JSX.Element => {
  const { "aria-label": ariaLabel, noPadding = false, children } = props
  return (
    <ReachTabList
      aria-label={ariaLabel}
      className={classnames(styles.tabList, noPadding && styles.noPadding)}
    >
      {children}
    </ReachTabList>
  )
}
