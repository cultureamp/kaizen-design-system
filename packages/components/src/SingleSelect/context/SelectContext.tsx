import React, { useContext } from 'react'
import { type SelectState } from '@react-stately/select'
import { type SingleSelectItem, type SingleSelectOption } from '../types'

// We set the generic default value to `any` as SelectContext
// is instantiated as a constant which does not accept generics.
type SelectContextValue<Option extends SingleSelectOption = any> = {
  state: SelectState<SingleSelectItem<Option>>
}

const SelectContext = React.createContext<SelectContextValue | null>(null)

export const useSelectContext = <
  Option extends SingleSelectOption = SingleSelectOption,
>(): SelectContextValue<Option> => {
  const context = useContext(SelectContext)

  if (!context) {
    throw new Error('useSelectContext must be used within the SelectContext.Provider')
  }

  return context
}

type SelectProviderProps<Option extends SingleSelectOption> = {
  children: React.ReactNode
  state: SelectState<SingleSelectItem<Option>>
}

export const SelectProvider = <Option extends SingleSelectOption = SingleSelectOption>({
  children,
  state,
}: SelectProviderProps<Option>): JSX.Element => (
  <SelectContext.Provider value={{ state }}>{children}</SelectContext.Provider>
)
