import React, { type HTMLAttributes } from 'react'
import classnames from 'classnames'
import { type OverrideClassName } from '~components/types/OverrideClassName'
import styles from './FieldGroup.module.scss'

export type FieldGroupProps = {
  children?: React.ReactNode
  inline?: boolean
} & OverrideClassName<HTMLAttributes<HTMLDivElement>>

export const FieldGroup = ({
  children,
  inline = false,
  classNameOverride,
  ...restProps
}: FieldGroupProps): JSX.Element => (
  <div
    className={classnames(styles.group, classNameOverride, inline && styles.inline)}
    {...restProps}
  >
    {children}
  </div>
)

FieldGroup.displayName = 'FieldGroup'
