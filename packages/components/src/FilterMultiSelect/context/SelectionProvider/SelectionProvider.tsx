import React, { HTMLAttributes, useCallback, useContext, useState } from "react"
import { useListBox } from "@react-aria/listbox"
import { Item } from "@react-stately/collections"
import { ListState, useListState } from "@react-stately/list"
import { SelectionMode, Selection } from "@react-types/shared"
import { VisuallyHidden } from "@kaizen/a11y"
import { ItemType, MultiSelectItem } from "../../types"
import { useMenuTriggerContext } from "../MenuTriggerProvider"

export type SelectionProviderProps = {
  selectionMode: SelectionMode
  children: React.ReactNode // control how menu should look like
  items?: ItemType[]
  onSelectionChange?: (keys: Selection) => void
  /** The currently selected keys in the collection (controlled). */
  selectedKeys?: Selection
  /** The initial selected keys in the collection (uncontrolled). */
  defaultSelectedKeys?: Selection
  label: string
  disabledKeys?: Selection
  onSearchInputChange?: (searchInput: string) => void
}

export type SelectionProviderContextType = {
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

export const SelectionProvider = (
  props: SelectionProviderProps
): JSX.Element => {
  const { onSearchInputChange, ...otherProps } = props
  const [searchQuery, setSearchQuery] = useState<string>("")
  const { menuProps } = useMenuTriggerContext()
  /**
   * While the onSearchInputChange  is a side-effect, this useEffect should be fine.
   * If the search input state becomes controlled, this useEffect could cause synchronisation
   * issues and should be replaced.
   */

  React.useEffect(() => {
    if (onSearchInputChange) {
      onSearchInputChange(searchQuery)
    }
  }, [searchQuery, onSearchInputChange])

  const searchFilter = useCallback(
    (nodes: Iterable<MultiSelectItem>): Iterable<MultiSelectItem> =>
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
      ...menuProps,
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

export const useSelectionContext = (): SelectionProviderContextType =>
  useContext(SelectionContext)

export const SelectionConsumer = SelectionContext.Consumer

SelectionProvider.displayName = "SelectionProvider"
