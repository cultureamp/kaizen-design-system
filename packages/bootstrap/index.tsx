import * as React from "react"
import classNames from "classnames"
import styles from "./index.module.scss"

export default ({ children }: { children: React.ReactNode }) => (
  <div className={classNames(styles.wrapper)}>{children}</div>
)
