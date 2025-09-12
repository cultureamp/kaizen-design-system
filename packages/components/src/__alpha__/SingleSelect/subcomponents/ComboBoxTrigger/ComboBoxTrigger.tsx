import React from 'react'
import classNames from 'classnames'
import { useButton } from 'react-aria'
import { Icon } from '~components/Icon'
import { useSingleSelectContext } from '../../context'
import { type ChevronButtonProps, type ComboBoxTriggerProps } from '../../types'
import styles from './ComboBoxTrigger.module.css'

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
}: ComboBoxTriggerProps): JSX.Element => {
  const { anchorName, isDisabled, isReadOnly, secondary, size } = useSingleSelectContext()

  return (
    <>
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

        {!isReadOnly && <ChevronButton {...buttonProps} buttonRef={buttonRef} />}
      </div>
    </>
  )
}
