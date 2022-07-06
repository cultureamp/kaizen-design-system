import React, { HTMLAttributes, useContext, useState } from "react"
import { ListState } from "@react-stately/list"
import { ItemType } from "../type"

export interface ListBoxProviderProps {
  /* A11y */
  listBoxProps: HTMLAttributes<HTMLElement>
  labelProps: HTMLAttributes<HTMLElement>
  /* selectionState */
  selectionState: ListState<ItemType>

  listRef: React.RefObject<HTMLUListElement>

  handleSearch: React.ChangeEventHandler<HTMLInputElement>

  children: React.ReactNode
}

export interface ListBoxProviderContextType {
  listBoxProps: HTMLAttributes<HTMLElement>
  labelProps: HTMLAttributes<HTMLElement>
  selectionState: ListState<ItemType>
  listRef: React.RefObject<HTMLUListElement>
  handleSearch: React.ChangeEventHandler<HTMLInputElement>
}

const ListBoxContext = React.createContext<ListBoxProviderContextType>(
  {} as ListBoxProviderContextType
)
export function ListBoxProvider(props: ListBoxProviderProps) {
  const { listBoxProps, labelProps, selectionState, listRef, handleSearch } =
    props
  return (
    <ListBoxContext.Provider
      value={{
        listBoxProps,
        labelProps,
        selectionState,
        listRef,
        handleSearch,
      }}
    >
      {props.children}
    </ListBoxContext.Provider>
  )
}

export const useListBoxContext = () => useContext(ListBoxContext)

export const ListBoxConsumer = ListBoxContext.Consumer
