import React from "react"
import classnames from "classnames"
import styles from "./ToolbarSection.scss"

export interface ToolbarSectionProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const ToolbarSection: React.VFC<ToolbarSectionProps> = props => (
  <div className={styles.toolbarSection} {...props}></div>
)
