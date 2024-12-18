import React, { type HTMLAttributes, type ReactNode } from 'react'
import classnames from 'classnames'
import { type OverrideClassName } from '~components/types/OverrideClassName'
import styles from './Main.module.css'

export type WorkflowMainProps = OverrideClassName<HTMLAttributes<HTMLDivElement>> & {
  children: ReactNode
}

export const Main = ({
  children,
  classNameOverride,
  ...restProps
}: WorkflowMainProps): JSX.Element => (
  <main className={classnames([styles.main, classNameOverride])} {...restProps}>
    {children}
  </main>
)

Main.displayName = 'Workflow.Main'
