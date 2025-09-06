import React, { forwardRef, type ReactNode } from 'react'
import { Header } from 'react-aria-components'

export type MenuHeaderProps = { children: ReactNode }

/**
 * A <header> element, used to title a MenuSection
 */
export const MenuHeader = forwardRef<HTMLDivElement, MenuHeaderProps>(
  (props, ref): JSX.Element => <Header ref={ref} {...props} />,
)
MenuHeader.displayName = 'MenuHeader'
