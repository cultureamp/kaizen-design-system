import * as React from "react"

const styles = require("./styles.scss")

export type ZenNavigationTabsProps = {
  id?: string
  automationId?: string
  //   onChange?: (event: React.ChangeEvent<HTMLInputElement>) => any
  //   disabled?: boolean
}

type ZenNavigationTabs = React.FunctionComponent<ZenNavigationTabsProps>

const ZenNavigationTabs: ZenNavigationTabs = ({
  id,
  automationId,
  children,
}) => <div className={styles.container}>{children}</div>

export default ZenNavigationTabs
