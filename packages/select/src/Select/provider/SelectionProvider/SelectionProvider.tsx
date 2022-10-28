import React, { HTMLAttributes, useContext, Key } from "react"
import { useListBox } from "@react-aria/listbox"
import {
  SingleSelectListState,
  useListState,
  useSingleSelectListState,
} from "@react-stately/list"
import { VisuallyHidden } from "@kaizen/a11y"
import { Item } from "@react-stately/collections"
import { ItemType } from "../../types"

export interface SelectionProviderProps {
  children: React.ReactNode // control how menu should look like
  items?: ItemType[]
  onSelectionChange?: (key: Key) => any
  selectedKey?: Key | null
  label: string
}

export interface SelectionProviderContextType {
  listBoxProps: HTMLAttributes<HTMLElement>
  labelProps: HTMLAttributes<HTMLElement>
  selectionState: SingleSelectListState<ItemType>
  listRef: React.RefObject<HTMLUListElement>
}

const SelectionContext = React.createContext<SelectionProviderContextType>(
  {} as SelectionProviderContextType
)

export const SelectionProvider = (props: SelectionProviderProps) => {
  const { ...otherProps } = props

  // Create state based on the incoming props to manage the selection
  const state = useSingleSelectListState({
    ...otherProps,
    children: item => <Item key={item.value}>{item.label}</Item>, // For initialising selection and determined item.renderer, can be only Item or Section
  })

  // Get A11y attributes and events for the listbox
  const ref = React.createRef<HTMLUListElement>()
  const { listBoxProps, labelProps } = useListBox(
    {
      autoFocus: true,
      disallowEmptySelection: true,
    },
    state,
    ref
  )

  return (
    <SelectionContext.Provider
      value={{
        listBoxProps,
        labelProps,
        selectionState: state,
        listRef: ref,
      }}
    >
      <VisuallyHidden {...labelProps}>{otherProps.label}</VisuallyHidden>
      <VisuallyHidden>{otherProps.label}</VisuallyHidden>
      {otherProps.children}
    </SelectionContext.Provider>
  )
}

export const useSelectionContext = () => useContext(SelectionContext)

export const SelectionConsumer = SelectionContext.Consumer

SelectionProvider.displayName = "SelectionProvider"
