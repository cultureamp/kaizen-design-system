import React from "react"
import classnames from "classnames"
import { StoryRow, StoryRowProps } from "./components/StoryRow"
import {
  StoryRowHeader,
  StoryRowHeaderProps,
} from "./components/StoryRowHeader"
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

/**
 * @deprecated Use StickerSheet instead
 */
export const StoryWrapper = ({
  children,
  hasNoRowTitles = false,
  isReversed = false,
  hasColumnDivider = false,
  hasRowDivider = false,
}: StoryWrapperProps): JSX.Element => {
  const childrenCount: number = React.Children.count(children)

  return (
    <div
      className={classnames(
        styles.storyRowContainer,
        hasNoRowTitles && styles.noRowTitles,
        hasRowDivider && styles.rowDivider,
        isReversed && styles.reversed
      )}
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
