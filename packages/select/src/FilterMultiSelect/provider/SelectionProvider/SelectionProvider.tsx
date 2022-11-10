import React, { HTMLAttributes, useCallback, useContext, useState } from "react"
import { SelectionMode, Node, Selection } from "@react-types/shared"
import { useListBox } from "@react-aria/listbox"
import { ListState, useListState } from "@react-stately/list"
import { VisuallyHidden } from "@kaizen/a11y"
import { Item } from "@react-stately/collections"
import { ItemType } from "../../types"

export interface SelectionProviderProps {
  selectionMode: SelectionMode
  children: React.ReactNode // control how menu should look like
  items?: ItemType[]
  onSelectionChange?: (keys: Selection) => void
  selectedKeys?: Selection
  label: string
  disabledKeys?: Selection
  onSearchInputChange?: (searchInput: string) => void
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

export const SelectionProvider = (props: SelectionProviderProps) => {
  const { onSearchInputChange, ...otherProps } = props
  const isFirstRender = React.useRef(true)
  const [searchQuery, setSearchQuery] = useState<string>("")

  /**
   * While the onSearchInputChange  is a side-effect, this useEffect should be fine.
   * If the search input state becomes controlled, this useEffect could cause synchronisation
   * issues and should be replaced.
   */
  React.useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    if (onSearchInputChange) {
      onSearchInputChange(searchQuery)
    }
  }, [searchQuery, onSearchInputChange])

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
    ...otherProps,
    children: item => <Item key={item.value}>{item.label}</Item>, // For initialising selection and determined item.renderer, can be only Item or Section
    filter: onSearchInputChange ? undefined : searchFilter, // If the user has passed an `onSearchInputChange` we opt them out of the default filtering
  })

  // Get A11y attributes and events for the listbox
  const ref = React.createRef<HTMLUListElement>()
  const { listBoxProps, labelProps } = useListBox(
    {
      ...otherProps,
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
      <VisuallyHidden {...labelProps}>{otherProps.label}</VisuallyHidden>
      {otherProps.children}
    </SelectionContext.Provider>
  )
}

export const useSelectionContext = () => useContext(SelectionContext)

export const SelectionConsumer = SelectionContext.Consumer

SelectionProvider.displayName = "SelectionProvider"
