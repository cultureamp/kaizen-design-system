import React, { useMemo } from 'react'
import { Button as RACButton, Input as RACInput } from 'react-aria-components'
import { Icon } from '~components/__next__/Icon'
import { useSingleSelectContext } from '../../context'
import { type SelectItem, type SelectSection } from '../../types'
import styles from './Trigger.module.css'

function flattenItems(items: (SelectItem | SelectSection)[]): SelectItem[] {
  return items.flatMap((item) => ('options' in item ? item.options : item))
}

interface TriggerProps {
  triggerRef: React.RefObject<HTMLButtonElement | HTMLDivElement>
}

export const Trigger = ({ triggerRef }: TriggerProps): JSX.Element => {
  const {
    isOpen,
    setOpen,
    selectedKey,
    items,
    isSearchable,
    setInputValue,
    inputValue,
    setSelectedKey,
  } = useSingleSelectContext()
  const inputRef = React.useRef<HTMLInputElement>(null)

  // manually handle selected label to show in button
  const flattenedItems = useMemo(() => flattenItems(items), [items])
  const selectedLabel = useMemo(() => {
    const key = selectedKey
    const item = flattenedItems.find((i) => i.value === key)
    return item?.label ?? null
  }, [flattenedItems, selectedKey])

  return isSearchable ? (
    <div className={styles.trigger} ref={triggerRef as React.RefObject<HTMLDivElement>}>
      <RACInput
        ref={inputRef}
        className={styles.input}
        value={inputValue}
        onChange={(e) => setInputValue?.(e.currentTarget.value)}
      />
      {inputValue && inputValue.length > 0 && (
        <button
          type="button"
          onClick={() => {
            inputRef.current?.focus()
            setInputValue?.('')
            setSelectedKey?.(null)
            setOpen(false)
          }}
          className={styles.clearButton}
        >
          <Icon name="cancel" isFilled isPresentational />
        </button>
      )}
      <RACButton className="flex bg-white">
        <Icon name={isOpen ? 'keyboard_arrow_up' : 'keyboard_arrow_down'} isPresentational />
      </RACButton>
    </div>
  ) : (
    <RACButton
      className={styles.trigger}
      ref={triggerRef as React.RefObject<HTMLButtonElement>}
      onPress={() => setOpen(!isOpen)}
      aria-expanded={isOpen}
    >
      {selectedLabel ?? <div></div>}
      <Icon name={isOpen ? 'keyboard_arrow_up' : 'keyboard_arrow_down'} isPresentational />
    </RACButton>
  )
}
