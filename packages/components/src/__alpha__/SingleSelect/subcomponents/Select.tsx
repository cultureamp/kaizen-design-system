import React, { useId, useRef } from 'react'
import { useSelect } from 'react-aria'
import { useSelectState } from 'react-stately'
import { Text } from '~components/Text'
import { SingleSelectContext } from '../context'
import { type SelectItem, type SelectProps } from '../types'
import { List } from './List'
import { Popover } from './Popover'
import { SelectTrigger } from './SelectTrigger'

export const Select = <T extends SelectItem>(props: SelectProps<T>): JSX.Element => {
  const { label } = props

  const state = useSelectState({
    ...props,
    items: props.items,
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
          <List listBoxOptions={menuProps} state={state} listBoxRef={listBoxRef} />
        </Popover>
      </div>
    </SingleSelectContext.Provider>
  )
}
