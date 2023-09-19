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
} & OverrideClassName<HTMLAttributes<HTMLFieldSetElement>>

export const MultiSelectOptions = ({
  id,
  options,
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
            onChange={() => undefined}
            checkedStatus="unchecked"
            option={option}
          />
        ))
      )}
    </fieldset>
  )
}

MultiSelectOptions.displayName = "MultiSelectOptions"
