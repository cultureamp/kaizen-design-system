import React, { HTMLAttributes, useCallback, useContext, useState } from "react"
import { SelectionMode, Node, Selection } from "@react-types/shared"
import { useListBox } from "@react-aria/listbox"
import { ListProps, ListState, useListState } from "@react-stately/list"
import { VisuallyHidden } from "@kaizen/a11y"
import { Item, Section } from "@react-stately/collections"
import { ItemType, ItemGroupType } from "../../types"

type ItemTestType = ItemType[] | ItemGroupType[]

export interface SelectionProviderProps {
  selectionMode: SelectionMode
  children: React.ReactNode // control how menu should look like
  items?: ItemTestType
  onSelectionChange?: (keys: Selection) => void
  selectedKeys?: Selection
  disabledKeys?: Selection
  label: string
}

export interface SelectionProviderContextType {
  listBoxProps: HTMLAttributes<HTMLElement>
  labelProps: HTMLAttributes<HTMLElement>
  selectionState: ListState<ItemType | ItemGroupType>
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
    (
      nodes: Iterable<Node<ItemType | ItemGroupType>>
    ): Iterable<Node<ItemType | ItemGroupType>> =>
      searchQuery
        ? Array.from(nodes).filter(f =>
            f.textValue.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : nodes,
    [searchQuery]
  )

  // Create state based on the incoming props to manage the selection
  const state: ListState<ItemType | ItemGroupType> = useListState({
    ...props,
    children: item =>
      "children" in item ? (
        <Section title={item.label} key={item.value} items={item.children}>
          {child => <Item key={child.value}>{child.label}</Item>}
        </Section>
      ) : (
        <Item key={item.value}>{item.label}</Item>
      ), // For initialising selection and determined item.renderer, can be only Item or Section
    filter: searchFilter,
  } as ListProps<ItemType | ItemGroupType>)

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
