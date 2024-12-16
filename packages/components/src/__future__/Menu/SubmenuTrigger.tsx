import React, { createContext } from 'react'
import {
  SubmenuTrigger as RACSubmenuTrigger,
  SubmenuTriggerProps as RACSubmenuTriggerProps,
} from 'react-aria-components'

export type SubmenuTriggerProps = RACSubmenuTriggerProps

export const SubmenuTriggerContext = createContext<object | null>(null)

/**
 * A SubmenuTrigger creates a nested Menu triggered by a MenuItem
 */
export const SubmenuTrigger = (props: SubmenuTriggerProps): JSX.Element => (
  <SubmenuTriggerContext.Provider value={{}}>
    <RACSubmenuTrigger {...props} />
  </SubmenuTriggerContext.Provider>
)
