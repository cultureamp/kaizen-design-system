import React, { type HTMLAttributes, type PropsWithChildren } from 'react'
import { Popover as RACPopover, Select as RACSelect } from 'react-aria-components'
import { type OverrideClassName } from '~components/types/OverrideClassName'
import { List, ListItem, ListSection, Trigger } from './subcomponents'
import styles from './SingleSelect.module.css'

export type SingleSelectProps = {
  children?: React.ReactNode
} & OverrideClassName<HTMLAttributes<Element>>

export const SingleSelect = ({
  classNameOverride,
  children,
  ...restProps
}: PropsWithChildren<SingleSelectProps>): JSX.Element => {
  return (
    <RACSelect className={classNameOverride} placeholder="" {...restProps}>
      <Trigger />
      <RACPopover className={styles.popover}>{children}</RACPopover>
    </RACSelect>
  )
}

SingleSelect.displayName = 'SingleSelect'
SingleSelect.List = List
SingleSelect.ListItem = ListItem
SingleSelect.ListSection = ListSection
