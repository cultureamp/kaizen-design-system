import React, { ReactNode, useState, SyntheticEvent } from "react"
import { Tab as ReachTab } from "@reach/tabs"
import classnames from "classnames"
import { Badge } from "@kaizen/draft-badge"
import styles from "./Tab.module.scss"

export interface TabProps {
  /**
   * Gets injected by TabList, no need to specify yourself
   */
  isSelected?: boolean
  /**
   * Adds a Kaizen Badge component to the tab.
   * Comes with some logic baked in - changes variant based on active/focus/hover state.
   */
  badge?: string
  disabled?: boolean
  children: ReactNode
  onBlur?: (e: SyntheticEvent) => void
  onFocus?: (e: SyntheticEvent) => void
}

/**
 * A tab button
 */
export const Tab = (props: TabProps) => {
  const { isSelected, badge, disabled, children } = props
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const showActiveBadge = isSelected || isHovered || isFocused

  const onFocus = (event: SyntheticEvent) => {
    setIsFocused(true)
    props.onFocus && props.onFocus(event)
  }

  const onBlur = (event: SyntheticEvent) => {
    setIsFocused(false)
    props.onBlur && props.onBlur(event)
  }

  return (
    <ReachTab
      disabled={disabled}
      className={classnames(styles.tab, { [styles.selected]: isSelected })}
      onFocus={onFocus}
      onBlur={onBlur}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      {badge && (
        <span className={styles.badge}>
          <Badge variant={showActiveBadge ? "active" : "default"}>
            {badge}
          </Badge>
        </span>
      )}
    </ReachTab>
  )
}
