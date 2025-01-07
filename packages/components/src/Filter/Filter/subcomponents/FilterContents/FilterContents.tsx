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
  // TODO: this initially has 24px of padding by default, but classNameOverride SHOULD supersede this (it doesn't because it gets compile later in the cascade)
  <div className={classnames(styles.filterContents, classNameOverride)} {...restProps}>
    {children}
  </div>
)

FilterContents.displayName = 'FilterContents'
