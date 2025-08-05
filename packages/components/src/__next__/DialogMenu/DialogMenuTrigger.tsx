import React from 'react'
import {
  DialogTrigger as RACDialogTrigger,
  type DialogTriggerProps as RACDialogTriggerProps,
} from 'react-aria-components'

export type DialogMenuTriggerProps = RACDialogTriggerProps

/**
 * A DialogMenuTrigger adds open/close functionality when wrapping a Button and a Popover (with a DialogMenu inside of the Popover)
 */
export const DialogMenuTrigger = (props: DialogMenuTriggerProps): JSX.Element => (
  <RACDialogTrigger {...props} />
)
