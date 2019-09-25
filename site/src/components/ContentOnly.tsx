import classnames from "classnames"
import { Link } from "gatsby"
import * as React from "react"

const styles = require("./ContentOnly.scss")

type ContentOnlyProps = {}

export const ContentOnly: React.SFC<ContentOnlyProps> = ({ children }) => (
  <div className={styles.contentOnly}>{children}</div>
)

export const Content: React.SFC = ({ children }) => (
  <div className={styles.content}>{children}</div>
)
