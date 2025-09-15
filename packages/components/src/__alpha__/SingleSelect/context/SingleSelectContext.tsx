import { createContext, useContext } from 'react'
import { type ComboBoxState } from '@react-stately/combobox'
import { type SelectState } from '@react-stately/select'

type SingleSelectContextType =
  | {
      anchorName: string
      state: ComboBoxState<object>
      isComboBox: true
      fieldLabel: React.ReactNode
    }
  | {
      anchorName: string
      state: SelectState<object>
      isComboBox: false
      fieldLabel: React.ReactNode
    }

export const SingleSelectContext = createContext<SingleSelectContextType | undefined>(undefined)

export const useSingleSelectContext = (): SingleSelectContextType => {
  const context = useContext(SingleSelectContext)
  if (!context) {
    throw new Error('useSingleSelectContext must be used within a SingleSelectContext.Provider')
  }
  return context
}
