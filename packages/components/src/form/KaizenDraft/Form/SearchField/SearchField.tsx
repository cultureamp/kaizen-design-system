import React from "react"
import { InputSearch, InputSearchProps, Label } from "../Primitives"
import styles from "./SearchField.module.scss"

export interface SearchFieldProps extends InputSearchProps {
  id: string
  labelText: string
  disabled?: boolean
  reversed?: boolean
  secondary?: boolean
}

/**
 * {@link https://cultureamp.design/components/search-field/ Guidance} |
 * {@link https://cultureamp.design/storybook/?path=/docs/components-form-search-field--default-kaizen-demo Storybook}
 */
export const SearchField = ({
  id,
  labelText,
  disabled,
  reversed = false,
  secondary = false,
  classNameOverride,
  ...restProps
}: SearchFieldProps): JSX.Element => {
  const showVisibleLabel = !secondary

  return (
    <div className={classNameOverride}>
      {showVisibleLabel && (
        <Label
          htmlFor={id}
          labelText={labelText}
          reversed={reversed}
          disabled={disabled}
          classNameOverride={styles.label}
        />
      )}
      <InputSearch
        aria-label={!showVisibleLabel ? labelText : undefined}
        id={id}
        disabled={disabled}
        reversed={reversed}
        secondary={secondary}
        {...restProps}
      />
    </div>
  )
}

SearchField.displayName = "SearchField"
