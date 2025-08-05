import React, { forwardRef } from 'react'
import { Dialog, type DialogProps } from 'react-aria-components'
import { mergeClassNames } from '~components/utils/mergeClassNames'
import styles from './DialogMenu.module.css'

export type DialogMenuProps = Omit<DialogProps, 'children'> & {
  children: React.ReactNode
  className?: string
}

/**
 * DialogMenu provides the dialog container within the popover.
 * This ensures proper accessibility and focus management for DialogMenu.
 */
export const DialogMenu = forwardRef<HTMLDivElement, DialogMenuProps>(
  ({ className, children, ...props }, ref): JSX.Element => (
    <Dialog className={mergeClassNames(styles.dialog, className)} ref={ref} {...props}>
      <ul className={styles.menu}>{children}</ul>
    </Dialog>
  ),
)
DialogMenu.displayName = 'DialogMenu'
