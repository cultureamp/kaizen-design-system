import classnames from "classnames"
import * as React from "react"
import WhenUse from "./WhenUse"

const styles = require("./DosAndDonts.scss")

export default ({ children }) => (
  <div className={classnames(styles.card, styles.do)}>
    <WhenUse variant="do" />
    {children}
  </div>
)
