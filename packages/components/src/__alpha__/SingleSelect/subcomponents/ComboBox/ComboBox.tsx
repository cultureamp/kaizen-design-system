import React, { useId, useRef } from 'react'
import { useComboBoxState } from '@react-stately/combobox'
import { useComboBox, useFilter } from 'react-aria'
import { FieldMessage } from '~components/FieldMessage'
import { Label } from '~components/Label'
import { SingleSelectContext } from '../../context'
import { type ComboBoxProps, type SelectItem } from '../../types'
import { ComboBoxTrigger } from '../ComboBoxTrigger'
import { List } from '../List'
import { Popover } from '../Popover'
import styles from './ComboBox.module.css'

export const ComboBox = <T extends SelectItem>(props: ComboBoxProps<T>): JSX.Element => {
  const {
    items,
    children,
    label,
    description,
    labelHidden,
    labelPosition,
    isReadOnly,
    isDisabled,
    size,
    variant,
  } = props

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
  const clearButtonRef = useRef<HTMLButtonElement>(null)

  const { labelProps, inputProps, listBoxProps, buttonProps } = useComboBox(
    {
      ...props,
      'aria-label': labelHidden ? label : undefined,
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
        <div className={styles.comboBoxTrigger}>
          <ComboBoxTrigger
            inputProps={inputProps}
            inputRef={inputRef}
            buttonRef={buttonRef}
            buttonProps={buttonProps}
            clearButtonRef={clearButtonRef}
          />
        </div>

        {description && (
          <div className={styles.description}>
            <FieldMessage message={description} />
          </div>
        )}
      </div>

      <Popover
        state={state}
        triggerRef={inputRef}
        popoverRef={popoverRef}
        clearButtonRef={clearButtonRef}
      >
        <List listBoxOptions={listBoxProps} state={state} listBoxRef={listBoxRef} />
      </Popover>
    </SingleSelectContext.Provider>
  )
}
