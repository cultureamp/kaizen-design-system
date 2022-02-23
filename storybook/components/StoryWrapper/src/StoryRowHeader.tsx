import React from "react"
import classNames from "classnames"
import { Heading } from "../../../../packages/component-library"
import styles from "./styles.scss"

export interface StoryRowHeaderProps {
  gridColumns?: number
  headings: string[]
  isReversed?: boolean
}

export const StoryRowHeader: React.VFC<StoryRowHeaderProps> = ({
  gridColumns,
  headings,
  isReversed = false,
}) => (
  <div className={styles.storyRow}>
    <div
      className={classNames(styles.storyRowContainer, styles.isTopHeader)}
      style={{
        gridTemplateColumns: `repeat(${gridColumns || headings.length}, 1fr)`,
      }}
    >
      {headings.map(heading => (
        <Heading
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
