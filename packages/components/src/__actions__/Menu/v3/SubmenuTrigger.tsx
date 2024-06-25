import React, { createContext } from "react"
import {
  SubmenuTrigger as RACSubmenuTrigger,
  SubmenuTriggerProps as RACSubmenuTriggerProps,
} from "react-aria-components"

export type SubmenuTriggerProps = RACSubmenuTriggerProps

export const SubmenuTriggerContext = createContext<object | null>(null)

/**
 *
 */
export const SubmenuTrigger = (props: RACSubmenuTriggerProps): JSX.Element => (
  <SubmenuTriggerContext.Provider value={{}}>
    <RACSubmenuTrigger {...props} />
  </SubmenuTriggerContext.Provider>
)
