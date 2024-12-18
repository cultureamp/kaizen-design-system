import React, { type HTMLAttributes, type ReactNode } from 'react'
import classnames from 'classnames'
import { type OverrideClassName } from '~components/types/OverrideClassName'
import styles from './Wrapper.module.css'

export type WorkflowWrapperProps = OverrideClassName<HTMLAttributes<HTMLDivElement>> & {
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

Wrapper.displayName = 'Workflow.Wrapper'
