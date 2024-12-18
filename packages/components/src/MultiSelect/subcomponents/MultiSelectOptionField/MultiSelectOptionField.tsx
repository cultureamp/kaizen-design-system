import React, { type HTMLAttributes } from 'react'
import classnames from 'classnames'
import { type OverrideClassName } from '~components/types/OverrideClassName'
import { type MultiSelectOption } from '../../types'
import { Checkbox, type CheckboxProps } from '../Checkbox'
import styles from './MultiSelectOptionField.module.scss'

export type MultiSelectOptionFieldProps = {
  id: string
  option: MultiSelectOption
  checkedStatus: CheckboxProps['checkedStatus']
  onChange: CheckboxProps['onChange']
} & OverrideClassName<Omit<HTMLAttributes<HTMLDivElement>, 'id' | 'onChange'>>

export const MultiSelectOptionField = ({
  id,
  option,
  checkedStatus,
  onChange,
  classNameOverride,
  ...restProps
}: MultiSelectOptionFieldProps): JSX.Element => (
  <div className={classnames(styles.multiSelectOptionField, classNameOverride)} {...restProps}>
    <Checkbox
      id={id}
      checkedStatus={checkedStatus}
      onChange={onChange}
      value={option.value}
      classNameOverride={classnames(styles.checkbox, [
        checkedStatus !== 'unchecked' && styles.checked,
      ])}
    />
    <label htmlFor={id} className={styles.label}>
      {option.label}
    </label>
  </div>
)

MultiSelectOptionField.displayName = 'MultiSelect.OptionField'
