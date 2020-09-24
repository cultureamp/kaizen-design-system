import classnames from "classnames"
import * as React from "react"

import styles from "./DoAndDontContainer.scss"

export default ({ children }) => (
  <div className={styles.container}>{children}</div>
)
