import React, { useId, useRef } from 'react'
import { useComboBoxState } from '@react-stately/combobox'
import { useComboBox, useFilter } from 'react-aria'
import { Text } from '~components/Text'
import { SingleSelectContext } from '../context'
import { type ComboBoxProps, type SelectItem } from '../types'
import { ComboBoxTrigger } from './ComboBoxTrigger'
import { List } from './List'
import { Popover } from './Popover'

export const ComboBox = <T extends SelectItem>(props: ComboBoxProps<T>): JSX.Element => {
  const { items, children, label } = props

  const { contains } = useFilter({ sensitivity: 'base' })

  const state = useComboBoxState({
    ...props,
    items: items,
    defaultFilter: contains,
    children: children,
  })

  const inputRef = useRef<HTMLInputElement>(null)
  const popoverRef = useRef<HTMLDivElement>(null)
  const listBoxRef = useRef<HTMLUListElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const triggerWrapperRef = useRef<HTMLDivElement>(null)
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
            triggerWrapperRef={triggerWrapperRef}
          />
        </div>

        <Popover
          state={state}
          triggerRef={triggerWrapperRef}
          popoverRef={popoverRef}
          clearButtonRef={clearButtonRef}
        >
          <List listBoxOptions={listBoxProps} state={state} listBoxRef={listBoxRef} />
        </Popover>
      </div>
    </SingleSelectContext.Provider>
  )
}
