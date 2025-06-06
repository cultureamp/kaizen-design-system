import React, { type HTMLAttributes, type ReactNode } from 'react'
import { TabPanels as ReachTabPanels } from '@reach/tabs'
import { type OverrideClassName } from '~components/types/OverrideClassName'

export type TabPanelsProps = {
  children: ReactNode
} & OverrideClassName<HTMLAttributes<HTMLDivElement>>

/**
 * Wrapper for the content panels
 */
export const TabPanels = (props: TabPanelsProps): JSX.Element => {
  const { children, ...restProps } = props
  return <ReachTabPanels {...restProps}>{children}</ReachTabPanels>
}
