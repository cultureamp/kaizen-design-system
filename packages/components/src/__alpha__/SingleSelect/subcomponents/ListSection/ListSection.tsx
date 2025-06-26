import React, { type PropsWithChildren } from 'react'
import classNames from 'classnames'
import {
  Header as RACHeader,
  ListBoxSection as RACListBoxSection,
  type ListBoxSectionProps,
} from 'react-aria-components'
import styles from './ListSection.module.scss'

export const ListSection = ({
  name,
  className,
  children,
  ...props
}: ListBoxSectionProps<object> & PropsWithChildren & { name: string }): React.ReactElement => {
  return (
    <RACListBoxSection {...props}>
      <RACHeader className={classNames(styles.listSectionHeader, className)}>{name}</RACHeader>
      {children}
    </RACListBoxSection>
  )
}
ListSection.displayName = 'SingleSelect.ListSection'
