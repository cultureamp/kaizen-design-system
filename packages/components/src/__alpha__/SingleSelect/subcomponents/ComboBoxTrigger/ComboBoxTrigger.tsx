import React from 'react'
import { useIntl } from '@cultureamp/i18n-react-intl'
import classNames from 'classnames'
import { useButton } from 'react-aria'
import { Icon } from '~components/Icon'
import { VisuallyHidden } from '~components/VisuallyHidden'
import { useSingleSelectContext } from '../../context'
import {
  type ChevronButtonProps,
  type ClearButtonProps,
  type ComboBoxTriggerProps,
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

const ChevronButton = (props: ChevronButtonProps): JSX.Element => {
  const { state, fieldLabel } = useSingleSelectContext()
  const { formatMessage } = useIntl()

  const chevronButton = formatMessage(
    {
      id: 'singleSelect.chevronButton',
      defaultMessage: 'Show suggestions for {field}',
      description: 'Aria label text for the SingleSelect button to open and close suggestions list',
    },
    { field: fieldLabel },
  )

  const { buttonProps } = useButton(
    { ...props, 'aria-label': String(chevronButton), 'aria-labelledby': undefined },
    props.buttonRef,
  )

  return (
    <button
      type="button"
      {...buttonProps}
      ref={props.buttonRef}
      className={styles.chevronButton}
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
  triggerWrapperRef,
  clearButtonRef,
}: ComboBoxTriggerProps): JSX.Element => {
  const { anchorName, isDisabled, isReadOnly, secondary, size } = useSingleSelectContext()

  return (
    <>
      <div
        style={{ '--anchor-name': anchorName } as React.CSSProperties}
        ref={triggerWrapperRef}
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
        {!isDisabled && !isReadOnly && (
          <ClearButton clearButtonRef={clearButtonRef} inputRef={inputRef} />
        )}
        {!isReadOnly && <ChevronButton {...buttonProps} buttonRef={buttonRef} />}
      </div>
    </>
  )
}
