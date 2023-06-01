import React, { PropsWithChildren, HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "~types/OverrideClassName"
import styles from "./Wrapper.module.scss"
export type WorkflowWrapperProps = PropsWithChildren<
  OverrideClassName<HTMLAttributes<HTMLDivElement>>
>

export const Wrapper = ({
  children,
  classNameOverride,
  ...restProps
}: WorkflowWrapperProps): JSX.Element => (
  <div
    className={classnames([styles.wrapper, classNameOverride])}
    {...restProps}
  >
    {children}
  </div>
)

Wrapper.displayName = "Workflow.Wrapper"
