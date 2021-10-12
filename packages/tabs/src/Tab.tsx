import { Tab as HeadlessUITab } from "@headlessui/react"
import React, { ReactNode, ElementType } from "react"
import classnames from "classnames"
import styles from "./styles.scss"

export interface TabGroupProps {
  /**
   * Index of tab to show by default
   */
  defaultIndex?: number
  /**
   * Adjusts keyboard behaviour:
   * auto: active tab is changed immediately on arrow press.
   * manual: tab is only focused on arrow press, user must then press enter/space to activate.
   * Manual is designed for usages where changing tab is an expensive operation.
   */
  keyboardActivation?: "auto" | "manual"
  /**
   * Callback on tab change
   */
  onChange?: (index: number) => void
  /**
   * Renders the component with a custom element
   */
  tag?: ElementType<any>
  children: ReactNode
}

/**
 * Wrapper around the whole thing: holds a tab list and tab panels
 */
export const TabGroup = (props: TabGroupProps) => {
  const {
    defaultIndex,
    keyboardActivation = "auto",
    onChange,
    tag,
    children,
  } = props
  return (
    <HeadlessUITab.Group
      defaultIndex={defaultIndex}
      manual={keyboardActivation === "manual"}
      onChange={onChange}
      as={tag}
    >
      {children}
    </HeadlessUITab.Group>
  )
}

export interface TabListProps {
  /**
   * Accessible name for the set of tabs
   */
  "aria-label": string
  /**
   * Renders the component with a custom element
   */
  tag?: ElementType<any>
  children: ReactNode
}

/**
 * Wrapper for the tabs themselves
 */
export const TabList = (props: TabListProps) => {
  const { tag, "aria-label": ariaLabel, children } = props
  return (
    <HeadlessUITab.List
      as={tag}
      className={styles.tabList}
      aria-label={ariaLabel}
    >
      {children}
    </HeadlessUITab.List>
  )
}

export interface TabProps {
  disabled?: boolean
  children: ReactNode
}

/**
 * A tab button
 */
export const Tab = (props: TabProps) => {
  const { disabled, children } = props
  return (
    <HeadlessUITab
      disabled={disabled}
      className={({ selected }) =>
        classnames(styles.tab, { [styles.selected]: selected })
      }
    >
      {children}
    </HeadlessUITab>
  )
}

export interface TabPanelsProps {
  /**
   * Renders the component with a custom element
   */
  tag?: ElementType<any>
  children: ReactNode
}

/**
 * Wrapper for the panels (content)
 */
export const TabPanels = (props: TabPanelsProps) => {
  const { tag, children } = props
  return <HeadlessUITab.Panels as={tag}>{children}</HeadlessUITab.Panels>
}

export interface TabPanelProps {
  /**
   * Renders the component with a custom element
   */
  tag?: ElementType<any>
  children: ReactNode
}

/**
 * Wrapper for the content that shows when tab is active
 */
export const TabPanel = (props: TabPanelProps) => {
  const { tag, children } = props
  return (
    <HeadlessUITab.Panel as={tag} className={styles.tabPanel}>
      {children}
    </HeadlessUITab.Panel>
  )
}
