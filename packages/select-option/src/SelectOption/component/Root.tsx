import React from "react"
import { SelectOptionProvider } from "../provider/SelectOptionProvider"
import styles from "./SelectOption.scss"

export interface RootProps {
  children: React.ReactNode
  trigger: React.ReactNode
}

export function Root(props: RootProps) {
  return (
    <SelectOptionProvider>
      <div className={styles.wrapper}>
        {props.trigger}
        <div className={styles.children}>{props.children}</div>
      </div>
    </SelectOptionProvider>
  )
}
Root.displayName = "Select"
