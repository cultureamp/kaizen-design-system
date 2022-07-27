// Toolbar should eventually be broken out
// into its own component since it's a generic
// grouping component for buttons/dropdowns/etc

import React from "react"
import classNames from "classnames"
import { ButtonProps } from "@kaizen/button"
import { MenuProps } from "@kaizen/draft-menu"
import styles from "./Toolbar.module.scss"

type ToolbarProps = {
  items?: Array<{
    key: string
    node: React.ReactElement<ButtonProps> | React.ReactElement<MenuProps>
  }>
  noGap?: boolean
}

const Toolbar = ({ items, noGap = false }: ToolbarProps) => {
  if (!items || (items && items.length === 0)) {
    return <></>
  }
  return (
    <div
      className={styles.toolbar}
      data-automation-id="title-block-main-actions-toolbar"
    >
      {items.map((item, i) => (
        <div
          className={classNames(styles.toolbarItem, {
            [styles.noGap]: noGap,
          })}
          key={item.key}
        >
          {item.node}
        </div>
      ))}
    </div>
  )
}

export default Toolbar
