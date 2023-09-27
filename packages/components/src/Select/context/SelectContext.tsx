import React, { useContext } from "react"
import { SelectState } from "@react-stately/select"
import { SelectItem, SelectOption } from "../types"

// We set the generic default value to `any` as SelectContext
// is instantiated as a constant which does not accept generics.
type SelectContextValue<Option extends SelectOption = any> = {
  state: SelectState<SelectItem<Option>>
}

const SelectContext = React.createContext<SelectContextValue | null>(null)

export const useSelectContext = <
  Option extends SelectOption = SelectOption,
>(): SelectContextValue<Option> => {
  const context = useContext(SelectContext)

  if (!context) {
    throw new Error(
      "useSelectContext must be used within the SelectContext.Provider"
    )
  }

  return context
}

type SelectProviderProps<Option extends SelectOption> = {
  children: React.ReactNode
  state: SelectState<SelectItem<Option>>
}

export const SelectProvider = <Option extends SelectOption = SelectOption>({
  children,
  state,
}: SelectProviderProps<Option>): JSX.Element => (
  <SelectContext.Provider value={{ state }}>{children}</SelectContext.Provider>
)
