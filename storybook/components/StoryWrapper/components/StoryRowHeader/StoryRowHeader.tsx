import React from "react"
import classNames from "classnames"
import { Heading } from "../../../../../packages/typography"
import styles from "../../StoryWrapper.module.scss"

export interface StoryRowHeaderProps {
  gridColumns?: number
  headings: string[]
  isReversed?: boolean
}

export const StoryRowHeader = ({
  gridColumns,
  headings,
  isReversed = false,
}: StoryRowHeaderProps): JSX.Element => (
  <div className={styles.storyRow}>
    <div
      className={classNames(styles.storyRowContainer, styles.topHeader)}
      style={{
        gridTemplateColumns: `repeat(${gridColumns || headings.length}, 1fr)`,
      }}
    >
      {headings.map(heading => (
        <Heading
          key={heading}
          variant="heading-5"
          tag="h3"
          color={isReversed ? "white" : "dark"}
        >
          {heading}
        </Heading>
      ))}
    </div>
  </div>
)

StoryRowHeader.displayName = "StoryRowHeader"
