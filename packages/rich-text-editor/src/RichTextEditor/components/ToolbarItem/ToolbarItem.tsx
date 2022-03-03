import React from "react"
import styles from "./ToolbarItem.scss"

export interface ToolbarItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const ToolbarItem: React.VFC<ToolbarItemProps> = props => (
  <div className={styles.item} {...props} />
)
