import React, { useMemo } from 'react'
import classNames from 'classnames'
import { Button as RACButton, Input as RACInput } from 'react-aria-components'
import { Icon } from '~components/__next__/Icon'
import { useSingleSelectContext } from '../../context'
import { type SelectItem, type SelectSection, type TriggerProps } from '../../types'
import styles from './Trigger.module.css'

function flattenItems(items: (SelectItem | SelectSection)[]): SelectItem[] {
  return items.flatMap((item) => ('options' in item ? item.options : item))
}

export const Trigger = ({ triggerRef, clearButtonRef }: TriggerProps): JSX.Element => {
  const {
    isOpen,
    setOpen,
    selectedKey,
    items,
    isSearchable,
    setInputValue,
    inputValue,
    setSelectedKey,
    loading,
    anchorName,
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
    <div
      className={styles.trigger}
      ref={triggerRef as React.RefObject<HTMLDivElement>}
      style={{ anchorName: anchorName } as React.CSSProperties}
    >
      {/* TODO: potentially need to handle keydown and escape when in loading or empty */}
      <RACInput
        ref={inputRef}
        className={styles.input}
        value={inputValue}
        onChange={(e) => {
          setInputValue?.(e.currentTarget.value)
          if (!isOpen) setOpen(true)
        }}
      />
      <div className={styles.endContainer}>
        {inputValue && inputValue.length > 0 && (
          <button
            ref={clearButtonRef}
            type="button"
            onClick={() => {
              inputRef.current?.focus()
              setInputValue?.('')
              setSelectedKey?.(null)
              setOpen(false)
            }}
            disabled={loading}
            className={styles.clearButton}
          >
            <Icon
              name="cancel"
              isFilled
              isPresentational
              className={classNames(styles.cancelIcon, { loading: styles.disabled })}
            />
          </button>
        )}
        <RACButton className={styles.chevronButton}>
          <Icon name={isOpen ? 'keyboard_arrow_up' : 'keyboard_arrow_down'} isPresentational />
        </RACButton>
      </div>
    </div>
  ) : (
    <RACButton
      className={styles.trigger}
      ref={triggerRef as React.RefObject<HTMLButtonElement>}
      onPress={() => setOpen(!isOpen)}
      aria-expanded={isOpen}
      style={{ anchorName: anchorName } as React.CSSProperties}
    >
      {selectedLabel ?? <div></div>}
      <Icon name={isOpen ? 'keyboard_arrow_up' : 'keyboard_arrow_down'} isPresentational />
    </RACButton>
  )
}
