import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import styles from "./Footer.scss"

export interface FooterProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  children: React.ReactNode
}

export const Footer: React.FC<FooterProps> = ({
  children,
  classNameOverride,
}): JSX.Element => {
  const something = "asdasd"
  return (
    <div className={classnames(styles.footer, classNameOverride)}>
      {children}
    </div>
  )
}

Footer.displayName = "Footer"
