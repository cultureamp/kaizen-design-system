import * as React from "react"
const styles = require("./styles.module.scss")

export interface LoadingSpinnerProps {
  /**
   * Remember to annotate your props! The typehints make developers happy
   * @default ""
   */
  children?: React.ReactNode
}

export const LoadingSpinner = ({ children }: LoadingSpinnerProps) => {
  return <h1 className={styles.wrapper}>Hello, {children}</h1>
}
