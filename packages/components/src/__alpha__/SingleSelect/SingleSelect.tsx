import React, { isValidElement, type PropsWithChildren } from 'react'
import { useSelectState } from '@react-stately/select'
import { type Key, type Selection } from '@react-types/shared'
import { Select as RACSelect, type ListBoxProps } from 'react-aria-components'
import { SingleSelectContext } from './context'
import { List, ListItem, ListSection, Popover, Trigger } from './subcomponents'
import { type SelectItem, type SelectSection } from './types'

export type SingleSelectProps = {
  children?: React.ReactNode
  items: (SelectItem | SelectSection)[]
  onSelectionChange?: (key: Key | null) => void
}

export const SingleSelect = ({
  items,
  onSelectionChange,
  children,
  ...restProps
}: PropsWithChildren<SingleSelectProps>): JSX.Element => {
  const buttonRef = React.useRef<HTMLButtonElement>(null)
  const popoverRef = React.useRef<HTMLDivElement>(null)
  const racPopoverRef = React.useRef<HTMLElement>(null)

  // Select state without children render prop to keep things flexible
  // and allow for custom list rendering
  const state = useSelectState({
    items,
  })

  const handleOnSelectionChange = (keys: Selection): void => {
    let key: Key | null = null

    if (keys instanceof Set && keys.size > 0) {
      key = Array.from(keys)[0]
    }

    state.setSelectedKey(key)
    if (onSelectionChange) {
      onSelectionChange(key)
    }
  }

  const selectedKeys: Iterable<Key> = state.selectedKey
    ? new Set<Key>([state.selectedKey])
    : new Set()

  // Clone user children injection selection props
  const injectedChildren = isValidElement(children)
    ? React.cloneElement(children as React.ReactElement<ListBoxProps<SelectItem | SelectSection>>, {
        selectionMode: 'single',
        selectedKeys,
        onSelectionChange: handleOnSelectionChange,
        autoFocus: 'first',
      })
    : null

  return (
    <SingleSelectContext.Provider
      value={{
        isOpen: state.isOpen,
        setOpen: state.setOpen,
        selectedKey: state.selectedKey,
        items: items,
      }}
    >
      <RACSelect
        onSelectionChange={(key) =>
          handleOnSelectionChange(key != null ? new Set([key]) : new Set())
        }
        placeholder=""
        {...restProps}
      >
        <Trigger buttonRef={buttonRef} />

        {state.isOpen && (
          <Popover buttonRef={buttonRef} popoverRef={popoverRef} racPopoverRef={racPopoverRef}>
            {injectedChildren}
          </Popover>
        )}
      </RACSelect>
    </SingleSelectContext.Provider>
  )
}

SingleSelect.displayName = 'SingleSelect'
SingleSelect.List = List
SingleSelect.ListItem = ListItem
SingleSelect.ListSection = ListSection
