import * as React from "react"
const styles = require("./styles.module.scss")

export interface CardProps {
  children?: React.ReactNode
}

export const Card = ({ children }: CardProps) => {
  return <div className={styles.wrapper}>{children}</div>
}
