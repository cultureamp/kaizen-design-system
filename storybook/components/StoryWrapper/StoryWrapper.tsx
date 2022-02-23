import React from "react"
import classNames from "classnames"
import styles from "../StoryWrapper/StoryWrapper.scss"
import {
  StoryRowHeader,
  StoryRowHeaderProps,
} from "./components/StoryRowHeader"
import { StoryRow, StoryRowProps } from "./components/StoryRow"

export interface StoryWrapperProps {
  hasNoRowTitles?: boolean
  isReversed?: boolean
  children: Array<React.ReactElement<StoryRowHeaderProps | StoryRowProps>>
}

type Subcomponents = {
  Row: typeof StoryRow
  RowHeader: typeof StoryRowHeader
}

export const StoryWrapper: React.VFC<StoryWrapperProps> & Subcomponents = ({
  hasNoRowTitles = false,
  children,
  isReversed = false,
}) => {
  const childrenCount: number = React.Children.count(children)

  return (
    <div
      className={classNames(styles.storyRowContainer, {
        [styles.noRowTitles]: hasNoRowTitles,
      })}
      style={{
        gridTemplateRows: `repeat(${childrenCount}, min-content)`,
      }}
    >
      {React.Children.map(children, child =>
        React.cloneElement(child, {
          ...child.props,
          isReversed,
        })
      )}
    </div>
  )
}

// Allows dot notation in the component
StoryWrapper.Row = StoryRow
StoryWrapper.RowHeader = StoryRowHeader

StoryWrapper.displayName = "StoryWrapper"
