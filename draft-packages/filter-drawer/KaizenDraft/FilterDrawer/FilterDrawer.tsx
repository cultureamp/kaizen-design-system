import * as React from "react"
const styles = require("./styles.module.scss")

export interface FilterDrawerProps {
  /**
   * Remember to annotate your props! The typehints make developers happy
   * @default ""
   */
  example?: string
}

export const FilterDrawer = ({ example = "" }: FilterDrawerProps) => {
  return <h1 className={styles.wrapper}>This is your test component</h1>
}
