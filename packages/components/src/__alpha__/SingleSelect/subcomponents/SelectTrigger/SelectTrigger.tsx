import React from 'react'
import classNames from 'classnames'
import { useButton } from 'react-aria'
import { Icon } from '~components/Icon'
import { Text } from '~components/Text'
import { useSingleSelectContext } from '../../context'
import { type SelectTriggerProps } from '../../types'
import styles from './SelectTrigger.module.css'

const ChevronButton = (): JSX.Element => {
  const { state } = useSingleSelectContext()

  return (
    <div className={styles.chevronButton}>
      <Icon isPresentational name={state.isOpen ? 'keyboard_arrow_up' : 'keyboard_arrow_down'} />
    </div>
  )
}

export const SelectTrigger = ({
  triggerProps,
  valueProps,
  buttonRef,
}: SelectTriggerProps): JSX.Element => {
  const { state, anchorName, isDisabled, isReadOnly, secondary, size } = useSingleSelectContext()
  const { buttonProps } = useButton(triggerProps, buttonRef)

  return (
    <button
      {...buttonProps}
      type="button"
      style={{ '--anchor-name': anchorName } as React.CSSProperties}
      className={classNames(styles.trigger, {
        [styles.disabled]: isDisabled,
        [styles.readOnly]: isReadOnly,
        [styles.secondary]: secondary,
        [styles.small]: size === 'small',
        [styles.large]: size === 'large',
      })}
      ref={buttonRef}
    >
      <Text
        variant={size === 'small' ? 'small' : 'body'}
        classNameOverride={isDisabled ? styles.disabledText : undefined}
      >
        <span {...valueProps}>{state.selectedItem ? state.selectedItem.textValue : ''}</span>
      </Text>

      {!isReadOnly && <ChevronButton />}
    </button>
  )
}
