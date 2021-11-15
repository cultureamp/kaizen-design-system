import { TabPanels as ReachTabPanels } from "@reach/tabs"
import React, { ReactNode } from "react"
import styles from "./styles.scss"
export interface TabPanelsProps {
  children: ReactNode
}

/**
 * Wrapper for the content panels
 */
export const TabPanels = (props: TabPanelsProps) => {
  const { children } = props
  return (
    <ReachTabPanels className={styles.tabPanels}>{children}</ReachTabPanels>
  )
}
