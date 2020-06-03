// Toolbar should eventually be broken out
// into its own component since it's a generic
// grouping component for buttons/dropdowns/etc

import * as React from "react"
const styles = require("./Toolbar.scss")

type ToolbarProps = {
  items?: React.ReactNode[]
}

const Toolbar = ({ items }: ToolbarProps) => {
  return (
    <div className={styles.toolbar}>
      {items!.map((item, i) => (
        <div className={styles.toolbarItem} key={`toolbar-item-${i}`}>
          {item}
        </div>
      ))}
    </div>
  )
}

export default Toolbar
