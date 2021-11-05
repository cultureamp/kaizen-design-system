import { Tab as ReachTab } from "@reach/tabs"
import React, { ReactNode, useState } from "react"
import classnames from "classnames"
import { Badge } from "@kaizen/draft-badge"
import styles from "./styles.scss"

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
}

/**
 * A tab button
 */
export const Tab = (props: TabProps) => {
  const { isSelected, badge, disabled, children } = props
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const showActiveBadge = isSelected || isHovered || isFocused
  return (
    <ReachTab
      disabled={disabled}
      className={classnames(styles.tab, { [styles.selected]: isSelected })}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
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
