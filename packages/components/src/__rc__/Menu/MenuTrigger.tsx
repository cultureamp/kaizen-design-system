import React from 'react'
import {
  MenuTrigger as RACMenuTrigger,
  type MenuTriggerProps as RACMenuTriggerProps,
} from 'react-aria-components'

export type MenuTriggerProps = Omit<RACMenuTriggerProps, 'trigger'>

/**
 * A MenuTrigger adds open/close functionality when wrapping a Button and a Popover (with a Menu inside of the MenuPopover)
 */
export const MenuTrigger = (props: MenuTriggerProps): JSX.Element => <RACMenuTrigger {...props} />
