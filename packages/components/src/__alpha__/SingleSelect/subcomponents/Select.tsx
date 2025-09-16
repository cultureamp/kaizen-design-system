import React, { useId, useRef } from 'react'
import { useAsyncList } from '@react-stately/data'
import { useSelectState } from '@react-stately/select'
import { useSelect } from 'react-aria'
import { Text } from '~components/Text'
import { SingleSelectContext } from '../context'
import { type SelectItem, type SelectProps } from '../types'
import { List } from './List'
import { Popover } from './Popover'
import { SelectTrigger } from './SelectTrigger'

export const Select = <T extends SelectItem>(props: SelectProps<T>): JSX.Element => {
  const { label, loadItems, noResultsMessage, items, loadingMessage } = props

  const [hasMore, setHasMore] = React.useState(false)

  const list = useAsyncList<T, number>({
    async load({ cursor }): Promise<{ items: T[]; cursor: number | undefined }> {
      const page = Number(cursor ?? 1)
      if (loadItems) {
        const { items: newItems, hasMore: more } = await loadItems(undefined, page)
        setHasMore(Boolean(more))
        return { items: newItems, cursor: more ? page + 1 : undefined }
      }
      return { items: items ? Array.from(items) : [], cursor: undefined }
    },
  })

  const state = useSelectState({
    ...props,
    items: list.items.length ? list.items : [{ key: '__loading', label: '' } as T],
    children: props.children,
  })

  const popoverRef = useRef<HTMLDivElement>(null)
  const listBoxRef = useRef<HTMLUListElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)

  const { labelProps, menuProps, triggerProps, valueProps } = useSelect(
    {
      ...props,
    },
    state,
    triggerRef,
  )
  const uniqueId = useId()
  const anchorName = `--trigger-${uniqueId}`

  return (
    <SingleSelectContext.Provider
      value={{
        anchorName,
        state,
        isComboBox: false,
        fieldLabel: label,
      }}
    >
      <div style={{ display: 'inline-block' }}>
        <div>
          <Text variant="body" {...labelProps}>
            {label}
          </Text>

          <SelectTrigger
            triggerProps={triggerProps}
            valueProps={valueProps}
            buttonRef={triggerRef}
          />
        </div>

        <Popover state={state} triggerRef={triggerRef} popoverRef={popoverRef}>
          <List
            listBoxOptions={menuProps}
            state={state}
            listBoxRef={listBoxRef}
            hasMore={hasMore}
            onLoadMore={() => list.loadMore()}
            loading={list.isLoading}
            loadingMessage={loadingMessage}
            noResultsMessage={noResultsMessage}
          />
        </Popover>
      </div>
    </SingleSelectContext.Provider>
  )
}
