import React from 'react'
import { useIntl } from '@cultureamp/i18n-react-intl'
import classNames from 'classnames'
import { useButton } from 'react-aria'
import { Icon } from '~components/Icon'
import { useSingleSelectContext } from '../../context'
import { type ComboBoxTriggerProps, type DropdownButtonProps } from '../../types'
import styles from './ComboBoxTrigger.module.css'

const ClearButton = ({
  clearButtonRef,
  inputRef,
}: {
  clearButtonRef: React.RefObject<HTMLButtonElement>
  inputRef: React.RefObject<HTMLInputElement>
}): JSX.Element => {
  const { state, isComboBox } = useSingleSelectContext()

  const { formatMessage } = useIntl()

  const clearButtonAlt = formatMessage({
    id: 'singleSelect.clearButtonAlt',
    defaultMessage: 'Clear selection',
    description: 'Alt text for the clear selection button',
  })

  const { buttonProps } = useButton(
    {
      'onPress': () => {
        if (isComboBox) {
          state.setSelectedKey(null)
        }
        inputRef.current?.focus()
      },
      'aria-label': clearButtonAlt,
    },
    clearButtonRef,
  )

  return (
    <button
      {...buttonProps}
      ref={clearButtonRef}
      type="button"
      className={classNames(styles.clearButton, { [styles.hidden]: !state.selectedKey })}
      tabIndex={0}
    >
      <Icon name="cancel" isPresentational isFilled />
    </button>
  )
}

const DropdownButton = (props: DropdownButtonProps): JSX.Element => {
  const { state } = useSingleSelectContext()
  const { buttonProps } = useButton(props, props.buttonRef)
  const { formatMessage } = useIntl()

  const chevronButtonClose = formatMessage({
    id: 'singleSelect.toggleButtonClose',
    defaultMessage: 'close',
    description: 'Alt text for button that closes list',
  })

  const chevronButtonOpen = formatMessage({
    id: 'singleSelect.toggleButtonOpen',
    defaultMessage: 'open',
    description: 'Alt text for button that opens list',
  })

  return (
    <button
      type="button"
      {...buttonProps}
      ref={props.buttonRef}
      className={styles.button}
      tabIndex={-1}
    >
      <Icon
        alt={state.isOpen ? chevronButtonClose : chevronButtonOpen}
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
  const { anchorName } = useSingleSelectContext()

  return (
    <div style={{ '--anchor-name': anchorName } as React.CSSProperties} className={styles.trigger}>
      <input {...inputProps} ref={inputRef} className={styles.input} />
      <ClearButton clearButtonRef={clearButtonRef} inputRef={inputRef} />
      <DropdownButton {...buttonProps} buttonRef={buttonRef} />
    </div>
  )
}
