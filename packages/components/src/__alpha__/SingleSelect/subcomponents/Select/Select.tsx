import React, { useId, useRef } from 'react'
import { useSelectState } from '@react-stately/select'
import { useSelect } from 'react-aria'
import { Text } from '~components/Text'
import { FieldMessage, Label } from '~components/index'
import { SingleSelectContext } from '../../context'
import { type SelectItem, type SelectProps } from '../../types'
import { List } from '../List'
import { Popover } from '../Popover'
import { SelectTrigger } from '../SelectTrigger'
import styles from './Select.module.css'

export const Select = <T extends SelectItem>(props: SelectProps<T>): JSX.Element => {
  const { label, description, labelHidden, labelPosition, isDisabled, isReadOnly, size, variant } =
    props

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
      'aria-label': labelHidden ? label : undefined,
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
        isDisabled: isDisabled ?? false,
        isReadOnly: isReadOnly ?? false,
        secondary: variant === 'secondary',
        size,
      }}
    >
      <div className={labelPosition === 'top' ? styles.topLabel : styles.sideLabel}>
        {!labelHidden && (
          <div className={styles.label}>
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
            <FieldMessage message={description} />
          </div>
        )}
      </div>

      <Popover state={state} triggerRef={triggerRef} popoverRef={popoverRef}>
        <List listBoxOptions={menuProps} state={state} listBoxRef={listBoxRef} />
      </Popover>
    </SingleSelectContext.Provider>
  )
}
