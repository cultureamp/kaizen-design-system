import React, { forwardRef, type ReactNode } from 'react'
import { Header } from 'react-aria-components'

export type DialogMenuHeaderProps = { children: ReactNode }

/**
 * A <header> element, used to title a DialogMenuSection
 */
export const DialogMenuHeader = forwardRef<HTMLDivElement, DialogMenuHeaderProps>(
  (props, ref): JSX.Element => <Header ref={ref} {...props} />,
)
DialogMenuHeader.displayName = 'DialogMenuHeader'
