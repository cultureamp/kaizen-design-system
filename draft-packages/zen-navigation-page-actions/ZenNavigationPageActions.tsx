import classnames from "classnames"
import * as React from "react"

const styles = require("./styles.scss")

export type ZenNavigationPageActionsProps = {
  id?: string
  automationId?: string
  actionButtons?: React.ReactChild[]
  dropdown?: React.ReactNode
}

const ZenNavigationPageActions = ({
  actionButtons,
  dropdown,
}: ZenNavigationPageActionsProps) => (
  <div className={styles.container}>
    {React.Children.map(actionButtons, btn => (
      <div className={styles.buttonContainer}>{btn}</div>
    ))}
    {dropdown}
  </div>
)

export default ZenNavigationPageActions
