import { TabPanel as ReachTabPanel } from "@reach/tabs"
import React, { ReactNode } from "react"
import styles from "./styles.scss"

export interface TabPanelProps {
  children: ReactNode
}

/**
 * Wrapper for the content that shows when tab is active
 */
export const TabPanel = (props: TabPanelProps) => {
  const { children } = props
  return <ReachTabPanel className={styles.tabPanel}>{children}</ReachTabPanel>
}
