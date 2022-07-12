import React, { HTMLAttributes, useCallback, useContext, useState } from "react"
import {
  CollectionChildren,
  SelectionMode,
  FocusStrategy,
  Node,
  Selection,
} from "@react-types/shared"
import { useListBox } from "@react-aria/listbox"
import { ListState, useListState } from "@react-stately/list"
import { VisuallyHidden } from "@kaizen/a11y"
import { ItemType } from "../type"

export interface SelectionProviderProps {
  selectionMode: SelectionMode
  children: React.ReactNode // control how menu should look like
  autoFocus?: boolean | FocusStrategy
  items: ItemType[]
  renderItems: CollectionChildren<ItemType> // for useListState to initialise selection, can be only Item or Section
  onSelectionChange?: (keys: Selection) => void
  selectedKeys?: Selection
  label: string
}

export interface SelectionProviderContextType {
  listBoxProps: HTMLAttributes<HTMLElement>
  labelProps: HTMLAttributes<HTMLElement>
  selectionState: ListState<ItemType>
  listRef: React.RefObject<HTMLUListElement>
  searchQuery?: string
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>
}

const SelectionContext = React.createContext<SelectionProviderContextType>(
  {} as SelectionProviderContextType
)

export function SelectionProvider({
  renderItems,
  ...props
}: SelectionProviderProps) {
  const [searchQuery, setSearchQuery] = useState<string>("")

  // TODO: Support Async search?
  const searchFilter = useCallback(
    (nodes: Iterable<Node<ItemType>>): Iterable<Node<ItemType>> =>
      searchQuery
        ? Array.from(nodes).filter(f =>
            f.textValue.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : nodes,
    [searchQuery]
  )

  // useListState -> Selection
  const state = useListState({
    ...props,
    children: renderItems,
    filter: searchFilter,
  })

  // useListBox -> A11y
  const ref = React.createRef<HTMLUListElement>()
  const { listBoxProps, labelProps } = useListBox(
    {
      ...props,
      disallowEmptySelection: true, // stop escape key from clearing selection
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
        setSearchQuery,
        searchQuery,
      }}
    >
      <VisuallyHidden {...labelProps}>{props.label}</VisuallyHidden>
      {props.children}
    </SelectionContext.Provider>
  )
}

export const useSelectionContext = () => useContext(SelectionContext)

export const SelectionConsumer = SelectionContext.Consumer
