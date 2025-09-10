import React from 'react'
import classNames from 'classnames'
import { useButton } from 'react-aria'
import { Icon } from '~components/Icon'
import { useSingleSelectContext } from '../../context'
import { type ChevronButtonProps, type ComboBoxTriggerProps } from '../../types'
import styles from './ComboBoxTrigger.module.css'

const ClearButton = ({
  clearButtonRef,
  inputRef,
}: {
  clearButtonRef: React.RefObject<HTMLButtonElement>
  inputRef: React.RefObject<HTMLInputElement>
}): JSX.Element => {
  const { state, isComboBox } = useSingleSelectContext()
  const { buttonProps } = useButton(
    {
      'onPress': () => {
        if (isComboBox) {
          state.setSelectedKey(null)
          state.setInputValue('')
        }
        inputRef.current?.focus()
      },
      'aria-label': 'Clear selection',
    },
    clearButtonRef,
  )
  return (
    <button {...buttonProps} ref={clearButtonRef} type="button" className={styles.clearButton}>
      <Icon name="cancel" isPresentational isFilled />
    </button>
  )
}

const ChevronButton = (props: ChevronButtonProps): JSX.Element => {
  const { state } = useSingleSelectContext()
  const { buttonProps } = useButton(props, props.buttonRef)

  return (
    <button
      type="button"
      {...buttonProps}
      ref={props.buttonRef}
      className={styles.chevronButton}
      tabIndex={-1}
    >
      <Icon
        alt={state.isOpen ? 'close' : 'open'}
        name={state.isOpen ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
      />
    </button>
  )
}

export const ComboBoxTrigger = ({
  inputProps,
  inputRef,
  buttonProps,
  buttonRef,
  clearButtonRef,
}: ComboBoxTriggerProps): JSX.Element => {
  const { state, anchorName, isDisabled, isComboBox, isReadOnly, secondary, size } =
    useSingleSelectContext()
  let hasValue = false
  if (isComboBox) {
    hasValue = Boolean(state.inputValue?.length)
  }

  return (
    <div
      style={{ '--anchor-name': anchorName } as React.CSSProperties}
      className={classNames(styles.trigger, {
        [styles.disabled]: isDisabled,
        [styles.readOnly]: isReadOnly,
        [styles.secondary]: secondary,
        [styles.small]: size === 'small',
        [styles.large]: size === 'large',
      })}
    >
      <input
        {...inputProps}
        ref={inputRef}
        className={classNames(styles.input, { [styles.smallText]: size === 'small' })}
      />
      {hasValue && !isReadOnly && (
        <ClearButton inputRef={inputRef} clearButtonRef={clearButtonRef} />
      )}
      {!isReadOnly && <ChevronButton {...buttonProps} buttonRef={buttonRef} />}
    </div>
  )
}
