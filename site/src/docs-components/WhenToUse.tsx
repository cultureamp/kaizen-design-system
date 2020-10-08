import classnames from "classnames"
import * as React from "react"
import WhenOrWhenNotToUse from "./WhenOrWhenNotToUse"

import styles from "./WhenToUseAndWhenNotToUse.scss"

export default ({ children }) => (
  <div className={classnames(styles.card, styles.whenToUse)}>
    <WhenOrWhenNotToUse variant="whenToUse" />
    {children}
  </div>
)
