// import classnames from "classnames"
import * as React from "react"
import styles from "./StorySection.scss"

export interface StorySectionProps {
  children: React.ReactNode
}
export const StorySection = ({
  children,
  ...otherProps
}: StorySectionProps) => (
  <div className={styles.storySection} {...otherProps}>
    {children}
  </div>
)
