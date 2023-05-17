import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import styles from "./Root.module.scss"

export type WorkflowHeaderRootProps = OverrideClassName<
  HTMLAttributes<HTMLHeadingElement>
>

export const HeaderRoot = ({
  children,
  classNameOverride,
  ...restProps
}: WorkflowHeaderRootProps): JSX.Element => (
  <header className={classnames(styles.root, classNameOverride)} {...restProps}>
    {children}
  </header>
)

HeaderRoot.displayName = "HeaderRoot"
