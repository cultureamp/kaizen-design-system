import * as React from "react"
import { hot } from "react-hot-loader"

// import { Icon } from "@cultureamp/kaizen-component-library"
// const minusIcon = require("@cultureamp/kaizen-component-library/icons/minus.icon.svg").default

const styles = require("./styles.scss")

export type ComponentNameProps = {
  id?: string
  automationId?: string
  //   onChange?: (event: React.ChangeEvent<HTMLInputElement>) => any
  //   disabled?: boolean
}

type ComponentName = React.FunctionComponent<ComponentNameProps>

const ComponentName: ComponentName = ({ id, automationId, children }) => (
  <div className={styles.container}>{children}</div>
)

export default hot(module)(ComponentName)
