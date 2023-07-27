import React from "react"
import classnames from "classnames"
import { Heading } from "../../../../../packages/typography"
import styles from "../../StoryWrapper.module.scss"

export interface StoryRowProps {
  children: React.ReactNode
  rowTitle: string
  isReversed?: boolean
  gridColumns?: number
  hasColumnDivider?: boolean
}

export const StoryRow = ({
  children,
  rowTitle,
  gridColumns,
  isReversed = false,
  hasColumnDivider = false,
}: StoryRowProps): JSX.Element => {
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
        className={classnames(
          styles.storyRowContainer,
          hasColumnDivider && styles.columnDivider,
          isReversed && styles.reversed
        )}
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
