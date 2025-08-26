import React, { isValidElement, useEffect, useId, useState, type PropsWithChildren } from 'react'
import { useComboBoxState } from '@react-stately/combobox'
import { useSelectState } from '@react-stately/select'
import { type Key, type Selection } from '@react-types/shared'
import {
  ComboBox as RACComboBox,
  Select as RACSelect,
  type ListBoxProps,
} from 'react-aria-components'
import { LoadingParagraph } from '~components/Loading'
import { Text } from '~components/Text'
import { SingleSelectContext, type SingleSelectContextType } from './context'
import { List, ListItem, ListSection, Popover, Trigger } from './subcomponents'
import { type SelectItem, type SelectSection } from './types'

export type SingleSelectProps = {
  children?: React.ReactNode
  items?: (SelectItem | SelectSection)[] | Promise<(SelectItem | SelectSection)[]>
  onSelectionChange?: (key: Key | null) => void
  isSearchable?: boolean
}

export const SingleSelect = ({
  items: propItems,
  onSelectionChange,
  isSearchable = false,
  children,
  ...restProps
}: PropsWithChildren<SingleSelectProps>): JSX.Element => {
  const triggerRef = React.useRef<HTMLButtonElement | HTMLDivElement>(null)
  const popoverRef = React.useRef<HTMLDivElement>(null)
  const racPopoverRef = React.useRef<HTMLElement>(null)
  const clearButtonRef = React.useRef<HTMLButtonElement>(null)
  const uniqueId = useId()
  const anchorName = `--trigger-${uniqueId}`
  const [inputValue, setInputValue] = React.useState('')
  const [comboSelectedKey, setComboSelectedKey] = useState<Key | null>(null)

  const [items, setItems] = useState<(SelectItem | SelectSection)[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    let isMounted = true
    if (propItems instanceof Promise) {
      setLoading(true)
      propItems.then((resolvedItems) => {
        if (isMounted) {
          setItems(resolvedItems)
          setLoading(false)
        }
      })
    } else if (Array.isArray(propItems)) {
      setItems(propItems)
      setLoading(false)
    } else {
      setItems([])
      setLoading(false)
    }

    return () => {
      isMounted = false
    }
  }, [propItems])

  useEffect(() => {
    if (Array.isArray(propItems)) {
      const hasItems = propItems.length > 0
      setItems(propItems)
      setLoading(!hasItems)
    }
  }, [propItems])

  // Combobox needs a controlled state
  const comboBoxState = useComboBoxState({
    items,
    inputValue,
    selectedKey: comboSelectedKey,
    onInputChange: (val) => {
      setInputValue(val)
      setComboSelectedKey(null) // clear selection when typing
    },
    onSelectionChange: (key) => {
      setComboSelectedKey(key)
      if (key != null) {
        const flatItems = items.flatMap((item) => ('options' in item ? item.options : [item]))
        const selectedItem = flatItems.find((i) => i.value === key)
        if (selectedItem) {
          setInputValue(selectedItem.label) // Update input to label of selected item
        }
      }
    },
  })

  const selectState = useSelectState({
    items,
  })

  const state = isSearchable ? comboBoxState : selectState

  const unifiedSelectedKey = isSearchable ? comboSelectedKey : selectState.selectedKey
  const unifiedSetSelectedKey = isSearchable ? setComboSelectedKey : undefined

  // clears the input in the combobox when the user starts typing after a selection
  useEffect(() => {
    if (isSearchable && inputValue && unifiedSelectedKey != null) {
      const flatItems = items.flatMap((item) => ('options' in item ? item.options : [item]))
      const selectedItem = flatItems.find((i) => i.value === unifiedSelectedKey)
      if (selectedItem?.label !== inputValue) {
        unifiedSetSelectedKey?.(null)
      }
    }
  }, [inputValue, isSearchable, items, unifiedSelectedKey, unifiedSetSelectedKey])

  const handleOnSelectionChange = (keys: Selection): void => {
    let key: Key | null = null
    if (keys instanceof Set && keys.size > 0) {
      key = Array.from(keys)[0]
    }
    state.setSelectedKey(key)

    if (isSearchable && key != null) {
      const flatItems = items.flatMap((item) => ('options' in item ? item.options : [item]))
      const selectedItem = flatItems.find((i) => i.value === key)
      if (selectedItem) {
        setInputValue(selectedItem.label)
      }
    }

    if (onSelectionChange) {
      onSelectionChange(key)
    }
  }

  const selectedKeys: Iterable<Key> = unifiedSelectedKey
    ? new Set<Key>([unifiedSelectedKey])
    : new Set()

  // Clone user children injection selection props
  const injectedChildren = isValidElement(children)
    ? React.cloneElement(children as React.ReactElement<ListBoxProps<SelectItem | SelectSection>>, {
        selectionMode: 'single',
        selectedKeys,
        onSelectionChange: handleOnSelectionChange,
        autoFocus: 'first',
        // dependencies: [items, inputValue],
        renderEmptyState: () => (
          <div style={{ padding: 12, display: 'flex', justifyContent: 'center' }}>
            <Text variant="body">No results found</Text>
          </div>
        ),
      })
    : null

  const SelectComponent = isSearchable ? RACComboBox : RACSelect

  const contextValue: SingleSelectContextType = {
    isOpen: state.isOpen,
    setOpen: state.setOpen,
    selectedKey: unifiedSelectedKey,
    items,
    isSearchable,
    anchorName,
    ...(isSearchable
      ? {
          inputValue,
          setInputValue,
          setSelectedKey: unifiedSetSelectedKey,
          loading: loading,
        }
      : {}),
  }

  return (
    <SingleSelectContext.Provider value={contextValue}>
      <SelectComponent
        menuTrigger="input"
        aria-label="Select component"
        onSelectionChange={(key) =>
          handleOnSelectionChange(key != null ? new Set([key]) : new Set())
        }
        placeholder=""
        {...restProps}
      >
        <Trigger triggerRef={triggerRef} clearButtonRef={clearButtonRef} />
        {state.isOpen && (
          <Popover triggerRef={triggerRef} popoverRef={popoverRef} racPopoverRef={racPopoverRef}>
            {loading ? (
              <div style={{ padding: '16px' }}>
                <LoadingParagraph isAnimated />
                <LoadingParagraph isAnimated />
                <LoadingParagraph isAnimated />
                <LoadingParagraph isAnimated />
              </div>
            ) : (
              injectedChildren
            )}
          </Popover>
        )}
      </SelectComponent>
    </SingleSelectContext.Provider>
  )
}

SingleSelect.displayName = 'SingleSelect'
SingleSelect.List = List
SingleSelect.ListItem = ListItem
SingleSelect.ListSection = ListSection
