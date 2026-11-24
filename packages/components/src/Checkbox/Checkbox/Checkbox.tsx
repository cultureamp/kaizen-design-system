import React, { useId, type InputHTMLAttributes } from 'react'
import { FormattedMessage } from '@cultureamp/i18n-react-intl'
import classnames from 'classnames'
import { Icon } from '~components/Icon'
import { VisuallyHidden } from '~components/VisuallyHidden'
import { type OverrideClassName } from '~components/types/OverrideClassName'
import styles from './Checkbox.module.scss'

export type CheckedStatus = 'on' | 'off' | 'mixed'

export type CheckboxProps = {
  checkedStatus?: CheckedStatus
  onCheck?: (event: React.ChangeEvent<HTMLInputElement>) => any
  reversed?: boolean
  value?: string
} & OverrideClassName<Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange' | 'checked'>>

const renderCheckOrMixedIcon = (status: CheckedStatus, reversed: boolean): React.ReactNode => {
  if (status === 'off') return

  return (
    <Icon
      name={status === 'on' ? 'check' : 'remove'}
      isPresentational
      className={classnames(styles.icon, reversed && styles.reversed)}
    />
  )
}

const getCheckedFromStatus = (checkedStatus: CheckedStatus): boolean => checkedStatus === 'on'

export const Checkbox = ({
  checkedStatus = 'off',
  onCheck,
  reversed = false,
  value,
  classNameOverride,
  disabled,
  readOnly,
  'aria-describedby': ariaDescribedBy,
  onClick,
  ...restProps
}: CheckboxProps): JSX.Element => {
  const readOnlyId = useId()
  const isReadOnly = (Boolean(readOnly) || onCheck === undefined) && !disabled
  const describedBy =
    [ariaDescribedBy, isReadOnly ? readOnlyId : undefined].filter(Boolean).join(' ') || undefined

  return (
    <span className={styles.container}>
      <input
        ref={(node): void => {
          if (node) {
            node.indeterminate = checkedStatus === 'mixed'
          }
        }}
        // This is only used as a handle for unit testing
        data-indeterminate={checkedStatus === 'mixed'}
        type="checkbox"
        className={classnames(styles.checkbox, classNameOverride, reversed && styles.reversed)}
        checked={getCheckedFromStatus(checkedStatus)}
        onChange={isReadOnly ? undefined : onCheck}
        value={value ?? checkedStatus}
        readOnly={isReadOnly}
        disabled={disabled}
        aria-describedby={describedBy}
        onClick={(event): void => {
          // `readOnly` has no effect on checkboxes; the native toggle would clear `indeterminate`
          if (isReadOnly) event.preventDefault()
          onClick?.(event)
        }}
        {...restProps}
      />
      {/* .box must directly follow the input: its styles use `.checkbox:checked + .box` */}
      <span className={classnames(styles.box, reversed && styles.reversed)}>
        {renderCheckOrMixedIcon(checkedStatus, reversed)}
      </span>
      {isReadOnly && (
        <VisuallyHidden id={readOnlyId}>
          <FormattedMessage
            id="kz.checkbox.readOnly"
            defaultMessage="Read only"
            description="Screen reader description for a checkbox whose value can be seen but not changed. Announced after the checkbox label."
          />
        </VisuallyHidden>
      )}
    </span>
  )
}

Checkbox.displayName = 'Checkbox'
