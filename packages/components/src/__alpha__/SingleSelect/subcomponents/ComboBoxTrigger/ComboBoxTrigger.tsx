import React from 'react'
import { useIntl } from '@cultureamp/i18n-react-intl'
import classNames from 'classnames'
import { useButton } from 'react-aria'
import { Icon } from '~components/Icon'
import { VisuallyHidden } from '~components/VisuallyHidden'
import { useSingleSelectContext } from '../../context'
import {
  type ClearButtonProps,
  type ComboBoxTriggerProps,
  type DropdownButtonProps,
} from '../../types'
import styles from './ComboBoxTrigger.module.css'

const ClearButton = ({ clearButtonRef, inputRef }: ClearButtonProps): JSX.Element => {
  const { state, isComboBox, fieldLabel } = useSingleSelectContext()

  const { formatMessage } = useIntl()

  const clearButtonAlt = formatMessage(
    {
      id: 'singleSelect.clearButtonAlt',
      defaultMessage: 'Clear {field} selection',
      description: 'Alt text for the clear selection button',
    },
    { field: fieldLabel },
  )

  const { buttonProps } = useButton(
    {
      onPress: () => {
        if (isComboBox) {
          state.setSelectedKey(null)
        }
        inputRef.current?.focus()
      },
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
      <VisuallyHidden>{clearButtonAlt}</VisuallyHidden>
    </button>
  )
}

const DropdownButton = (props: DropdownButtonProps): JSX.Element => {
  const { state, fieldLabel } = useSingleSelectContext()
  const { formatMessage } = useIntl()

  const dropdownButton = formatMessage(
    {
      id: 'singleSelect.dropdownButton',
      defaultMessage: 'Show {field} suggestions',
      description: 'Aria label text for the SingleSelect button to open and close suggestions list',
    },
    { field: fieldLabel },
  )

  const { buttonProps } = useButton(
    { ...props, 'aria-label': String(dropdownButton) },
    props.buttonRef,
  )

  return (
    <button
      type="button"
      {...buttonProps}
      ref={props.buttonRef}
      className={styles.button}
      tabIndex={-1}
    >
      <Icon isPresentational name={state.isOpen ? 'keyboard_arrow_up' : 'keyboard_arrow_down'} />
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
