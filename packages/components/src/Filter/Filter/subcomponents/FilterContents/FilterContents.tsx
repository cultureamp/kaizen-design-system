import React, { type HTMLAttributes } from 'react'
import classnames from 'classnames'
import { type OverrideClassName } from '~components/types/OverrideClassName'
import styles from './FilterContents.module.css'

export type FilterContentsProps = {
  children: React.ReactNode
} & OverrideClassName<HTMLAttributes<HTMLDivElement>>

export const FilterContents = ({
  children,
  classNameOverride,
  ...restProps
}: FilterContentsProps): JSX.Element => (
  <div className={classnames(styles.filterContents, classNameOverride)} {...restProps}>
    {children}
  </div>
)

FilterContents.displayName = 'FilterContents'
