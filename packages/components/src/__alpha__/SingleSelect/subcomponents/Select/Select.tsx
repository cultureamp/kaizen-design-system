import React, { useId, useMemo, useRef } from 'react'
import { useAsyncList } from '@react-stately/data'
import { useSelectState } from '@react-stately/select'
import classNames from 'classnames'
import { useSelect } from 'react-aria'
import { FieldMessage, Label } from '~components/index'
import { SingleSelectContext } from '../../context'
import { type SelectItem, type SelectProps } from '../../types'
import { List } from '../List'
import { Popover } from '../Popover'
import { SelectTrigger } from '../SelectTrigger'
import styles from './Select.module.css'

export const Select = <T extends SelectItem>({
  label,
  description,
  labelHidden,
  labelPosition = 'top',
  isDisabled,
  isReadOnly,
  size = 'medium',
  variant = 'primary',
  loadItems,
  noResultsMessage,
  loadingMessage,
  items,
  ...props
}: SelectProps<T>): JSX.Element => {
  const popoverRef = useRef<HTMLDivElement>(null)
  const listBoxRef = useRef<HTMLUListElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)

  const uniqueId = useId()
  const anchorName = `--trigger-${uniqueId}`

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

  const itemsForState = useMemo(() => {
    // Placeholder allows popover to open when items are loading or empty
    // placeholder won't be rendered, handled in List
    if (list.items.length === 0 && list.isLoading) {
      return [{ key: '__loading', label: 'Loading...' } as T]
    }
    return list.items
  }, [list.items, list.isLoading])

  const state = useSelectState({
    ...props,
    items: itemsForState,
    children: props.children,
  })

  const { labelProps, descriptionProps, menuProps, triggerProps, valueProps } = useSelect(
    { ...props, label, isDisabled, description, items },
    state,
    triggerRef,
  )

  return (
    <SingleSelectContext.Provider
      value={{
        anchorName,
        state,
        isComboBox: false,
        isDisabled: isDisabled ?? false,
        isReadOnly: isReadOnly ?? false,
        secondary: variant === 'secondary',
        size,
        fieldLabel: label,
      }}
    >
      <div className={labelPosition === 'top' ? styles.topLabel : styles.sideLabel}>
        {!labelHidden && (
          <div className={classNames(styles.label, { [styles.labelTop]: labelPosition === 'top' })}>
            <Label {...labelProps}>{label}</Label>
          </div>
        )}
        <div className={styles.selectTrigger}>
          <SelectTrigger
            triggerProps={triggerProps}
            valueProps={valueProps}
            buttonRef={triggerRef}
          />
        </div>
        {description && (
          <div className={styles.description}>
            <FieldMessage message={description} {...descriptionProps} />
          </div>
        )}
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
    </SingleSelectContext.Provider>
  )
}
