import React, { HTMLAttributes, ReactNode } from "react"
import { TabPanel as ReachTabPanel } from "@reach/tabs"
import { OverrideClassName } from "~types/OverrideClassName"
import styles from "./TabPanel.module.scss"

export type TabPanelProps = {
  children: ReactNode
} & OverrideClassName<HTMLAttributes<HTMLDivElement>>

/**
 * Wrapper for the content that shows when tab is active
 */
export const TabPanel = (props: TabPanelProps): JSX.Element => {
  const { classNameOverride, children, ...restProps } = props
  return (
    <ReachTabPanel
      className={(styles.tabPanel, classNameOverride)}
      {...restProps}
    >
      {children}
    </ReachTabPanel>
  )
}
