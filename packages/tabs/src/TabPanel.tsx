import React, { ReactNode } from "react"
import { TabPanel as ReachTabPanel } from "@reach/tabs"
import styles from "./TabPanel.module.scss"

export interface TabPanelProps {
  children: ReactNode
}

/**
 * Wrapper for the content that shows when tab is active
 */
export const TabPanel = (props: TabPanelProps): JSX.Element => {
  const { children } = props
  return <ReachTabPanel className={styles.tabPanel}>{children}</ReachTabPanel>
}
