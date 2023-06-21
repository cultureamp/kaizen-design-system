import React, { HTMLAttributes, ReactNode } from "react"
import classnames from "classnames"
import { OverrideClassName } from "~types/OverrideClassName"
import styles from "./Wrapper.module.scss"

export type WorkflowWrapperProps = OverrideClassName<
  HTMLAttributes<HTMLDivElement>
> & {
  children: ReactNode
}

export const Wrapper = ({
  children,
  classNameOverride,
  ...restProps
}: WorkflowWrapperProps): JSX.Element => (
  <div className={classnames(styles.wrapper, classNameOverride)} {...restProps}>
    {children}
  </div>
)

Wrapper.displayName = "Workflow.Wrapper"
