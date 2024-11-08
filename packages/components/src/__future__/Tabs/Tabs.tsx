import React from "react"
import { Tabs as RACTabs, TabsProps as RACTabsProps, Key as RACKey } from "react-aria-components"

export type TabsProps = Omit<RACTabsProps, "orientation">
export type Key = RACKey

/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3081929117/Tabs Guidance} |
 * {@link https://cultureamp.design/?path=/docs/components-tabs--controlled Storybook}
 *
 * Wrapper around all of the tab subcomponents
 * Holds a TabList and TabPanels
 */
export const Tabs = (props: TabsProps): JSX.Element => <RACTabs {...props} />
