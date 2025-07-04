import { createContext, useContext } from 'react'
import { type Key } from '@react-types/shared'
import { type SelectItem, type SelectSection } from '../types'

type SingleSelectContextType = {
  isOpen: boolean
  setOpen: (open: boolean) => void
  selectedKey: Key | null
  items: (SelectItem | SelectSection)[]
}

export const SingleSelectContext = createContext<SingleSelectContextType | undefined>(undefined)

export const useSingleSelectContext = (): SingleSelectContextType => {
  const context = useContext(SingleSelectContext)
  if (!context) {
    throw new Error('useSingleSelectContext must be used within a SingleSelectContext.Provider')
  }
  return context
}
