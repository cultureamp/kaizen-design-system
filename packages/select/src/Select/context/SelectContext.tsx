import React, { useContext } from "react"

import { SingleState } from "../../types"

export const SelectContext = React.createContext<SingleState | null>(null)

export const useSelectContext = (): SingleState => {
  const context = useContext(SelectContext)
  if (!context) {
    throw new Error(
      "useSelectContext must be used within the SelectContext.Provider"
    )
  }
  return context
}
