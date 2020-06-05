// Toolbar should eventually be broken out
// into its own component since it's a generic
// grouping component for buttons/dropdowns/etc

import classNames from "classnames"
import * as React from "react"
const styles = require("./Toolbar.scss")

type ToolbarProps = {
  items?: React.ReactNode[]
  noGap?: boolean
}

const Toolbar = ({ items, noGap = false }: ToolbarProps) => {
  return (
    <div className={styles.toolbar}>
      {items!.map((item, i) => (
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
