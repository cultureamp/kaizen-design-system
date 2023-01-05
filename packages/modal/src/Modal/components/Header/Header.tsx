import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import styles from "./Header.scss"

export type HeaderMood =
  | "positive"
  | "informative"
  | "negative"
  | "cautionary"
  | "assertive"
export interface HeaderProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  children: React.ReactNode
  mood?: HeaderMood
}

export const Header: React.FC<HeaderProps> = ({
  children,
  mood,
  classNameOverride,
}): JSX.Element => {
  const something = "asdasd"
  return (
    <div
      className={classnames(
        styles.header,
        mood && styles[mood],
        classNameOverride
      )}
    >
      {children}
    </div>
  )
}

Header.displayName = "Header"
