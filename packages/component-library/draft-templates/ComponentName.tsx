import * as React from "react"

// import { Icon } from "@kaizen/component-library"
// import minusIcon from "@kaizen/component-library/icons/minus.icon.svg"

import styles from "./ComponentName.module.scss"

export type ComponentNameProps = {
  id?: string
  automationId?: string
  //   onChange?: (event: React.ChangeEvent<HTMLInputElement>) => any
  //   disabled?: boolean
  children?: React.ReactNode
}

const ComponentName: React.VFC<ComponentNameProps> = ({
  id,
  automationId,
  children,
}) => <div className={styles.container}>{children}</div>

export default ComponentName
