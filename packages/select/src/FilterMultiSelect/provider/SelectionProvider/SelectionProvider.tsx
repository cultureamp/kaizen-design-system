import React, { HTMLAttributes, useCallback, useContext, useState } from "react"
import { SelectionMode, Node, Selection } from "@react-types/shared"
import { useListBox } from "@react-aria/listbox"
import { ListState, useListState } from "@react-stately/list"
import { VisuallyHidden } from "@kaizen/a11y"
import { Item, Section } from "@react-stately/collections"
import { ItemType } from "../../types"

export interface SelectionProviderProps {
  selectionMode: SelectionMode
  children: React.ReactNode // control how menu should look like
  items?: ItemType[]
  onSelectionChange?: (keys: Selection) => void
  selectedKeys?: Selection
  disabledKeys?: Selection
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

export function SelectionProvider(props: SelectionProviderProps) {
  const [searchQuery, setSearchQuery] = useState<string>("")

  const searchFilter = useCallback(
    (nodes: Iterable<Node<ItemType>>): Iterable<Node<ItemType>> =>
      searchQuery
        ? Array.from(nodes).filter(f =>
            f.textValue.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : nodes,
    [searchQuery]
  )

  // Create state based on the incoming props to manage the selection
  const state = useListState({
    ...props,
    children: item =>
      item.children ? (
        <Section title={item.label} key={item.value} items={item.children}>
          {child => <Item key={child.value}>{child.label}</Item>}
        </Section>
      ) : (
        <Item key={item.value}>{item.label}</Item>
      ), // For initialising selection and determined item.renderer, can be only Item or Section
    filter: searchFilter,
  })

  // Get A11y attributes and events for the listbox
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
