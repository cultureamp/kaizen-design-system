import React, { type HTMLAttributes, type ReactNode } from 'react'
import classNames from 'classnames'
import { type OverrideClassName } from '~components/types/OverrideClassName'
import { type TagColors } from './types'
import styles from './Tag.module.scss'

export type TagProps = {
  children: ReactNode
  color?: TagColors
  icon?: React.ReactElement
} & OverrideClassName<HTMLAttributes<HTMLSpanElement>>

export const Tag = ({
  children,
  classNameOverride,
  icon,
  color = 'gray',
  ...restProps
}: TagProps): JSX.Element => (
  <span className={classNames(styles.tag, styles[color], classNameOverride)} {...restProps}>
    {icon && <span className={styles.iconContainer}>{icon}</span>}
    {children}
  </span>
)

Tag.displayName = 'Tag'
