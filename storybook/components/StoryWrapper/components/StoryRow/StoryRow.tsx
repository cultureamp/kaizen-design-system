import React from "react"
// eslint-disable-next-line import/no-extraneous-dependencies
import { Heading } from "@kaizen/typography"
import styles from "../../StoryWrapper.scss"

export interface StoryRowProps {
  children: React.ReactNode
  rowTitle: string
  isReversed?: boolean
  gridColumns?: number
}

export const StoryRow: React.VFC<StoryRowProps> = ({
  children,
  rowTitle,
  gridColumns,
  isReversed = false,
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
        className={styles.storyRowContainer}
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
