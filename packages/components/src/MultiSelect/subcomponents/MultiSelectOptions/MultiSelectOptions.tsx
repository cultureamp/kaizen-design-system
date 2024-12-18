import React, { type HTMLAttributes } from 'react'
import classnames from 'classnames'
import { Text } from '~components/Text'
import { VisuallyHidden } from '~components/VisuallyHidden'
import { type OverrideClassName } from '~components/types/OverrideClassName'
import { type MultiSelectOption } from '../../types'
import { MultiSelectOptionField } from '../MultiSelectOptionField'
import styles from './MultiSelectOptions.module.scss'

export type MultiSelectOptionsProps = {
  id: string
  options: MultiSelectOption[]
  selectedValues: Set<MultiSelectOption['value']>
  onChange: (selectedValues: Set<MultiSelectOption['value']>) => void
} & OverrideClassName<Omit<HTMLAttributes<HTMLFieldSetElement>, 'onChange'>>

export const MultiSelectOptions = ({
  id,
  options,
  selectedValues,
  onChange,
  classNameOverride,
  ...restProps
}: MultiSelectOptionsProps): JSX.Element => {
  const optionsCountId = `${id}--options-count`

  const handleOptionChange = (optionValue: MultiSelectOption['value']): void => {
    const newValues = new Set(selectedValues.values())
    if (newValues.has(optionValue)) {
      newValues.delete(optionValue)
    } else {
      newValues.add(optionValue)
    }
    onChange(newValues)
  }

  return (
    <fieldset
      id={id}
      aria-describedby={optionsCountId}
      className={classnames(styles.multiSelectOptions, classNameOverride)}
      {...restProps}
    >
      <VisuallyHidden id={optionsCountId} aria-live="polite">
        Options available: {options.length}
      </VisuallyHidden>
      {options.length === 0 ? (
        <Text tag="span" variant="body">
          No options available
        </Text>
      ) : (
        options.map((option) => (
          <MultiSelectOptionField
            key={option.value}
            id={`${id}--${option.value}`}
            onChange={() => handleOptionChange(option.value)}
            checkedStatus={selectedValues.has(option.value) ? 'checked' : 'unchecked'}
            option={option}
          />
        ))
      )}
    </fieldset>
  )
}

MultiSelectOptions.displayName = 'MultiSelectOptions'
