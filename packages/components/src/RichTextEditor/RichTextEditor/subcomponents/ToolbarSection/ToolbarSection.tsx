import React from "react"
import styles from "./ToolbarSection.module.scss"

export type ToolbarSectionProps = {
  children: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>

export const ToolbarSection = (props: ToolbarSectionProps): JSX.Element => (
  <div className={styles.toolbarSection} {...props}></div>
)

ToolbarSection.displayName = "ToolbarSection"
