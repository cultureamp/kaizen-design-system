import React from "react"
import classnames from "classnames"
import { Tab as RACTab, TabProps as RACTabProps } from "react-aria-components"
import { Badge } from "~components/Badge"
import styles from "./Tab.module.css"

export type TabProps = {
  /**
   * Adds a Kaizen Badge component to the tab.
   * Comes with some logic baked in - changes variant based on active/focus/hover state.
   */
  badge?: string
} & Omit<
  RACTabProps,
  // omitting link functionality because it goes against WAI ARIA standards https://www.w3.org/WAI/ARIA/apg/patterns/tabs/
  | "href"
  | "hrefLang"
  | "target"
  | "rel"
  | "download"
  | "ping"
  | "referrerPolicy"
>

/**
 * A tab button
 */
export const Tab = (props: TabProps): JSX.Element => {
  const { badge, children, className, ...restProps } = props

  const tabProps = {
    className: classnames(styles.tab, className),
    ...restProps,
  }

  return (
    <RACTab {...tabProps}>
      {({ isSelected, isFocusVisible, isHovered }) => (
        <>
          {children}
          {badge && (
            <span className={styles.badge}>
              <Badge
                variant={
                  isSelected || isFocusVisible || isHovered
                    ? "active"
                    : "default"
                }
              >
                {badge}
              </Badge>
            </span>
          )}
        </>
      )}
    </RACTab>
  )
}
