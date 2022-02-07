import * as React from "react"
import { Heading } from "@kaizen/component-library"
import classNames from "classnames"
import styles from "./styles.module.scss"
export interface StorybookGridWrapperProps {
  hasNoRowTitles?: boolean
  children?: React.ReactNode
}

export const StorybookGridWrapper = ({
  hasNoRowTitles = false,
  children,
}: StorybookGridWrapperProps) => {
  const childrenCount: number = React.Children.count(children)

  return (
    <div
      className={classNames(styles.StoryRowContainer, {
        [styles.noRowTitles]: hasNoRowTitles,
      })}
      data-chromatic="ignore"
      style={{
        gridTemplateRows: `repeat(${childrenCount}, min-content)`,
      }}
    >
      {children}
    </div>
  )
}

export interface StorybookRowWrapperProps {
  children?: React.ReactNode
  rowTitle?: string
  isTopHeader?: boolean
  isReversed?: boolean
  hasNoRowTitles?: boolean
  gridColumns?: number
}

export const StorybookRowWrapper = ({
  children,
  rowTitle,
  gridColumns,
  isReversed = false,
  isTopHeader = false,
}: StorybookRowWrapperProps) => {
  if (!children) return null
  const childrenCount: number = React.Children.count(children)
  return (
    <div className={styles.StorybookRowWrapper} data-chromatic="ignore">
      {!isTopHeader && rowTitle && (
        <div className={styles.StoryRowTitle} data-chromatic="ignore">
          <Heading
            variant="heading-5"
            tag="h2"
            color={isReversed ? "white" : "dark"}
          >
            {rowTitle}
          </Heading>
        </div>
      )}
      <div
        className={classNames(styles.StoryRowContainer, {
          [styles.topHeader]: isTopHeader,
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
