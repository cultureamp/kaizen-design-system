import React from 'react'
import { useButton } from 'react-aria'
import { Icon } from '~components/Icon'
import { useSingleSelectContext } from '../../context'
import { type ComboBoxTriggerProps, type DropdownButtonProps } from '../../types'
import styles from './ComboBoxTrigger.module.css'

function DropdownButton(props: DropdownButtonProps): JSX.Element {
  const { state } = useSingleSelectContext()
  const { buttonProps } = useButton(props, props.buttonRef)

  return (
    <button
      type="button"
      {...buttonProps}
      ref={props.buttonRef}
      className={styles.button}
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
}: ComboBoxTriggerProps): JSX.Element => {
  const { anchorName } = useSingleSelectContext()

  return (
    <div style={{ '--anchor-name': anchorName } as React.CSSProperties} className={styles.trigger}>
      <input {...inputProps} ref={inputRef} className={styles.input} />
      <DropdownButton {...buttonProps} buttonRef={buttonRef} />
    </div>
  )
}
