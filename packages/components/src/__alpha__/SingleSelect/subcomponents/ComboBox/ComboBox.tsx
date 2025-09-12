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
    labelPosition = 'top',
    isReadOnly,
    isDisabled,
    size = 'medium',
    variant = 'primary',
    selectedIcon = 'check',
    selectedPosition = 'end',
  } = props

  const { contains } = useFilter({ sensitivity: 'base' })

  const state = useComboBoxState({
    ...props,
    items: items,
    defaultFilter: contains,
    children: children,
    menuTrigger: 'focus',
  })

  const inputRef = useRef<HTMLInputElement>(null)
  const popoverRef = useRef<HTMLDivElement>(null)
  const listBoxRef = useRef<HTMLUListElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const { labelProps, descriptionProps, inputProps, listBoxProps, buttonProps } = useComboBox(
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
        selectedPosition,
        selectedIcon,
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
          />
        </div>

        {description && (
          <div className={styles.description}>
            <FieldMessage message={description} {...descriptionProps} />
          </div>
        )}
      </div>

      <Popover state={state} triggerRef={inputRef} popoverRef={popoverRef}>
        <List listBoxOptions={listBoxProps} state={state} listBoxRef={listBoxRef} />
      </Popover>
    </SingleSelectContext.Provider>
  )
}
