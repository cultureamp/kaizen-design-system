import React from "react"
import classnames from "classnames"
import styles from "./Toolbar.scss"

export interface ToolbarProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  /*
   * Connect the Toolbar with the editable content area though its ID
   */
  "aria-controls": string
  /*
   * Provide an accessible name for screen readers for the Toolbar
   */
  "aria-label": string
}

export const Toolbar: React.VFC<ToolbarProps> = props => (
  <div className={styles.toolbar} role="toolbar" {...props}></div>
)
