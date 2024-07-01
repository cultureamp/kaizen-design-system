import React, { HTMLAttributes, ReactNode } from "react"
import { Tabs as ReachTabs } from "@reach/tabs"

export type TabsProps = {
  /**
   * Index of tab to show by default
   * Only works in uncontrolled mode (when no selectedIndex is provided)
   */
  defaultIndex?: number
  /**
   * Set the selected tab explictly.
   * Enabled controlled mode, meaning you're also responsible for updating this using the onChange callback
   */
  selectedIndex?: number
  /**
   * Callback on tab change
   */
  onChange?: (index: number) => void
  children: ReactNode
} & Omit<HTMLAttributes<HTMLDivElement>, "onChange">

/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3081929117/Tabs Guidance} |
 * {@link https://cultureamp.design/?path=/docs/components-tabs--controlled Storybook}
 *
 * Wrapper around all of the tab subcomponents
 * Holds a TabList and TabPanels
 */
export const Tabs = (props: TabsProps): JSX.Element => {
  const { defaultIndex, selectedIndex, onChange, children, ...restProps } =
    props
  return (
    <ReachTabs
      defaultIndex={defaultIndex}
      index={selectedIndex}
      onChange={onChange}
      {...restProps}
    >
      {children}
    </ReachTabs>
  )
}

Tabs.displayName = "Tabs"
