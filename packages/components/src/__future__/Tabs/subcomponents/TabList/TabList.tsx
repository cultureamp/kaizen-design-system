import React, { ReactNode } from 'react'
import classnames from 'classnames'
import {
  TabList as RACTabList,
  TabListProps as RACTabListProps,
} from 'react-aria-components'
import styles from './TabList.module.css'

export type TabListProps = {
  /**
   * Accessible name for the set of tabs
   */
  'aria-label': string
  /**
   * Removes the built in padding
   */
  noPadding?: boolean
  children: ReactNode
} & RACTabListProps<HTMLElement>

/**
 * Wrapper for the tabs themselves
 */
export const TabList = (props: TabListProps): JSX.Element => {
  const {
    'aria-label': ariaLabel,
    noPadding = false,
    children,
    className,
    ...restProps
  } = props
  return (
    <RACTabList
      aria-label={ariaLabel}
      className={classnames(
        styles.tabList,
        className,
        noPadding && styles.noPadding,
      )}
      {...restProps}
    >
      {children}
    </RACTabList>
  )
}
