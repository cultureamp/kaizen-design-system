import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "~types/OverrideClassName"
import styles from "./MultiSelectOptions.module.scss"
import { MultiSelectOption } from "../../types"
import { MultiSelectOptionField } from "../MultiSelectOptionField"
import { VisuallyHidden } from "@kaizen/a11y"

export type MultiSelectOptionsProps = {
  id: string
  options: MultiSelectOption[]
  selectedValues: MultiSelectOption["value"][]
  onChange: (selectedValues: MultiSelectOption["value"][]) => void
} & OverrideClassName<Omit<HTMLAttributes<HTMLFieldSetElement>, "onChange">>

export const MultiSelectOptions = ({
  id,
  options,
  selectedValues,
  onChange,
  classNameOverride,
  ...restProps
}: MultiSelectOptionsProps): JSX.Element => {
  const optionsCountId = `${id}--options-count`

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
        <span>No options available</span>
      ) : (
        options.map(option => (
          <MultiSelectOptionField
            id={`${id}--${option.value}`}
            onChange={() => {
              const isCurrentlySelected = selectedValues.includes(option.value)
              const newValues = isCurrentlySelected
                ? selectedValues.filter(v => v !== option.value)
                : [...selectedValues, option.value]
              onChange(newValues)
            }}
            checkedStatus={
              selectedValues.includes(option.value) ? "checked" : "unchecked"
            }
            option={option}
          />
        ))
      )}
    </fieldset>
  )
}

MultiSelectOptions.displayName = "MultiSelectOptions"
