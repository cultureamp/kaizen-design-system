import React, { useId, useRef } from 'react'
import { useComboBox, useFilter } from 'react-aria'
import { useComboBoxState } from 'react-stately'
import { Text } from '~components/Text'
import { SingleSelectContext } from '../context'
import { type ComboBoxProps } from '../types'
import { ComboBoxTrigger, List, Popover } from './index'

export function ComboBox<T extends object>(props: ComboBoxProps<T>): JSX.Element {
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
          />
        </div>

        <Popover state={state} triggerRef={inputRef} popoverRef={popoverRef}>
          <List listBoxOptions={listBoxProps} state={state} listBoxRef={listBoxRef} />
        </Popover>
      </div>
    </SingleSelectContext.Provider>
  )
}
