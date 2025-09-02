import React from 'react'
import { useButton } from 'react-aria'
import { Icon } from '~components/Icon'
import { useSingleSelectContext } from '../../context'
import { type SelectTriggerProps } from '../../types'
import styles from './SelectTrigger.module.css'

function DropdownButton(): JSX.Element {
  const { state } = useSingleSelectContext()

  return (
    <div className={styles.button}>
      <Icon
        alt={state.isOpen ? 'close' : 'open'}
        name={state.isOpen ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
      />
    </div>
  )
}

export const SelectTrigger = ({
  triggerProps,
  valueProps,
  buttonRef,
}: SelectTriggerProps): JSX.Element => {
  const { state, anchorName } = useSingleSelectContext()
  const { buttonProps } = useButton(triggerProps, buttonRef)

  return (
    <button
      {...buttonProps}
      type="button"
      style={{ '--anchor-name': anchorName } as React.CSSProperties}
      className={styles.trigger}
      ref={buttonRef}
    >
      <span {...valueProps}>{state.selectedItem ? state.selectedItem.rendered : ''}</span>

      <DropdownButton />
    </button>
  )
}
