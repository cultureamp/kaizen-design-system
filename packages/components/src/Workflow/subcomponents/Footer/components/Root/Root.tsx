import React, { type HTMLAttributes } from 'react'
import classnames from 'classnames'
import { type OverrideClassName } from '~components/types/OverrideClassName'
import styles from './FooterRoot.module.css'

export type FooterRootProps = OverrideClassName<HTMLAttributes<HTMLHeadingElement>>

export const FooterRoot = ({
  children,
  classNameOverride,
  ...restProps
}: FooterRootProps): JSX.Element => (
  <footer className={classnames(styles.footerRoot, classNameOverride)} {...restProps}>
    {children}
  </footer>
)

FooterRoot.displayName = 'Workflow.FooterRoot'
