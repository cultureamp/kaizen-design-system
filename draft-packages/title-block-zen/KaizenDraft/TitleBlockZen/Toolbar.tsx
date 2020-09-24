// Toolbar should eventually be broken out
// into its own component since it's a generic
// grouping component for buttons/dropdowns/etc

import { ButtonProps } from "@kaizen/draft-button"
import { MenuProps } from "@kaizen/draft-menu"
import classNames from "classnames"
import * as React from "react"
import styles from "./Toolbar.scss"

type ToolbarProps = {
  items?: Array<React.ReactElement<ButtonProps> | React.ReactElement<MenuProps>>
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
          key={`toolbar-item-${i}`}
        >
          {item}
        </div>
      ))}
    </div>
  )
}

export default Toolbar
