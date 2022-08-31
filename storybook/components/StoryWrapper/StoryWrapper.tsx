import React from "react"
import classNames from "classnames"
import {
  StoryRowHeader,
  StoryRowHeaderProps,
} from "./components/StoryRowHeader"
import { StoryRow, StoryRowProps } from "./components/StoryRow"
import styles from "./StoryWrapper.module.scss"

type ReversibleSubcomponents = StoryRowHeaderProps | StoryRowProps

const isReversibleSubcomponent = (
  child: React.ReactNode
): child is React.ReactElement<ReversibleSubcomponents> =>
  React.isValidElement<ReversibleSubcomponents>(child) &&
  (child.type === StoryRowHeader || child.type === StoryRow)

export interface StoryWrapperProps {
  children: React.ReactNode
  hasNoRowTitles?: boolean
  isReversed?: boolean
  hasColumnDivider?: boolean
  hasRowDivider?: boolean
}

type Subcomponents = {
  Row: typeof StoryRow
  RowHeader: typeof StoryRowHeader
}

export const StoryWrapper: React.VFC<StoryWrapperProps> & Subcomponents = ({
  children,
  hasNoRowTitles = false,
  isReversed = false,
  hasColumnDivider = false,
  hasRowDivider = false,
}) => {
  const childrenCount: number = React.Children.count(children)

  return (
    <div
      className={classNames(styles.storyRowContainer, {
        [styles.noRowTitles]: hasNoRowTitles,
        [styles.rowDivider]: hasRowDivider,
      })}
      style={{
        gridTemplateRows: `repeat(${childrenCount}, min-content)`,
      }}
    >
      {React.Children.map(children, child => {
        if (isReversibleSubcomponent(child)) {
          return React.cloneElement(child, {
            ...child.props,
            isReversed,
            hasColumnDivider,
          })
        }

        return child
      })}
    </div>
  )
}

StoryWrapper.Row = StoryRow
StoryWrapper.RowHeader = StoryRowHeader

StoryWrapper.displayName = "StoryWrapper"
