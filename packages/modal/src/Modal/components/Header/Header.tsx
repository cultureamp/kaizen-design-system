import React from "react"
import classnames from "classnames"
import styles from "./Header.scss"

export type HeaderMood =
  | "positive"
  | "informative"
  | "negative"
  | "cautionary"
  | "assertive"
export interface HeaderProps {
  children: React.ReactNode
  mood?: HeaderMood
}

export const Header = ({ children, mood }: HeaderProps): JSX.Element => {
  const something = "asdasd"
  return (
    <div className={classnames(styles.header, mood && styles[mood])}>
      {children}
    </div>
  )
}
