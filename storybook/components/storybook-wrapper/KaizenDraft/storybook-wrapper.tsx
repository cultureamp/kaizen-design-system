import * as React from "react"
import { Heading } from "@kaizen/component-library"
import cx from "classnames"
import styles from "./styles.module.scss"
export interface StorybookGridWrapperProps {
  children?: React.ReactNode
}

export const StorybookGridWrapper = ({
  children,
}: StorybookGridWrapperProps) => {
  const childrenCount: number = React.Children.count(children)

  return (
    <div
      className={cx(styles.StorybookGridWrapper)}
      data-chromatic="ignore"
      style={{
        gridTemplateRows: `0.2fr repeat(${childrenCount}, 1fr)`,
      }}
    >
      {children}
    </div>
  )
}

export interface StorybookRowWrapperProps {
  children?: React.ReactNode
  title?: string
  hasTopHeader?: boolean
  isReversed?: boolean
}

export const StorybookRowWrapper = ({
  children,
  title,
  isReversed = false,
  hasTopHeader,
}: StorybookRowWrapperProps) => {
  if (!children) return null
  const childrenCount: number = React.Children.count(children)
  return (
    <div
      className={cx(styles.StorybookRowWrapper, {
        [styles.topHeader]: hasTopHeader,
      })}
      data-chromatic="ignore"
      style={{
        gridTemplateColumns: `0.2fr repeat(${childrenCount}, 1fr)`,
      }}
    >
      {title && (
        <div data-chromatic="ignore">
          <Heading
            variant="heading-5"
            tag="h2"
            color={isReversed ? "white" : "dark"}
          >
            {title}
          </Heading>
        </div>
      )}
      {children}
    </div>
  )
}
