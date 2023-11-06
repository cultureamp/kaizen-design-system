import React, { HTMLAttributes, ReactNode } from "react"
import { TabList as ReachTabList } from "@reach/tabs"
import classnames from "classnames"
import { OverrideClassName } from "~types/OverrideClassName"
import styles from "./TabList.module.scss"

export type TabListProps = {
  /**
   * Accessible name for the set of tabs
   */
  "aria-label": string
  /**
   * Removes the built in padding
   */
  noPadding?: boolean
  children: ReactNode
} & OverrideClassName<HTMLAttributes<HTMLDivElement>>

/**
 * Wrapper for the tabs themselves
 */
export const TabList = (props: TabListProps): JSX.Element => {
  const {
    "aria-label": ariaLabel,
    noPadding = false,
    children,
    ...restProps
  } = props
  return (
    <ReachTabList
      aria-label={ariaLabel}
      className={classnames(styles.tabList, noPadding && styles.noPadding)}
      {...restProps}
    >
      {children}
    </ReachTabList>
  )
}
