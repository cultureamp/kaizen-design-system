import React from "react"
import styles from "./ToolbarSection.module.scss"

export interface ToolbarSectionProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const ToolbarSection: React.VFC<ToolbarSectionProps> = props => (
  <div className={styles.toolbarSection} {...props}></div>
)
