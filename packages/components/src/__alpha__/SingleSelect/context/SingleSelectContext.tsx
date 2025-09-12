import { createContext, useContext } from 'react'
import { type ComboBoxState } from '@react-stately/combobox'
import { type SelectState } from '@react-stately/select'

type BaseSingleSelectContextType = {
  anchorName: string
  isDisabled: boolean
  isReadOnly: boolean
  secondary: boolean
  size?: 'small' | 'medium' | 'large'
  selectedIcon?: 'check' | 'radio'
  selectedPosition: 'start' | 'end'
}

type SingleSelectContextType =
  | (BaseSingleSelectContextType & {
      state: ComboBoxState<object>
      isComboBox: true
    })
  | (BaseSingleSelectContextType & {
      state: SelectState<object>
      isComboBox: false
    })

export const SingleSelectContext = createContext<SingleSelectContextType | undefined>(undefined)

export const useSingleSelectContext = (): SingleSelectContextType => {
  const context = useContext(SingleSelectContext)
  if (!context) {
    throw new Error('useSingleSelectContext must be used within a SingleSelectContext.Provider')
  }
  return context
}
