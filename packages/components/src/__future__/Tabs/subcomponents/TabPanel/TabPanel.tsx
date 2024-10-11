import React from "react"
import {
  TabPanel as RACTabPanel,
  TabPanelProps as RACTabPanelProps,
} from "react-aria-components"
import styles from "./TabPanel.module.css"

export type TabPanelProps = RACTabPanelProps

/**
 * Wrapper for the content that shows when tab is active
 */
export const TabPanel = (props: TabPanelProps): JSX.Element => {
  const { className, children, ...restProps } = props
  return (
    <RACTabPanel className={(styles.tabPanel, className)} {...restProps}>
      {children}
    </RACTabPanel>
  )
}
