import classnames from "classnames"
import { Heading } from "@kaizen/component-library"
import * as React from "react"
import styles from "./StoryContainer.scss"

export interface StoryContainerProps {
  children: React.ReactNode
  columns?: "1" | "2" | "3" | "4" | "5" | "6"
  heading?
}
export const StoryContainer = ({
  children,
  columns,
  heading,
  ...otherProps
}: StoryContainerProps) => (
  <div
    className={classnames(styles.storyContainer, {
      [styles[`cols-${columns}`]]: columns,
    })}
    {...otherProps}
  >
    <Heading variant="heading-3" tag="h1">
      {heading}
    </Heading>
    {children}
  </div>
)
