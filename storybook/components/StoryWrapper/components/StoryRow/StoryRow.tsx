import React from "react"
import classNames from "classnames"
import { Heading } from "../../../../../packages/typography"
import styles from "../../StoryWrapper.module.scss"

export interface StoryRowProps {
  children: React.ReactNode
  rowTitle: string
  isReversed?: boolean
  gridColumns?: number
  hasColumnDivider?: boolean
}

export const StoryRow: React.VFC<StoryRowProps> = ({
  children,
  rowTitle,
  gridColumns,
  isReversed = false,
  hasColumnDivider = false,
}) => {
  const childrenCount: number = React.Children.count(children)
  return (
    <div className={styles.storyRow}>
      <div className={styles.storyRowTitle}>
        <Heading
          variant="heading-5"
          tag="h2"
          color={isReversed ? "white" : "dark"}
        >
          {rowTitle}
        </Heading>
      </div>
      <div
        className={classNames(styles.storyRowContainer, {
          [styles.columnDivider]: hasColumnDivider,
        })}
        style={{
          gridTemplateColumns: `repeat(${gridColumns || childrenCount}, 1fr)`,
        }}
      >
        {children}
      </div>
    </div>
  )
}

StoryRow.displayName = "StoryRow"
