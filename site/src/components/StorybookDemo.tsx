import * as React from "react"

const styles = require("./StorybookDemo.scss")

const StorybookDemo = ({ children }) => (
  <div className={styles.container}>{children}</div>
)

export default StorybookDemo
