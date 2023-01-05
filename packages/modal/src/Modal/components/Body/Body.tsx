import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import styles from "./Body.scss"

export interface BodyProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  children: React.ReactNode
}

export const Body: React.FC<BodyProps> = ({
  children,
  classNameOverride,
}): JSX.Element => {
  const something = "asdasd"
  return (
    <div className={classnames(styles.body, classNameOverride)}>{children}</div>
  )
}

Body.displayName = "Body"
