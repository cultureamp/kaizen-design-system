import React, { useContext, useState } from "react"

export interface SelectOptionProviderProps {
  children: React.ReactNode
}

export interface SelectOptionContextType {
  isOpen: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const SelectOptionContext = React.createContext<SelectOptionContextType>(
  {} as SelectOptionContextType
)
export function SelectOptionProvider(props: SelectOptionProviderProps) {
  const [isOpen, setOpen] = useState(false)

  return (
    <SelectOptionContext.Provider
      value={{
        isOpen,
        setOpen,
      }}
    >
      {props.children}
    </SelectOptionContext.Provider>
  )
}

export const useSelectOptionContext = () => useContext(SelectOptionContext)

export const SelectOptionConsumer = SelectOptionContext.Consumer
