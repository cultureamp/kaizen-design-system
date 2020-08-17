import * as React from "react"
const styles = require("./styles.module.scss")

export interface AvatarProps {
  /**
   * Remember to annotate your props! The typehints make developers happy
   * @default ""
   */
  children?: React.ReactNode
}

export const Avatar = ({ children }: AvatarProps) => {
  return <h1 className={styles.wrapper}>Hello, {children}</h1>
}
