import React, { HTMLAttributes } from 'react'
import classnames from 'classnames'
import { OverrideClassName } from '~components/types/OverrideClassName'
import styles from './Root.module.css'

export type HeaderRootProps = OverrideClassName<
  HTMLAttributes<HTMLHeadingElement>
>

export const HeaderRoot = ({
  children,
  classNameOverride,
  ...restProps
}: HeaderRootProps): JSX.Element => (
  <header className={classnames(styles.root, classNameOverride)} {...restProps}>
    {children}
  </header>
)

HeaderRoot.displayName = 'Workflow.HeaderRoot'
