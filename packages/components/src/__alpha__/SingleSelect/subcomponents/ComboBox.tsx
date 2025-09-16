import React, { useId, useRef, useState } from 'react'
import { useComboBoxState } from '@react-stately/combobox'
import { useAsyncList } from '@react-stately/data'
import { useComboBox, useFilter } from 'react-aria'
import { Text } from '~components/Text'
import { SingleSelectContext } from '../context'
import { type ComboBoxProps, type SelectItem } from '../types'
import { ComboBoxTrigger } from './ComboBoxTrigger'
import { List } from './List'
import { Popover } from './Popover'

export const ComboBox = <T extends SelectItem>(props: ComboBoxProps<T>): JSX.Element => {
  const { items, children, label, loadItems, noResultsMessage } = props

  const [hasMore, setHasMore] = useState(false)
  const [filterText, setFilterText] = useState('')

  const filterRef = useRef(filterText)

  const list = useAsyncList<T, number>({
    async load({ cursor }): Promise<{ items: T[]; cursor: number | undefined }> {
      const page = Number(cursor ?? 1)
      if (loadItems) {
        const { items: newItems, hasMore: more } = await loadItems(filterRef.current, page)
        setHasMore(Boolean(more))
        return { items: newItems, cursor: more ? page + 1 : undefined }
      }
      return { items: items ? Array.from(items) : [], cursor: undefined }
    },
  })

  const { contains } = useFilter({ sensitivity: 'base' })

  const state = useComboBoxState({
    ...props,
    items: loadItems ? list.items : items,
    defaultFilter: loadItems ? undefined : contains,
    children: children,
    allowsEmptyCollection: true,
    onInputChange: (value) => {
      if (!loadItems) setFilterText(value)
      if (loadItems) {
        filterRef.current = value
        list.reload()
      }
    },
  })

  const inputRef = useRef<HTMLInputElement>(null)
  const popoverRef = useRef<HTMLDivElement>(null)
  const listBoxRef = useRef<HTMLUListElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const clearButtonRef = useRef<HTMLButtonElement>(null)

  const { labelProps, inputProps, listBoxProps, buttonProps } = useComboBox(
    {
      ...props,
      inputRef,
      buttonRef,
      popoverRef,
      listBoxRef,
    },
    state,
  )
  const uniqueId = useId()
  const anchorName = `--trigger-${uniqueId}`

  return (
    <SingleSelectContext.Provider
      value={{
        anchorName,
        state,
        isComboBox: true,
        fieldLabel: label,
      }}
    >
      <div style={{ display: 'inline-block' }}>
        <div>
          <Text variant="body" {...labelProps}>
            {label}
          </Text>

          <ComboBoxTrigger
            inputProps={inputProps}
            inputRef={inputRef}
            buttonRef={buttonRef}
            buttonProps={buttonProps}
            clearButtonRef={clearButtonRef}
          />
        </div>

        <Popover
          state={state}
          triggerRef={inputRef}
          popoverRef={popoverRef}
          clearButtonRef={clearButtonRef}
        >
          <List
            listBoxOptions={listBoxProps}
            state={state}
            listBoxRef={listBoxRef}
            hasMore={hasMore}
            onLoadMore={() => list.loadMore()}
            loading={list.isLoading}
            noResultsMessage={noResultsMessage}
          />
        </Popover>
      </div>
    </SingleSelectContext.Provider>
  )
}
