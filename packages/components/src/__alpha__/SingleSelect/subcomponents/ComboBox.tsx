import React, { useEffect, useId, useRef, useState } from 'react'
import { useComboBoxState } from '@react-stately/combobox'
import { useAsyncList } from '@react-stately/data'
import type { Key } from '@react-types/shared'
import { useComboBox, useFilter } from 'react-aria'
import { Text } from '~components/Text'
import { SingleSelectContext } from '../context'
import { type ComboBoxProps, type SelectItem } from '../types'
import { ComboBoxTrigger } from './ComboBoxTrigger'
import { List } from './List'
import { Popover } from './Popover'

export const ComboBox = <T extends SelectItem>({
  items: staticItems,
  children,
  label,
  loadItems,
  noResultsMessage,
  loadingMessage,
  onSelectionChange: passedSelectionChange,
  ...props
}: ComboBoxProps<T>): JSX.Element => {
  const filterRef = useRef('')
  const lastSelectedRef = useRef<Key | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const popoverRef = useRef<HTMLDivElement>(null)
  const listBoxRef = useRef<HTMLUListElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const clearButtonRef = useRef<HTMLButtonElement>(null)

  const [hasMore, setHasMore] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [selectedKey, setSelectedKey] = useState<Key | null>(null)

  const list = useAsyncList<T, number>({
    async load({ cursor }): Promise<{ items: T[]; cursor: number | undefined }> {
      const page = Number(cursor ?? 1)
      if (loadItems) {
        const { items: newItems, hasMore: more } = await loadItems(filterRef.current, page)
        setHasMore(Boolean(more))
        return { items: newItems, cursor: more ? page + 1 : undefined }
      }
      return { items: staticItems ? Array.from(staticItems) : [], cursor: undefined }
    },
  })

  const { contains } = useFilter({ sensitivity: 'base' })

  const debounceDelay = 300
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null)
  const handleInputChange = (value: string): void => {
    setInputValue(value)

    if (loadItems) {
      filterRef.current = value
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current)
      }
      debounceTimeout.current = setTimeout(() => {
        list.reload()
      }, debounceDelay)
    }

    if (value === '') {
      setSelectedKey(null)
      passedSelectionChange?.(null)
    }

    props.onInputChange?.(value)
  }

  const state = useComboBoxState({
    ...props,
    inputValue,
    selectedKey,
    items: loadItems ? list.items : staticItems,
    defaultFilter: loadItems ? undefined : contains,
    children: children,
    allowsEmptyCollection: true,
    onInputChange: (value) => handleInputChange(value),
    onSelectionChange: (key) => {
      setSelectedKey(key)
      passedSelectionChange?.(key)
      if (key !== null) {
        const item = state.collection.getItem(key)
        if (item) {
          setInputValue(item.textValue ?? String(item.rendered))
        }
      }
    },
  })

  const { items: asyncItems } = list
  useEffect(() => {
    if (!loadItems || list.isLoading) return
    if (selectedKey == null) return

    const itemExists = asyncItems.some((item) => item.key === selectedKey)

    if (!itemExists && lastSelectedRef.current === selectedKey) {
      setSelectedKey(null)
      setInputValue('')
      passedSelectionChange?.(null)
    } else if (itemExists) {
      lastSelectedRef.current = selectedKey
    }
  }, [asyncItems, selectedKey, passedSelectionChange, list.isLoading, loadItems])

  const { labelProps, inputProps, listBoxProps, buttonProps } = useComboBox(
    {
      label,
      inputRef,
      buttonRef,
      popoverRef,
      listBoxRef,
      ...props,
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
            setInputValue={setInputValue}
            setSelectedKey={setSelectedKey}
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
            loadingMessage={loadingMessage}
          />
        </Popover>
      </div>
    </SingleSelectContext.Provider>
  )
}
